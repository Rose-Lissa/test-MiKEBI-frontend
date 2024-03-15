<template>
    <div class="content">
      <div class="scorer flex">
        <scorer/>
      </div>
      <div class="container-fluid" style="padding: 0;">
        <div class="row">
          <div class="col-6 col-sm-1 order-1 order-sm-1">
            <cross-button/>
          </div>
          <div class="col-12 col-sm-10 order-3 order-sm-2">
            <task/>
          </div>
          <div class="col-6 col-sm-1 order-2 order-sm-3">
            <div class="flex">
              <bulb-button @click="openModal"/>
              <modal v-model:modalIsOpen="modalIsOpen">
                <p class="modal-text">Модальное окно с подсказкой. Закрывается при нажатии на крестик или вне окна.</p>
                <img src="../assets/close_btn.png" alt="Cross" id="cross-img" @click="closeModal" width="25" height="25">
              </modal>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import Scorer from "./Scorer.vue";
import CrossButton from "./CrossButton.vue";
import BulbButton from "./BulbButton.vue";
import Modal from "./Modal.vue";
import Task from "./Task.vue";

export default {
  components: {
    Task,
    Scorer,
    CrossButton,
    BulbButton,
    Modal
  },
  data () {
    return {
      modalIsOpen: false
    }
  },
  methods: {
    openModal() {
      this.modalIsOpen = true
    },
    closeModal() {
      this.modalIsOpen = false
    }
  }
}
</script>

<style scoped>
  .content {
    flex: 2 0 auto;
    margin: 20px auto;
    padding-top: 35px;
    max-width: 1200px;
    width: 100%;
  }

  .scorer {
    margin-bottom: 40px;
  }

  .flex {
    display: flex;
    justify-content: end;
  }

  .modal-text {
    width: 230px;
  }

</style>