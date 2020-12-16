import express from 'express';
import F1Routes from'./routes/f1.routes';

const app = express();

app.set('port', process.env.PORT || 3000);

app.get('/', (req,res)=> {
    res.json({message: 'This is the F1'})
})

app.use('/api/f1', F1Routes);

export default app;