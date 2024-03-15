<template>
  <div class="wrapper">
    <content-block/>
    <footer-block/>
  </div>
</template>

<script>
import ContentBlock from "./components/ContentBlock.vue";
import FooterBlock from "./components/FooterBlock.vue";

export default {
  components: {
    FooterBlock,
    ContentBlock
  },
  data() {
    return {
      taskData: null
    };
  },
  mounted() {
    this.$store.dispatch('fetchTaskData')
  }
}
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    font-family: Verdana, sans-serif;
  }

  html, body {
    height: 100%;
  }

  @media screen and (max-width: 479px) {
    html {
      font-size: 14px;
    }
  }

  @media screen and (min-width: 480px) and (max-width: 767px) {
    html {
      font-size: 16px;
    }
  }

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    html {
      font-size: 18px;
    }
  }

  @media screen and (min-width: 1024px) {
    html {
      font-size: 20px;
    }
  }

  .wrapper {
    display: flex;
    flex-direction: column;
    height: 100vh;
    padding: 0 15px;
  }
</style>
