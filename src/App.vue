<template>
  <div id="app">
    <custom-params v-model="value" />
    <button @click="handleGet">获取value值</button>
  </div>
</template>

<script>
import CustomParams from "./components/custom-params";
export default {
  components: {
        CustomParams,
    },
  name: 'App',
  data() {
        return {
            value: {
              a:"123"
            },
        };
    },
    methods:{
      handleGet(){
        console.log(this.value)
      }
    }
}
</script>

<style>
#app {
  margin-top: 20px;
}
</style>
