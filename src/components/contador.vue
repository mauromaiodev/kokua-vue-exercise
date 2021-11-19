<template>
  <div>
    <p></p>
    <button @click="getFibo">Click</button>
    <p>{{ count }}</p>
    <h1 v-if="count == 55">hardcore apprenticeship #easteregg</h1>
  </div>
</template>

<script>
export default {
  name: "Contador",
  data() {
    return { count: 0, fib: [], aux: 1 };
  },
  methods: {
    getFibo() {
      this.fib[0] = this.count;
      this.fib[1] = this.aux;
      let fixed = this.count;
      this.count = this.fib[0] + this.fib[1];
      this.aux = fixed;
    },
  },
};
</script>
