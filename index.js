import express from "express"
import bodyParser from "body-parser"
import mongoose from "mongoose"
import cors from "cors"
import dotenv from 'dotenv'
import postRoutes from "./routes/posts.js"

const app = express();
dotenv.config();

app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

app.use('/posts', postRoutes)

app.get('/', (req, res) => {
    res.send('Connect MERN_API_APP Successful!')
})

// const CONNECTION_URL = 'mongodb+srv://javascriptmastery:javascriptmastery123@cluster0.yk60x.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000;
const URL = process.env.CONNECTION_URL;

mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => app.listen(PORT, () => console.log(`server running on port: ${PORT}`)))
    .catch((err) => console.log(err));
