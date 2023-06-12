export const ABI_JSON = [
    {
        "type": "constructor",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_resolverProxy"
            }
        ]
    },
    {
        "type": "function",
        "name": "allMarketSummaries",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "tuple[]",
                "components": [
                    {
                        "type": "address",
                        "name": "market"
                    },
                    {
                        "type": "bytes32",
                        "name": "asset"
                    },
                    {
                        "type": "bytes32",
                        "name": "key"
                    },
                    {
                        "type": "uint256",
                        "name": "maxLeverage"
                    },
                    {
                        "type": "uint256",
                        "name": "price"
                    },
                    {
                        "type": "uint256",
                        "name": "marketSize"
                    },
                    {
                        "type": "int256",
                        "name": "marketSkew"
                    },
                    {
                        "type": "uint256",
                        "name": "marketDebt"
                    },
                    {
                        "type": "int256",
                        "name": "currentFundingRate"
                    },
                    {
                        "type": "int256",
                        "name": "currentFundingVelocity"
                    },
                    {
                        "type": "tuple",
                        "name": "feeRates",
                        "components": [
                            {
                                "type": "uint256",
                                "name": "takerFee"
                            },
                            {
                                "type": "uint256",
                                "name": "makerFee"
                            },
                            {
                                "type": "uint256",
                                "name": "takerFeeDelayedOrder"
                            },
                            {
                                "type": "uint256",
                                "name": "makerFeeDelayedOrder"
                            },
                            {
                                "type": "uint256",
                                "name": "takerFeeOffchainDelayedOrder"
                            },
                            {
                                "type": "uint256",
                                "name": "makerFeeOffchainDelayedOrder"
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "type": "function",
        "name": "allProxiedMarketSummaries",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "tuple[]",
                "components": [
                    {
                        "type": "address",
                        "name": "market"
                    },
                    {
                        "type": "bytes32",
                        "name": "asset"
                    },
                    {
                        "type": "bytes32",
                        "name": "key"
                    },
                    {
                        "type": "uint256",
                        "name": "maxLeverage"
                    },
                    {
                        "type": "uint256",
                        "name": "price"
                    },
                    {
                        "type": "uint256",
                        "name": "marketSize"
                    },
                    {
                        "type": "int256",
                        "name": "marketSkew"
                    },
                    {
                        "type": "uint256",
                        "name": "marketDebt"
                    },
                    {
                        "type": "int256",
                        "name": "currentFundingRate"
                    },
                    {
                        "type": "int256",
                        "name": "currentFundingVelocity"
                    },
                    {
                        "type": "tuple",
                        "name": "feeRates",
                        "components": [
                            {
                                "type": "uint256",
                                "name": "takerFee"
                            },
                            {
                                "type": "uint256",
                                "name": "makerFee"
                            },
                            {
                                "type": "uint256",
                                "name": "takerFeeDelayedOrder"
                            },
                            {
                                "type": "uint256",
                                "name": "makerFeeDelayedOrder"
                            },
                            {
                                "type": "uint256",
                                "name": "takerFeeOffchainDelayedOrder"
                            },
                            {
                                "type": "uint256",
                                "name": "makerFeeOffchainDelayedOrder"
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "type": "function",
        "name": "globals",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "tuple",
                "components": [
                    {
                        "type": "uint256",
                        "name": "minInitialMargin"
                    },
                    {
                        "type": "uint256",
                        "name": "liquidationFeeRatio"
                    },
                    {
                        "type": "uint256",
                        "name": "minKeeperFee"
                    },
                    {
                        "type": "uint256",
                        "name": "maxKeeperFee"
                    }
                ]
            }
        ]
    },
    {
        "type": "function",
        "name": "marketDetails",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "market"
            }
        ],
        "outputs": [
            {
                "type": "tuple",
                "components": [
                    {
                        "type": "address",
                        "name": "market"
                    },
                    {
                        "type": "bytes32",
                        "name": "baseAsset"
                    },
                    {
                        "type": "bytes32",
                        "name": "marketKey"
                    },
                    {
                        "type": "tuple",
                        "name": "feeRates",
                        "components": [
                            {
                                "type": "uint256",
                                "name": "takerFee"
                            },
                            {
                                "type": "uint256",
                                "name": "makerFee"
                            },
                            {
                                "type": "uint256",
                                "name": "takerFeeDelayedOrder"
                            },
                            {
                                "type": "uint256",
                                "name": "makerFeeDelayedOrder"
                            },
                            {
                                "type": "uint256",
                                "name": "takerFeeOffchainDelayedOrder"
                            },
                            {
                                "type": "uint256",
                                "name": "makerFeeOffchainDelayedOrder"
                            }
                        ]
                    },
                    {
                        "type": "tuple",
                        "name": "limits",
                        "components": [
                            {
                                "type": "uint256",
                                "name": "maxLeverage"
                            },
                            {
                                "type": "uint256",
                                "name": "maxMarketValue"
                            }
                        ]
                    },
                    {
                        "type": "tuple",
                        "name": "fundingParameters",
                        "components": [
                            {
                                "type": "uint256",
                                "name": "maxFundingVelocity"
                            },
                            {
                                "type": "uint256",
                                "name": "skewScale"
                            }
                        ]
                    },
                    {
                        "type": "tuple",
                        "name": "marketSizeDetails",
                        "components": [
                            {
                                "type": "uint256",
                                "name": "marketSize"
                            },
                            {
                                "type": "tuple",
                                "name": "sides",
                                "components": [
                                    {
                                        "type": "uint256",
                                        "name": "long"
                                    },
                                    {
                                        "type": "uint256",
                                        "name": "short"
                                    }
                                ]
                            },
                            {
                                "type": "uint256",
                                "name": "marketDebt"
                            },
                            {
                                "type": "int256",
                                "name": "marketSkew"
                            }
                        ]
                    },
                    {
                        "type": "tuple",
                        "name": "priceDetails",
                        "components": [
                            {
                                "type": "uint256",
                                "name": "price"
                            },
                            {
                                "type": "bool",
                                "name": "invalid"
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "type": "function",
        "name": "marketDetailsForKey",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "marketKey"
            }
        ],
        "outputs": [
            {
                "type": "tuple",
                "components": [
                    {
                        "type": "address",
                        "name": "market"
                    },
                    {
                        "type": "bytes32",
                        "name": "baseAsset"
                    },
                    {
                        "type": "bytes32",
                        "name": "marketKey"
                    },
                    {
                        "type": "tuple",
                        "name": "feeRates",
                        "components": [
                            {
                                "type": "uint256",
                                "name": "takerFee"
                            },
                            {
                                "type": "uint256",
                                "name": "makerFee"
                            },
                            {
                                "type": "uint256",
                                "name": "takerFeeDelayedOrder"
                            },
                            {
                                "type": "uint256",
                                "name": "makerFeeDelayedOrder"
                            },
                            {
                                "type": "uint256",
                                "name": "takerFeeOffchainDelayedOrder"
                            },
                            {
                                "type": "uint256",
                                "name": "makerFeeOffchainDelayedOrder"
                            }
                        ]
                    },
                    {
                        "type": "tuple",
                        "name": "limits",
                        "components": [
                            {
                                "type": "uint256",
                                "name": "maxLeverage"
                            },
                            {
                                "type": "uint256",
                                "name": "maxMarketValue"
                            }
                        ]
                    },
                    {
                        "type": "tuple",
                        "name": "fundingParameters",
                        "components": [
                            {
                                "type": "uint256",
                                "name": "maxFundingVelocity"
                            },
                            {
                                "type": "uint256",
                                "name": "skewScale"
                            }
                        ]
                    },
                    {
                        "type": "tuple",
                        "name": "marketSizeDetails",
                        "components": [
                            {
                                "type": "uint256",
                                "name": "marketSize"
                            },
                            {
                                "type": "tuple",
                                "name": "sides",
                                "components": [
                                    {
                                        "type": "uint256",
                                        "name": "long"
                                    },
                                    {
                                        "type": "uint256",
                                        "name": "short"
                                    }
                                ]
                            },
                            {
                                "type": "uint256",
                                "name": "marketDebt"
                            },
                            {
                                "type": "int256",
                                "name": "marketSkew"
                            }
                        ]
                    },
                    {
                        "type": "tuple",
                        "name": "priceDetails",
                        "components": [
                            {
                                "type": "uint256",
                                "name": "price"
                            },
                            {
                                "type": "bool",
                                "name": "invalid"
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "type": "function",
        "name": "marketSummaries",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address[]",
                "name": "markets"
            }
        ],
        "outputs": [
            {
                "type": "tuple[]",
                "components": [
                    {
                        "type": "address",
                        "name": "market"
                    },
                    {
                        "type": "bytes32",
                        "name": "asset"
                    },
                    {
                        "type": "bytes32",
                        "name": "key"
                    },
                    {
                        "type": "uint256",
                        "name": "maxLeverage"
                    },
                    {
                        "type": "uint256",
                        "name": "price"
                    },
                    {
                        "type": "uint256",
                        "name": "marketSize"
                    },
                    {
                        "type": "int256",
                        "name": "marketSkew"
                    },
                    {
                        "type": "uint256",
                        "name": "marketDebt"
                    },
                    {
                        "type": "int256",
                        "name": "currentFundingRate"
                    },
                    {
                        "type": "int256",
                        "name": "currentFundingVelocity"
                    },
                    {
                        "type": "tuple",
                        "name": "feeRates",
                        "components": [
                            {
                                "type": "uint256",
                                "name": "takerFee"
                            },
                            {
                                "type": "uint256",
                                "name": "makerFee"
                            },
                            {
                                "type": "uint256",
                                "name": "takerFeeDelayedOrder"
                            },
                            {
                                "type": "uint256",
                                "name": "makerFeeDelayedOrder"
                            },
                            {
                                "type": "uint256",
                                "name": "takerFeeOffchainDelayedOrder"
                            },
                            {
                                "type": "uint256",
                                "name": "makerFeeOffchainDelayedOrder"
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "type": "function",
        "name": "marketSummariesForKeys",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "bytes32[]",
                "name": "marketKeys"
            }
        ],
        "outputs": [
            {
                "type": "tuple[]",
                "components": [
                    {
                        "type": "address",
                        "name": "market"
                    },
                    {
                        "type": "bytes32",
                        "name": "asset"
                    },
                    {
                        "type": "bytes32",
                        "name": "key"
                    },
                    {
                        "type": "uint256",
                        "name": "maxLeverage"
                    },
                    {
                        "type": "uint256",
                        "name": "price"
                    },
                    {
                        "type": "uint256",
                        "name": "marketSize"
                    },
                    {
                        "type": "int256",
                        "name": "marketSkew"
                    },
                    {
                        "type": "uint256",
                        "name": "marketDebt"
                    },
                    {
                        "type": "int256",
                        "name": "currentFundingRate"
                    },
                    {
                        "type": "int256",
                        "name": "currentFundingVelocity"
                    },
                    {
                        "type": "tuple",
                        "name": "feeRates",
                        "components": [
                            {
                                "type": "uint256",
                                "name": "takerFee"
                            },
                            {
                                "type": "uint256",
                                "name": "makerFee"
                            },
                            {
                                "type": "uint256",
                                "name": "takerFeeDelayedOrder"
                            },
                            {
                                "type": "uint256",
                                "name": "makerFeeDelayedOrder"
                            },
                            {
                                "type": "uint256",
                                "name": "takerFeeOffchainDelayedOrder"
                            },
                            {
                                "type": "uint256",
                                "name": "makerFeeOffchainDelayedOrder"
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "type": "function",
        "name": "parameters",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "marketKey"
            }
        ],
        "outputs": [
            {
                "type": "tuple",
                "components": [
                    {
                        "type": "uint256",
                        "name": "takerFee"
                    },
                    {
                        "type": "uint256",
                        "name": "makerFee"
                    },
                    {
                        "type": "uint256",
                        "name": "takerFeeDelayedOrder"
                    },
                    {
                        "type": "uint256",
                        "name": "makerFeeDelayedOrder"
                    },
                    {
                        "type": "uint256",
                        "name": "takerFeeOffchainDelayedOrder"
                    },
                    {
                        "type": "uint256",
                        "name": "makerFeeOffchainDelayedOrder"
                    },
                    {
                        "type": "uint256",
                        "name": "maxLeverage"
                    },
                    {
                        "type": "uint256",
                        "name": "maxMarketValue"
                    },
                    {
                        "type": "uint256",
                        "name": "maxFundingVelocity"
                    },
                    {
                        "type": "uint256",
                        "name": "skewScale"
                    },
                    {
                        "type": "uint256",
                        "name": "nextPriceConfirmWindow"
                    },
                    {
                        "type": "uint256",
                        "name": "delayedOrderConfirmWindow"
                    },
                    {
                        "type": "uint256",
                        "name": "minDelayTimeDelta"
                    },
                    {
                        "type": "uint256",
                        "name": "maxDelayTimeDelta"
                    },
                    {
                        "type": "uint256",
                        "name": "offchainDelayedOrderMinAge"
                    },
                    {
                        "type": "uint256",
                        "name": "offchainDelayedOrderMaxAge"
                    },
                    {
                        "type": "bytes32",
                        "name": "offchainMarketKey"
                    },
                    {
                        "type": "uint256",
                        "name": "offchainPriceDivergence"
                    },
                    {
                        "type": "uint256",
                        "name": "liquidationPremiumMultiplier"
                    },
                    {
                        "type": "uint256",
                        "name": "liquidationBufferRatio"
                    },
                    {
                        "type": "uint256",
                        "name": "maxLiquidationDelta"
                    },
                    {
                        "type": "uint256",
                        "name": "maxPD"
                    }
                ]
            }
        ]
    },
    {
        "type": "function",
        "name": "positionDetails",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "market"
            },
            {
                "type": "address",
                "name": "account"
            }
        ],
        "outputs": [
            {
                "type": "tuple",
                "components": [
                    {
                        "type": "tuple",
                        "name": "position",
                        "components": [
                            {
                                "type": "uint64",
                                "name": "id"
                            },
                            {
                                "type": "uint64",
                                "name": "lastFundingIndex"
                            },
                            {
                                "type": "uint128",
                                "name": "margin"
                            },
                            {
                                "type": "uint128",
                                "name": "lastPrice"
                            },
                            {
                                "type": "int128",
                                "name": "size"
                            }
                        ]
                    },
                    {
                        "type": "int256",
                        "name": "notionalValue"
                    },
                    {
                        "type": "int256",
                        "name": "profitLoss"
                    },
                    {
                        "type": "int256",
                        "name": "accruedFunding"
                    },
                    {
                        "type": "uint256",
                        "name": "remainingMargin"
                    },
                    {
                        "type": "uint256",
                        "name": "accessibleMargin"
                    },
                    {
                        "type": "uint256",
                        "name": "liquidationPrice"
                    },
                    {
                        "type": "bool",
                        "name": "canLiquidatePosition"
                    }
                ]
            }
        ]
    },
    {
        "type": "function",
        "name": "positionDetailsForMarketKey",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "marketKey"
            },
            {
                "type": "address",
                "name": "account"
            }
        ],
        "outputs": [
            {
                "type": "tuple",
                "components": [
                    {
                        "type": "tuple",
                        "name": "position",
                        "components": [
                            {
                                "type": "uint64",
                                "name": "id"
                            },
                            {
                                "type": "uint64",
                                "name": "lastFundingIndex"
                            },
                            {
                                "type": "uint128",
                                "name": "margin"
                            },
                            {
                                "type": "uint128",
                                "name": "lastPrice"
                            },
                            {
                                "type": "int128",
                                "name": "size"
                            }
                        ]
                    },
                    {
                        "type": "int256",
                        "name": "notionalValue"
                    },
                    {
                        "type": "int256",
                        "name": "profitLoss"
                    },
                    {
                        "type": "int256",
                        "name": "accruedFunding"
                    },
                    {
                        "type": "uint256",
                        "name": "remainingMargin"
                    },
                    {
                        "type": "uint256",
                        "name": "accessibleMargin"
                    },
                    {
                        "type": "uint256",
                        "name": "liquidationPrice"
                    },
                    {
                        "type": "bool",
                        "name": "canLiquidatePosition"
                    }
                ]
            }
        ]
    },
    {
        "type": "function",
        "name": "resolverProxy",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "address"
            }
        ]
    }
]
