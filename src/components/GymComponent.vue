<template>
  <div>
    <h4>{{ title }}</h4>
    <div>
      <el-input
        class="input"
        placeholder="Exercice"
        v-model="exercices.exercice"
      ></el-input>
      <el-input
        class="input"
        placeholder="Series"
        v-model="exercices.series"
      ></el-input>
      <el-input
        class="input"
        placeholder="Reps"
        v-model="exercices.reps"
      ></el-input>
      <br />
      <el-button type="primary" @click="addExercice" @keyup.enter="addExercice"
        >Add Exercice</el-button
      >
      <el-button type="primary" @click="editar()">update Exercice</el-button>
    </div>
    <br />
    <el-table :data="rutines" style="width: 100%">
      <el-table-column prop="exercice" label="Exercice" width="180">
      </el-table-column>
      <el-table-column prop="series" label="Series" width="180">
      </el-table-column>
      <el-table-column prop="reps" label="Reps"> </el-table-column>
      <el-table-column prop="status" label="Estado">
        {{ estado }}
      </el-table-column>
      <el-table-column label="Operaciones">
        <template slot-scope="scope">
          <el-button
            type="success"
            @click="handleOk(scope.$index, scope.row)"
            circle
            >Ok</el-button
          >
          <el-button
            type="primary"
            @click="handleEdit(scope.$index, scope.row)"
            icon="el-icon-edit"
            circle
          ></el-button>
          <el-button
            type="danger"
            icon="el-icon-delete"
            @click="handleDelete(scope.$index, scope.row)"
            circle
          ></el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
/* import */
export default {
  name: "GymComponent",

  data() {
    return {
      title: "GYM",
      exercices: {
        id: 0,
        exercice: "",
        series: "",
        reps: "",
        status: false,
      },
      index: null,
      rutines: [],
    };
  },

  methods: {
    addExercice() {
      this.rutines.push({
        id: this.exercices.id++,
        exercice: this.exercices.exercice,
        series: this.exercices.series,
        reps: this.exercices.reps,
        status: false,
      });

      //limpindo inputs
      this.exercices.exercice = "";
      this.exercices.series = "";
      this.exercices.reps = "";

      //mostrando en consola
      console.log(this.rutines);
    },

    //Arreglar
    handleOk(index, row) {
      this.rutines[index].status = true;
      console.log(this.rutines);
    },

    handleEdit(index, row) {
      //limpia el array y lo muestra en los imputos al clickear el boton azul editar
      this.exercices = {};
      this.exercices = row;
    },

    editar() {
      const index = this.rutines.findIndex((d) => d.id == this.exercices.id);
      this.rutines[index] = this.exercices;
      console.log(this.rutines);
    },

    handleDelete(index, row) {
      console.log("este es row", row);
      console.log("este es index", index);
      this.rutines.splice(index, 1);
    },
  },

  computed: {
    estado() {
      return this.rutines.status ? "Completado" : "No Completado";
    },
  },
};

/* props: ["vehicules"], */
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.input {
  padding-bottom: 6px;
}

.red {
  background-color: red;
}

.green {
  background-color: green;
}
</style>
