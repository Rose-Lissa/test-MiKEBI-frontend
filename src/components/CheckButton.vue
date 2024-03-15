<template>
  <button class="checkButton">
    Check
  </button>
</template>

<script>
export default {

}
</script>

<style scoped>
  .checkButton {
    display: flex;
    padding: 8px 30px;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    border-bottom: 6px solid rgba(0, 0, 0, 0.25);
    border-top: 0;
    border-left: 0;
    border-right: 0;
    background: #f0f0f0;
    width: fit-content;
    height: fit-content;
  }

  .checkButton:active {
    border: 0;
  }
</style>