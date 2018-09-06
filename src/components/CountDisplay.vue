<template>
  <div>
    <h1>Count</h1>
    <h1>{{ getCount }}</h1>
    <h2>Doubled Count</h2>
    <h2>{{ getDoubledCount }}</h2>
  </div>
</template>

<script>

import { mapGetters } from 'vuex'
// This mapping function allows us to specify
// which getter functions this component has access to

export default {
  name: 'CountDisplay',
  // getters act as computed values
  computed: {
    // user spread syntax so we can add more
    // custom local computed values
    ...mapGetters([
      'getCount',
      'getDoubledCount'
    ])
  }
}
</script>

<style>

</style>
