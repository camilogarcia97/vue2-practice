<template>
  <div class="abuelo">
    <GymComponent></GymComponent>
    <GymPadre></GymPadre>
  </div>
</template>

<script>
import GymComponent from "@/components/GymComponent.vue";
import GymPadre from "@/components/GymPadre.vue";

export default {
  components: { GymComponent, GymPadre },
  name: "GymView",

  data() {
    return {};
  },

  methods: {},

  computed: {},

  /* props: ["vehicules"], */

  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.abuelo {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
