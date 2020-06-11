import Server from './Server';
import schema from './module/index'
import configuration from './config/configuration';
const server = new Server(configuration);
server.bootstrap();
server.setupApolloServer(schema);
