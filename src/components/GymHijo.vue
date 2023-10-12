<template>
  <div class="hijo">
    <h3>
      Numero de prueba usando store(vuex): {{ $store.state.numeroDePruebaVuex }}
    </h3>
    <h1>Gym Hijo</h1>
    <h2>{{ np }}</h2>
    <br />
    <h6>Aumentar numero en padre</h6>
    <button @click="subirHijo">+</button>
    <button @click="bajarHijo">-</button>
    <br />
    <!-- esta es la forma "larga" de usar un metodo desde a store
    $store.commit('aumentarGlobal') -->
    <button @click="$store.commit('aumentarGlobal')">@</button>
    <!-- esta es la forma abreviada de usar un metodo desde a store
    @click="aumentarGlobal" y la forma de hacerlo es usando una computada con la mapMutation(['NombreDeLaVariable']) -->
    <button @click="aumentarGlobal">@</button>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
/* import */
export default {
  name: "GymHijo",

  props: ["np"],
  data() {
    return {
      numeroHijo: 0,
      nombre: "el camus",
      trainers: [
        {
          nombre: "BigBang",
          edad: 18,
          altura: 1.75,
          peso: 70,
        },
        {
          nombre: "Alfa",
          edad: 25,
          altura: 1.85,
          peso: 80,
        },
        {
          nombre: "Manba Negra",
          edad: 35,
          altura: 1.81,
          peso: 105,
        },
      ],
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

    ...mapMutations(["aumentarGlobal"]),
  },

  mounted() {
    this.$emit("sendingName", this.nombre);
    this.$emit("sendingTrainer", this.trainers);
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
