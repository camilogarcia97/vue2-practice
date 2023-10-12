<template>
  <div>
    <div>
      <!--  <h4>{{ post.title }}</h4>
      <p>{{ post.body }}</p> -->
    </div>

    <!-- <div v-if="vehicules.length == 0">
      <h2>no hay datos</h2>
    </div>
    <div v-for="(vehicule, i) in vehicules" :key="i">
      <h4>{{ vehicule.title }}</h4>
      <h3>{{ vehicule.body }}</h3>
    </div>
    <div>
      <ul>
        <li v-for="(fruta, i) of frutas" :key="i">
          <h1>{{ fruta }}</h1>
        </li>
      </ul>
    </div> -->
    <!-- formulario de frutas y verduras -->
    <div>
      <h1>Regstro de frutas</h1>
      <input type="text" v-model="nuevaFutra" />
      <input
        type="number"
        v-model="cantidadFutra"
        v-on:keyup.enter="agregarFutra"
      />
      <br />
      <label for="">{{ nuevaFutra }}</label>
      <label for="">{{ cantidadFutra }}</label>
      <br />
      <button v-on:click="agregarFutra">Add Frut</button>
      <!--     <button @:click="totalFrutas"> + </button> -->
    </div>
    <!-- -->
    <div>
      <ul>
        <li v-for="(verdura, i) of verduras" :key="i">
          {{ verdura.nombre }} -
          <input type="text" v-model.number="verdura.cantidad" />
          <button @click="verdura.cantidad++">+</button>
          <button @click="verdura.cantidad--">-</button>
          <span v-if="verdura.cantidad === 0"> - Sin Stock </span>
        </li>
      </ul>
    </div>
    <h4>TOTAL: {{ totalFrutas }}</h4>
  </div>
</template>

<script>
export default {
    name: "HelloWorld",
  data() {
    return {
      nuevaFutra: "",
      cantidadFutra: "",
      sumatoria: "",
      frutas: ["apple", "banana", "kiwi"],
      verduras: [
        { nombre: "onion", cantidad: 10 },
        { nombre: "carrot", cantidad: 0 },
        { nombre: "potato", cantidad: 20 },
      ],
    }
  },

  methods: {
    agregarFutra() {
      this.verduras.push({
        nombre: this.nuevaFutra,
        cantidad: this.cantidadFutra,
      });
      console.log(this.verduras);
      console.log("diste click");
      this.nuevaFutra = "";
      this, (this.cantidadFutra = "");
    },
  },

  computed: {
    totalFrutas() {
      this.sumatoria = 0;
      for (let verdura of this.verduras) {
        this.sumatoria = this.sumatoria + verdura.cantidad;
      }
      return this.sumatoria;
    },
  },

  /* props: ["vehicules"], */

  props: {
    vehicules: {
      type: Array, // Tipo de la prop
      default: [], // Valor predeterminado
    },
  },

  mounted() {
    // Accede a la propiedad "vehicules" a través de "this"
    console.log("motores", this.vehicules.length);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
