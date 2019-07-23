<template>
  <div>
    <PageLoading v-if="loading" />
    <div v-else>
      <h1>Cursos</h1>
      <p>{{ api }}</p>
    </div>
  </div>
</template>

<script>
import fetchData from '@/mixins/fetchData';

export default {
  name: 'Cursos',
  mixins: [fetchData],
  created() {
    this.fetchData('/cursos')
  }
}
</script>

<style>
</style>
