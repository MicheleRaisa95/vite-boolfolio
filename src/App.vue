<template>
  <div id="app">
    <h1>Progetti</h1>
    <ProjectCard
      v-for="project in projects"
      :key="project.id"
      :project="project"
    />
  </div>
</template>

<script>
import axiosInstance from "./axios";
import ProjectCard from "./components/ProjectCard.vue";

export default {
  name: "App",
  components: {
    ProjectCard,
  },
  data() {
    return {
      projects: [],
    };
  },
  mounted() {
    axiosInstance
      .get("/projects")
      .then((response) => {
        this.projects = response.data;
      })
      .catch((error) => {
        console.error(error);
      });
  },
};
</script>

<style>
/* Aggiungi i tuoi stili qui */
</style>
