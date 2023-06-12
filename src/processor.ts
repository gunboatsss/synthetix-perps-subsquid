import { BatchHandlerContext, BatchProcessorItem, EvmBatchProcessor } from "@subsquid/evm-processor";
import * as FuturesMarketManager from "./abi/0xd30bdFd7e7a65fE109D5dE1D4e95F3B800FB7463";
import * as PerpsV2MarketData from "./abi/0x340B5d664834113735730Ad4aFb3760219Ad9112";
import { lookupArchive } from "@subsquid/archive-registry";
import { Store, TypeormDatabase } from "@subsquid/typeorm-store";
import { ethers } from "ethers";
import { Market } from "./model";
type Item = BatchProcessorItem<typeof processor>
type Context = BatchHandlerContext<Store, Item>

const CONTRACT_ADDRESS = "0xd30bdFd7e7a65fE109D5dE1D4e95F3B800FB7463";
const PerpsV2MarketDataAddress = "0x340B5d664834113735730Ad4aFb3760219Ad9112";
let processor = new EvmBatchProcessor()
    .setDataSource({
        chain: process.env.OPTIMISM_RPC,
        archive: lookupArchive('optimism-mainnet')
    })
    .setBlockRange({
        from: 86524190
    })
    .addLog(CONTRACT_ADDRESS, {
        filter: [[FuturesMarketManager.events.MarketAdded.topic]],
        data: {
            evmLog: {
                topics: true,
                data: true
            },
            transaction: {
                hash: true
            }
        }
    })
processor.run(new TypeormDatabase(), async (ctx) => {
    let markets = await handleMarkets(ctx);
    for (let block of ctx.blocks) {
        for (let item of block.items) {
            if(item.kind !== 'evmLog') continue
        }
    }
    await ctx.store.upsert(markets)
})

async function handleMarkets (ctx: Context) {
    let markets: Market[] = [];
    const lastBlock = ctx.blocks[ctx.blocks.length - 1].header;
    const perpsV2MarketData = new PerpsV2MarketData.Contract(ctx, lastBlock, PerpsV2MarketDataAddress);
    const readResult = await perpsV2MarketData.allProxiedMarketSummaries();
    for (let market of readResult) {
        const insert = new Market({
            id: market.key,
            asset: ethers.utils.toUtf8String(market.asset).replace(/\0/g, ''),
            market: market.market,
            marketKey: ethers.utils.toUtf8String(market.key).replace(/\0/g, '')
        });
        markets.push(insert);
    }
    return markets;
}