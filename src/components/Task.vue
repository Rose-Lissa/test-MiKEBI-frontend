<template>
  <div class="task">
    <p class="task-conditions">{{ taskConditions }}</p>
    <p class="task-text">{{ taskText }}</p>
    <img :src="taskImage"
         alt="TaskImage"
         class="task-img">
  </div>

</template>

<script>
export default {
  computed: {
    taskConditions() {
      return this.$store.state.task.taskConditions
    },
    taskText() {
      return this.$store.state.task.taskText
    },
    taskImage() {
      return this.$store.state.task.taskImage
    }
  }
}
</script>

<style scoped>
  .task {
    display: flex;
    flex-direction: column;
    gap: 30px 0;
    align-items: center;
  }

  .task-text {
    font-size: 1.4rem;
    margin-bottom: 15%;
  }

  .task-img {
    max-width: 100%;
    height: auto
  }
</style>