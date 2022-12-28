
//Require the dev-dependencies
const fastify = require('fastify');


//Our server that can handle requests
const server = fastify({
  logger: true
});


server.get('/', (request, reply) => {
  reply.send({ message: 'Hello, world!' });
});

server.listen(3000, (err, address) => {
  if (err) throw err;
  console.log(`Server listening on ${address}`);
});



