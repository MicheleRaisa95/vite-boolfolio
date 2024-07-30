<template>
  <div id="app">
    <h1>Progetti</h1>
  </div>
</template>

<script>
import axiosInstance from "./axios";

export default {
  name: "App",
  mounted() {
    axiosInstance
      .get("/projects")
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  },
};
</script>
