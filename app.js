const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')

app.set('port', (process.env.PORT || 5000));
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.get('*', function(req, res){
    res.render('index.html')
});

const MongoClient = require("mongodb").MongoClient;
const uri = "mongodb+srv://oleg3289:arxipelag4@rarelyrix-lltgv.mongodb.net/sample_airbnb?retryWrites=true&w=majority";
MongoClient.connect(uri, {useUnifiedTopology: true }, (err, client) => {
  if (err) {
    console.log("Error occurred connecting to MongoDB...");
  } else console.log("Connected to MongoDB!");
});

app.listen(app.get('port'), () => {
    console.log(`Server is running on port ${app.get('port')}`)
})