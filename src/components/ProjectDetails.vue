<template>
  <div v-if="project">
    <h1>{{ project.title }}</h1>
    <p>{{ project.description }}</p>
    <!-- Aggiungi altri dettagli del progetto qui -->
  </div>
  <div v-else>
    <p>Loading...</p>
  </div>
</template>

<script>
import axiosInstance from "../axios";

export default {
  name: "ProjectDetail",
  data() {
    return {
      project: null,
    };
  },
  created() {
    const projectId = this.$route.params.id;
    axiosInstance
      .get(`/projects/${projectId}`)
      .then((response) => {
        this.project = response.data;
      })
      .catch((error) => {
        console.error(error);
      });
  },
};
</script>
