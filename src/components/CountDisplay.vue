<template>
  <div>
      <ApolloQuery
        :query="require('../apollo/queries/getCount').default">
        <template slot-scope="{ result: { data: { count: { value } } } }">
          <h1>
            Count
          </h1>
          <h1>
            {{ value }}
          </h1>
        </template>
      </ApolloQuery>
  </div>
</template>

<script>
export default {
  name: 'CountDisplay'
}
</script>

<style>

</style>
