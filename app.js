import express from 'express';
import emotion from './app_api/routes/emotion';

const app = express();
app.use(express.urlencoded({extended:false}));
app.use(express.json());

// CORS 
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
    next();
});

app.use('/',emotion);

export default app;
