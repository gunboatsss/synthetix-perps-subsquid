module.exports = class Data1686563500580 {
    name = 'Data1686563500580'

    async up(db) {
        await db.query(`CREATE TABLE "market" ("id" character varying NOT NULL, "asset" text NOT NULL, "market" text NOT NULL, "market_key" text NOT NULL, CONSTRAINT "PK_1e9a2963edfd331d92018e3abac" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_2d0391337562cb970c127ae00e" ON "market" ("market") `)
    }

    async down(db) {
        await db.query(`DROP TABLE "market"`)
        await db.query(`DROP INDEX "public"."IDX_2d0391337562cb970c127ae00e"`)
    }
}
