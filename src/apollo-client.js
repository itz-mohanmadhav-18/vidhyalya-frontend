import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

const httpLink = createHttpLink({
  uri: import.meta.env.VITE_GRAPHQL_ENDPOINT
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});

export default client;