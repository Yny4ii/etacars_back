const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLSchema,
} = require("graphql/index");
const Currency = require("../types/Currency");
const History = require("../types/History");
const getCurrencies = require("./getCurrencies");
const getCurrencyHistory = require("./getCurrencyHistory");
const { GraphQLString } = require("graphql");

const rootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    getCurrencies: {
      type: new GraphQLList(Currency),
      async resolve() {
        return await getCurrencies();
      },
    },
    getCurrencyHistory: {
      type: new GraphQLList(History),
      args: { id: { type: GraphQLString } },
      async resolve(_, {id}) {
        return await getCurrencyHistory(id);
      },
    },
  },
});

module.exports = new GraphQLSchema({ query: rootQuery });
