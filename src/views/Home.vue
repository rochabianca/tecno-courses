<template>
  <div>
    <div v-if="loading">
      <p>Carregando...</p>
    </div>
    <div v-else>
      <h1>Home</h1>
      <p>{{ api }}</p>
    </div>
  </div>
</template>

<script>
import fetchData from '@/mixins/fetchData';
export default {
  name: 'home',
  mixins: [fetchData],
  created() {
    this.fetchData('/home');
  }
}
</script>
