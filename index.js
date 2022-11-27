import  express  from "express";
import bodyParser from 'body-parser';
 import usersRouter from './routes/users.js';


const app = express();
const PORT = 5000;

//middleware
app.use(bodyParser.json());
app.use(express.json())
 app.use('/users', usersRouter);



app.get('/', (req , res)=>{
    res.send('hello from app router');
})

app.listen(PORT,()=> {
    console.log(`Server running on port: http://localhost:${PORT}`);
})