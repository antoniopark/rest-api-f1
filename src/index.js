import express from 'express';
   
const app = express();

app.set('port', process.env.PORT || 3000);

app.get('/', (req,res)=> {
    res.json({message: 'This is the F1'})
})

app.listen(app.get('port'));
console.log('Server on port', app.get('port'));