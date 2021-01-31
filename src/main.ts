
import { ApolloServer } from 'apollo-server';
import { buildSchema } from 'type-graphql';
import { environment } from './environment';
import {JokeResolver} from './resolvers';
import "reflect-metadata";


(async () => {
  const server = new ApolloServer({ 
    schema: await buildSchema({
      resolvers: [JokeResolver], 
    }),
    introspection: environment.apollo.introspection,
    playground: environment.apollo.playground
});

server.listen(environment.port).then(({ url }) => console.log(`Server ready at ${url}. `));

if (module.hot) {
  module.hot.accept();
  module.hot.dispose(() => server.stop());
}

})();

