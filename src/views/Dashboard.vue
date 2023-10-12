<template>
  <div>
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      :router="true"
    >
      <el-menu-item index="1" @click="handleOpen">Center</el-menu-item>
      <el-menu-item index="2" @click="about">About</el-menu-item>
      <el-menu-item index="3" @click="prueba">Prueba</el-menu-item>
      <el-menu-item index="4" @click="gym">Gym</el-menu-item>
    </el-menu>
    <!--  <div> -->
    <router-view />
    <!--  </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      this.$router.push("home");
    },
    about() {
      this.$router.push("about");
    },
    prueba() {
      this.$router.push("prueba");
    },
    gym() {
      this.$router.push("gym");
    },
  },
};
</script>

<style scoped>
.prueba {
  background: blue;
}
</style>
