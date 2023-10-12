<template>
  <div class="padre">
    <h3>
      <!-- esta es la forma "larga" de usar un state desde la store
    $store.state.numeroDePruebaVuex -->
      usando store(vuex) forma larga:
      {{ $store.state.numeroDePruebaVuex }}
    </h3>
    <h4>
      <!--  -->
      usando store(vuex) forma corta: {{ numeroDePruebaVuex }}
    </h4>
    <h1>Gym Padre</h1>
    <h2>{{ nombre }}</h2>
    <h2>{{ numeroHijo }}</h2>
    <br />
    <h6>Aumentar numero en hijo</h6>
    <button @click="subirPadre">+</button>
    <button @click="bajarPadre">-</button>
    <h4>{{ message }}</h4>
    <h5 v-for="(trainer, i) of trainers" :key="i">
      Nombre: {{ trainer.nombre }}
      <br />
      Edad: {{ trainer.edad }}
      <br />
      peso(kg): {{ trainer.peso }}
    </h5>
    <GymHijo
      :np="numeroPadre"
      @enviando="numeroHijo = $event"
      @sendingName="nombre = $event"
      @sendingTrainer="trainers = $event"
    ></GymHijo>
  </div>
</template>

<script>
import GymHijo from "@/components/GymHijo.vue";
import { mapState } from "vuex";
export default {
  components: { GymHijo },
  name: "GymPadre",

  data() {
    return {
      numeroPadre: 0,
      numeroHijo: 0,
      message: "Esta lista de objetos vienes desde el componente hijo 👌",

      nombre: "",
      trainers: [],
    };
  },

  methods: {
    subirPadre() {
      this.numeroPadre++;
    },

    bajarPadre() {
      this.numeroPadre--;
    },
  },

  computed: {
    ...mapState(["numeroDePruebaVuex"]),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.padre {
  /* campo de texto */
  width: 420px;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  margin: 10px;
  padding: 10px;
  border-radius: 10px;
  background-color: rgb(238, 150, 17);
}

h6 {
  margin: 0px;
}

h2 {
  margin: 0px;
}

button {
  width: 100px;
  height: 50px;
  font-size: 20px;
  font-weight: bold;
  margin: 10px;
  padding: 10px;
  border: 1px solid black;
  border-radius: 10px;
  background-color: rgb(12, 228, 30);
}
</style>
