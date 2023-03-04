import express  from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import routes from "./routes/soccerRoutes";
import cors from 'cors';

const app = express();
const PORT   = 4000;

// mongo connection
mongoose.Promise= global.Promise;
mongoose.connect('mongodb://0.0.0.0:27017/soccerDB',{
    useNewUrlParser:true,
    useUnifiedTopology:true
});


//body parser setup
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//CORS setup
app.use(cors());

routes(app);

app.get('/', (req, res) => 
    res.send(`Our Soccer application is running on port ${PORT}`)
);

app.listen(PORT, () => 
    console.log(`Your soccer server is running on port ${PORT}`)
);
