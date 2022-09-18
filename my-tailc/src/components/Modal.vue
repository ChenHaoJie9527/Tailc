<template>
  <div class="modal" v-show="isShow">
    <div class="modal-header"></div>
    <div class="modal-container">
      <template v-for="item in list" :key="item.id">
        <span>{{ item.name }}</span>
      </template>
    </div>
    <div class="modal-footer"></div>
  </div>
</template>

<script setup lang="ts">
import { readonly, ref, defineExpose } from "vue";
const isShow = ref(false);
const list = readonly([
  {
    name: "chen",
    id: 1,
  },
  { name: "fei", id: 2 },
]);
const activeShow = () => {
  isShow.value = !isShow.value;
};

defineExpose({
  activeShow,
});
</script>

<style scoped></style>
