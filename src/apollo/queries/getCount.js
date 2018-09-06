import { gql } from 'apollo-boost'

// Client state queries must use the @client
// directive to instruct ApolloClient to query the
// state cache instead of the network.
export default gql`
{
    count @client
}
`
