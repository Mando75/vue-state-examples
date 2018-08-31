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

export default {
  name: 'CountDisplay',
  computed: {
    ...mapGetters([
      'getCount',
      'getDoubledCount'
    ])
  }
}
</script>

<style>

</style>
