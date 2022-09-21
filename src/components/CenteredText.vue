<script setup lang="ts">
const props = defineProps({
  text: String,
})
</script>

<template>
  <div text-center py-8 pb-10 class="title">
    <p v-html="props.text" />
  </div>
</template>

<style lang="scss" scoped>
div {
  background: #fff;
  font-weight: 400;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: black;
  :deep(a):hover,
  :deep(span):hover {
  cursor: pointer;
    text-decoration: underline;
  }
  p {
    max-width: calc(100% - 15px);
    margin: 0 auto;

    font-size: 0.85rem;
    @include medium {
      font-size: 1.25rem;
      max-width: 895px;
    }
  }
}
</style>
