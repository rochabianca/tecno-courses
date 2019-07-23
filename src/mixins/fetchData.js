export default {
  data() {
    return {
      api: null,
      loading: true
    };
  },
  methods: {
    fetchData(url) {
      this.loading = true;
      this.api = null;
      fetch(`http://localhost:3000${url}`)
        .then(r => r.json())
        .then(r => {
          // to simulate a request from a real api
          setTimeout(() => {
            this.api = r;
            this.loading = false;
          }, 1000);
        });
    }
  }
};
