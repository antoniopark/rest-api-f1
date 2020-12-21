import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import F1Routes from'./routes/f1.routes';

const app = express();


//settings
app.set('port', process.env.PORT || 3000);

//Middlewares
const corsOption = {origin: ''};
app.use(cors({corsOption}));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//routes
app.get('/', (req,res)=> {
    res.json({message: 'This is the F1'})
})

app.use('/api/f1', F1Routes);

export default app;