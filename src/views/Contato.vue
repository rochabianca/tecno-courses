<template>
  <div>
    <PageLoading v-if="loading" />
    <div v-else>
      <h1>Contato</h1>
      <p>{{ api }}</p>
    </div>
  </div>
</template>

<script>
import fetchData from '@/mixins/fetchData';

export default {
  name: 'Contato',
  mixins: [fetchData],
  created() {
    this.fetchData('/contato');
  }
}
</script>

<style>
</style>
