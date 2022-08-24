const { buildSchema } = require("graphql");
const schema = buildSchema(`
type Currency{
        id: ID,
        rank: String,
        symbol: String,
        name: String,
        supply: String,
        maxSupply: String,
        marketCapUsd: String,
        volumeUsd24Hr: String,
        priceUsd: String,
        changePercent24Hr: String,
        vwap24Hr: String,
}

type History{
    time:Float,
    priceUsd: String,
}

    type Query{
    getCurrencies:[Currency],
    getCurrencyHistory(id:String):[History]
    }
`);

module.exports = schema;
