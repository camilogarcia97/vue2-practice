<template>
  <div class="home">
    <h1>About</h1>
    <!-- <HelloWorld class="border" v-for="(item, i) in posts" :key="i" :post="item"></HelloWorld> -->
    <HelloWorld :vehicules="posts"></HelloWorld>
  </div>
</template>

<script>
// @ is an alias to /src

import HelloWorld from "@/components/HelloWorld.vue";

export default {
  components: { HelloWorld },
  name: "HomeView",

  data() {
    return {
      name: "camilo",
      posts: [
        {
          title: "titulo 1",
          body: "mensaje",
        },
        {
          title: "0titulo 1",
          body: "mensaje",
        },
        {
          title: "titulo 1",
          body: "mensaje",
        },
        {
          title: "titulo 1",
          body: "mensaje",
        },
      ],
      cars: [
        {
          model: "lambo",
          year: "2023",
        },
        {
          model: "lambo",
          year: "2023",
        },
        {
          model: "lambo",
          year: "2023",
        },
        {
          model: "lambo",
          year: "2023",
        },
      ],
    };
  },
};
</script>
