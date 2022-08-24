const { GraphQLObjectType, GraphQLFloat, GraphQLString } = require("graphql");
const History = new GraphQLObjectType({
  name: "History",
  fields: {
    time: {
      type: GraphQLFloat,
    },
    priceUsd: {
      type: GraphQLString,
    },
  },
});

module.exports = History;
