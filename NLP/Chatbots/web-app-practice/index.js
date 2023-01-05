//Description: This code will spin up a simple
//Fastify web server on port 3000

//index.js
//import the fastify framework
const fastify = require('fastify')

// import mongoose
const mongoose = require('mongoose')

//import User schema
const User = require('./schemas/User')

//create a new instance of fastify
const app = fastify()



//connect to the database with a const, and a process env variable
//creates a new database called users at the default port 27017
const mongoUrl = process.env.MONGO_URI || 'mongodb://localhost:27017/users'

//connect to the database through a try catch block
//removing the parsers and the options from the connect method
try {
    mongoose.connect(mongoUrl, {})
    console.log('Connected to the database')
} catch (error) {
    console.log(error)
}


//setting up the different API routes

//GET endpoint that gets all the users from the mongo database and replies with a json object
app.get('/api/users', async (request, reply) => {
    try {
        const users = await User.find()
        return users
    } catch (error) {
        console.log(error)
    }
});

//POST endpoint that creates a new user in the database
//app.post('/api/users', async (request, reply) => {
 //   const user = new User(request.body)
   // try {
     //   await user.save()
       // reply.code(201).send(user)
   /// } catch (error) {
   //     console.log(error)
   // }
//});

//Post end point from blog
app.post("/api/users", (request, reply) => {
    var user = request.body
    User.create(user, (err, user) => {
        if(!err) {
            reply.send(user)
        } else {
            reply.send({ error: err })
        }
    })
})


//set a GET route "/"
app.get('/', function (request, reply) {
    reply.send("Our first route")
    });

//start the server
app.listen(3001, function (err, address) {
    if (err) {
        console.log(err)
        process.exit(1)
    }
    console.log(`Server listening on ${address}`)
})
