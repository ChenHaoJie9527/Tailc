<template>
  <div class="modal z-10 border bg-slate-400 rounded-md" v-show="isShow">
    <div class="flex flex-none flex-col flex-nowrap">
      <div class="modal-header text-left text-black h-10 bg-white leading-10">
        弹窗
      </div>
      <div class="modal-container">
        <template v-for="item in list" :key="item.id">
          <span class="block">{{ item.name }}</span>
        </template>
      </div>
      <div class="modal-footer"></div>
    </div>
  </div>
  <div
    v-show="isShow"
    class="mask z-5 bg-slate-400"
    @click.stop="closeModal"
  ></div>
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

const closeModal = () => {
  isShow.value = false;
};

defineExpose({
  activeShow,
});
</script>

<style scoped>
.modal {
  @apply modalcss;
}
.mask {
  @apply modalcss;
  width: 100%;
  height: 100%;
}
</style>