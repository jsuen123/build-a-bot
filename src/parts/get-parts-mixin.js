export default {
  created() {
    this.$store.dispatch('getParts');
  },
  computed: {
    parts() {
      return this.$store.state.parts || {
        // Set default
        heads: [],
        arms: [],
        torsos: [],
        bases: [],
      };
    },
  },
};
