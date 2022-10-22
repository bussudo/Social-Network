const express = require("express");
const mongodb = require("mongodb").MongoClient;

const app = express();
const PORT = 3001;
// const PORT = process.env.PORT || 3001;

const connectionStringURI = `mongodb://127.0.0.1:27017/socialnetworkDB`;
let db;

mongodb.connect(
  (connectionStringURI,
  { useNewUrl: true, useUnifiedTopology: true },
  (err, client) => {
    db = client.db();
    app.listen(port, () => {
      console.log(`listening at http://localhost:${port}`);
    });
  })
);

app.use(express.json());

app.use(routes);

// Connect to the database
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening on port:", PORT));
});
