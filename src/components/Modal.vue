<template>
  <div class="modal" v-if="modalIsOpen" @click.stop="closeModal">
    <div class="modal-content" @click.stop>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    modalIsOpen: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    closeModal () {
      this.$emit('update:modalIsOpen', false)
    }
  }
}
</script>

<style scoped>
  .modal {
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    display: flex;
  }

  .modal-content {
    margin: auto;
    background: white;
    border-radius: 12px;
    min-height: 50px;
    min-width: 50px;
    width: fit-content;
    padding: 20px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 10px 10px;
  }

  .modal-text {
    width: 230px;
  }
</style>