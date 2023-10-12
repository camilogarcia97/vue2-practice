<template>
  <div class="hijo">
    <h1>Gym Hijo</h1>
    <h2>{{ np }}</h2>
    <br />
    <h6>Aumentar numero en padre</h6>
    <button @click="subirHijo">+</button>
    <button @click="bajarHijo">-</button>
  </div>
</template>

<script>
/* import */
export default {
  name: "GymHijo",

  props: ["np"],
  data() {
    return {
      numeroHijo: 0,
    };
  },

  methods: {
    subirHijo() {
      this.numeroHijo++;
      this.$emit("enviando", this.numeroHijo);
    },

    bajarHijo() {
      this.numeroHijo--;
      this.$emit("enviando", this.numeroHijo);
    },
  },

  computed: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hijo {
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  margin: 10px;
  padding: 10px;
  border-radius: 10px;
  background-color: rgb(12, 228, 30);
}
h6 {
  margin: 0px;
}

h2 {
  margin: 0px;
}

button {
  width: 80px;
  height: 50px;
  font-size: 20px;
  font-weight: bold;
  margin: 10px;
  padding: 10px;
  border: 1px solid black;
  border-radius: 10px;
  background-color: rgb(238, 150, 17);
}
</style>
