const tasks = require("./routes/tasks");
const cors = require("cors");
const mongoose = require('mongoose');
const express = require("express");
const app = express();

const mongoUri = 'mongodb+srv://admin:passwordpassword@cluster.n03kv.mongodb.net/test?retryWrites=true&w=majority';

mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});
mongoose.connection.on('connected', () => {
    console.log('Connected to mongo instance');
});
mongoose.connection.on('error', (err) => {
    console.error('Error Connecting to mongo', err)
});

app.use(express.json());
app.use(cors());

app.use("/api/tasks", tasks);

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}...`));
