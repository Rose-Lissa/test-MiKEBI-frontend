<template>
  <div class="footer">
    <div class="footer-buttons">
      <option-button
          v-for="option in answerOptions"
          :key="option"
          :option="option"
          v-model:selected-option="selectedOption"/>
      <check-button @click="checkAnswer"/>
    </div>
  </div>
</template>

<script>
import OptionButton from "./AnswerOptionButton.vue";
import CheckButton from "./CheckButton.vue";

export default {
  components: {
    OptionButton,
    CheckButton
  },
  data() {
    return {
      selectedOption: null
    };
  },
  computed: {
    answerOptions() {
      return this.$store.state.task.answerOptions
    },
    correctAnswer() {
      return this.$store.state.task.correctAnswer
    }
  },
  methods: {
    checkAnswer() {
      if (this.selectedOption && this.correctAnswer === this.selectedOption) {
        alert("Молодец! Правильный ответ!");
        this.selectedOption = null;
        this.$store.dispatch('increaseScore');
      }
      else if (this.selectedOption && this.correctAnswer !== this.selectedOption){
        alert("Неправильный ответ. Попробуй еще раз!");
        this.selectedOption = null;
      }
      else {
        alert("Вариант ответа не выбран.");
      }
    }
  }
}
</script>

<style scoped>
  .footer-buttons {
    display: flex;
    flex-wrap: wrap;
    gap: 0 15px;
    padding: 20px;
    margin: 0 0 15px;
    background: rgba(0, 0, 0, 0.15);
  }

  @media screen and (max-width: 479px) {
    .footer-buttons {
      flex-direction: column;
      align-items: center;
      gap: 15px 0;
      flex-grow: 1;
    }
  }

  .footer {
    flex: 0 0 auto;
  }
</style>