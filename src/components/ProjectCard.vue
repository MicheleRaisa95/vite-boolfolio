<template>
  <div class="project-card">
    <router-link :to="`/projects/${project.id}`">
      <h2>{{ project.title }}</h2>
    </router-link>
    <p>{{ project.description }}</p>
  </div>
</template>

<script>
export default {
  name: "ProjectCard",
  props: {
    project: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.project-card {
  border: 1px solid #ccc;
  padding: 16px;
  margin: 16px 0;
}
</style>
