<template>
  <button class="pink-button">
    <img src="../assets/close_btn.png" alt="Cross" id="cross-img">
  </button>
</template>

<script>
export default {

}
</script>
<style>
  .pink-button {
    display: flex;
    padding: 8px;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    border-bottom: 4px solid #d8c0cb;
    border-top: 0;
    border-left: 0;
    border-right: 0;
    background: #f0dbe4;
    width: fit-content;
    height: fit-content;
  }
  .pink-button:active {
    border: 0;
  }
</style>