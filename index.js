const express = require("express");
const cors = require("cors");
const { graphqlHTTP } = require("express-graphql");
const { getCurrencies } = require("./query/getCurrencies");
const { getCurrencyHistory } = require("./query/getCurrencyHIstory.js");
const schema = require("./types/schema");
const app = express();
app.use(cors());

const root = {
  getCurrencies,
  getCurrencyHistory,
};

app.use(
  "/graphql",
  graphqlHTTP({
    graphiql: true,
    schema,
    rootValue: root,
  })
);

app.listen(5000, () => {
  console.log("start");
});
