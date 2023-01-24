
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

const getUsersInState=function(users,state){
    const ans=users.map(function(users,index){
        
        if(users.state==state)
        {
            console.log(users)
        }
    })
    return ans;
}
getUsersInState(users,'NY')


const port=process.env.port || 3000;
app.listen(port,()=>{
    console.log(`server is running  on${port}`)
})
