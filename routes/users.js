import express from 'express';
import { v4 as uuidv4 } from 'uuid';
const router = express.Router();

// all routes in here are starting with /users ;

let users = [
    {
        firstName: "abdur",
        lastName: "raihan",
        age: 12 ,
        id: "b30c8ada-876c-4be1-a9e8-e7b97e9c58bd"
    },
    {
        firstName: "abdur",
        lastName: "raihan",
        age: 21,
        id: "b30c8ada-836c-4be1-a9e8-e7b97e9c57bd"
    }
]

router.get('/',(req , res)=>{
    res.send(users);
})

router.get('/:id', (req , res) => {
    const {id} = req.params;
    const foundUser = users.find((user)=> user.id == id);
    
    console.log(foundUser);
    res.send(foundUser);
})

router.post('/',(req,res)=>{
    const user = req.body;
    //console.log(user);
    const userWithId = {...user, id: uuidv4()}
   // console.log(userWithId);
    users.push(userWithId);
    res.send(`user send with id: ${userWithId.id} `);
})

router.delete('/:id',(req,res)=>{
    const {id} = req.params;

    users = users.filter((user)=> user.id != id);

    res.send(`user with the id ${id} is delete`);
})

router.patch('/:id', (req,res)=>{
    const {id} = req.params;
    const {firstName , lastName , age} = req.body;

    const user = users.find((user) => user.id == id);

    if(firstName){
        user.firstName = firstName;
    }
    if(lastName){
        user.lastName = lastName;
    }
    if(age){
        user.age = age;
    }
    
    res.send(`update with ${id} is successful`);
})

export default router;