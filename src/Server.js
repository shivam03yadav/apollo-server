import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { createServer } from 'http';
import { UserAPI, TraineeAPI } from './datasource/index';

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
    const { config: {port}, } = this;
      this.httpServer.listen(this.config.port, (err) =>{
      if(err){
        console.log('error');
        throw err;
      }
      console.log(`server is running on port ${this.config.port}`);
    });
    return this;
  }

  setupRoutes(){
    this.app.use('/health-check',(req, res,) => {
      res.send('i am ok ');
    });
  };

  async setupApolloServer(schema) {
    const { app } = this;
    this.server = new ApolloServer({
      ...schema,
      dataSources: () => {
        return {
          userAPI: new UserAPI(),
          traineeAPI: new TraineeAPI(),
        };
      },
      context: ({ req }) => {
        if(req) {
          return{ token: req.headers.authorization };
        }
        return {};
      },
     });
    this.server.applyMiddleware({ app });
    this.httpServer = createServer(app);
    this.server.installSubscriptionHandlers(this.httpServer)
    this.run();
  }
}

export default Server;
