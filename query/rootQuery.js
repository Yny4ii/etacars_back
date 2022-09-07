const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLSchema,
} = require("graphql/index");
const Currency = require("../types/Currency");
const History = require("../types/History");
const getCurrencies = require("./getCurrencies");
const getCurrencyHistory = require("./getCurrencyHistory");
const getCurrency = require("./getCurrency");
const { GraphQLString, GraphQLInt } = require("graphql");

const rootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    getCurrencies: {
      args: {
        limit: { type: GraphQLInt },
        offset: { type: GraphQLInt },
      },
      type: new GraphQLList(Currency),
      async resolve(_, { limit, offset }) {
        return await getCurrencies(limit, offset);
      },
    },
    getCurrencyHistory: {
      type: new GraphQLList(History),
      args: { id: { type: GraphQLString } },
      async resolve(_, { id }) {
        return await getCurrencyHistory(id);
      },
    },
    getCurrency: {
      type: Currency,
      args: { id: { type: GraphQLString } },
      async resolve(_, { id }) {
        return await getCurrency(id);
      },
    },
  },
});

module.exports = new GraphQLSchema({ query: rootQuery });
