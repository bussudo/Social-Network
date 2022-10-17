const express = require('express');
const mongodb = require('mongodb').MongoClient;

const app = express();
const PORT =  3001;
// const PORT = process.env.PORT || 3001;

const connectionStringURI = `mongodb://127.0.0.1:27017/socialnetworkDB`
  let db;
  
  mongodb.connect((
    connectionStringURI,
    { useNewUrl: true, useUnifiedTopology: true },
  (err, client) => {
    db = client.db();
    app.listen(port, () => {
      console.log(`listening at http://localhost:${port}`);
    });
  }
  );

app.use(express.json());

const hbs = exphbs.create({ helpers });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

//middleware for parsing JSON and urlencoded form data
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));

//makes public directory available
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

// Connect to the database
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening on port:', PORT));
});
