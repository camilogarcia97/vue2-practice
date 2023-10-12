<template>
  <div class="home">
    <h1>Posts</h1>
    <!-- <HelloWorld class="border" v-for="(item, i) in posts" :key="i" :post="item"></HelloWorld> -->
    <HelloWorld :vehicules="cars"></HelloWorld>
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
          title: "lambo",
          body: "2023",
        },
        {
          title: "lambo",
          body: "2023",
        },
        {
          title: "lambo",
          body: "2023",
        },
        {
          title: "lambo",
          body: "2023",
        },
      ],
    }
  },

};
</script>
