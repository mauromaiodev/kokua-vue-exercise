<template>
  <div class="home">
    <Contador></Contador>
    <p>To na Home</p>
  </div>
</template>

<script>
import Contador from "../components/contador.vue";
export default {
  name: "contador",
  components: {
    Contador,
  },
};
</script>
