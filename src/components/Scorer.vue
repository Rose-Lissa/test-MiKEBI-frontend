<template>
  <div id="name-score">
    <p id="playerName">{{ playerName }}</p>
    <div id="score">
      <span>{{ scoreValue }}</span>
      <img src="../assets/coin.png" alt="Coin" id="coin-image">
    </div>
  </div>
</template>

<script>

export default {
  computed: {
    playerName () {
      return this.$store.state.playerName
    },
    scoreValue () {
      return this.$store.state.score.scoreValue
    }
  },
}
</script>

<style scoped>
  #name-score {
    display: flex;
    flex-direction: column;
    gap: 2px 0;
    width: fit-content;
    height: fit-content;
  }
  #playerName {
    width: fit-content;
    margin: 0;
  }
  #coin-image {
    width: 16px;
    height: 15px;
  }
  #score {
    display: flex;
    align-items: center;
    justify-content: end;
    justify-self: end;
    gap: 0 2px;
    width: fit-content;
  }
</style>