import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import graphqlHTTP from 'express-graphql';

class Server {
  constructor(config){
  this.app = express();
  this.config = config;
  }

  bootstrap(){
    this.setupRoutes();
    return this;
  }

  run = () => {
    this.app.listen(this.config.port, (err) =>{
      if(err){
        console.log('error');
        throw err;
      }
      console.log(`server is running on port ${this.config.port}`);
    });
  }

  setupRoutes(){
    this.app.use('/health-check',(req, res,) => {
      res.send('i am ok ');
      this.app.use('/graphql',
      graphqlHTTP({
        schema,
        graphql: true,
      })
      );
    });
  };

  async setupApolloServer(schema) {
    const { app } = this;
    this.server = new ApolloServer({ ...schema });
    this.server.applyMiddleware({ app });
  }
}

export default Server;
