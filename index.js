const express=require('express');
const app=express()

const users = [
    {
    id: 1,
    name: 'John',
    email: 'john@example.com',
    age: 30,
    city: 'New York',
    state: 'NY'
    },
    {
    id: 2,
    name: 'Jane',
    email: 'jane@example.com',
    age: 25,
    
    city: 'Chicago',
    state: 'IL'
    },
    {
    id: 3,
    name: 'Bob',
    email: 'bob@example.com',
    age: 35,
    city: 'New York',
    state: 'NY'
    }
];

getUsersInState(users, state)
{
    users.find((users.state,index)=>{
        
         console.log( [ users.id,users.name,users.email,users.age,users.city,users.state])
        
    })

}
getUsersInState(users,'NY');
const port=process.env.port || 3000;
app.listen(port,()=>{
    console.log(`server is running  on${port}`)
})
