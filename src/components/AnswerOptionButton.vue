<template>
  <label class="option-label">
    <input type="radio"
           :value="option"
           name="radio-button"
           @input="$emit('update:selectedOption', $event.target.value)"
           :checked="selectedOption === option"
           class="option-input">
    <span class="option-button">{{ option }}</span>
  </label>
</template>

<script>
export default {
  props: {
    option: {
      required: true,
      default: "-"
    },
    selectedOption: {
      required: true,
      default: ""
    },
  }
}
</script>

<style scoped>
  .option-label {
    display: flex;
    flex-grow: 1;
  }

  .option-button {
    display: flex;
    padding: 8px;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    border-bottom: 6px solid rgba(0, 0, 0, 0.25);
    border-top: 0;
    border-left: 0;
    border-right: 0;
    background: #f0f0f0;
    flex-grow: 1;
  }

  .option-input:checked + .option-button {
    border: 0;
  }

  .option-input {
    position: absolute;
    opacity: 0;
  }

  @media screen and (max-width: 479px) {
    .option-label {
      width: 100%;
    }
  }
</style>