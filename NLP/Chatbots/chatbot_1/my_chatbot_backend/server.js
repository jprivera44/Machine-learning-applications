
//Require the dev-dependencies
const fastify = require('fastify');


//Our server that can handle requests
const server = fastify({
  logger: true
});

//new route that exposes an API endpoint for the react front end located in my_chatbot_frontend to call
server.get('messages/api',(request,reply) => {

  reply.send({message: 'Hello, mars!'});

});

//The root route that returns a JSON object with a message property
server.get('/', (request, reply) => {
  reply.send({ message: 'Hello, world!' });
});

//Running the server on port 3000
server.listen(3000, (err, address) => {
  if (err) throw err;
  console.log(`Server listening on ${address}`);
});



