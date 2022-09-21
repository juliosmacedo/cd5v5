<script setup lang="ts">
interface Item {
  title: string
  text: string
}
const props = defineProps({
  grid: Array<Item>,
})
</script>

<template>
  <div py-8 pb-10 class="title grid-text">
    <div v-for="(item, index) in props.grid" :key="index" :class="{ '--empty': !item.text }">
      <h3>{{ item.title }}</h3>
      <p v-html="item.text" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.grid-text {
  background: #fff;
  color: black;
  font-weight: 400;
  white-space: break-spaces;
  display: flex;
  flex-flow: row wrap;
  align-items: flex-start;

  h3 {
    font-size: 5.25rem;
  }
  p {
    font-size: 0.875rem;
    letter-spacing: 3px;
  }
  @include large {
    padding: 3.75rem;
    padding-top: 0.75rem;
    padding-bottom: 2.65rem;
    max-width: 71.25rem;
    margin: 0 auto;
  }

  > div {
    max-width: calc(100% - 15px);
    margin: 0 auto;
    text-align: left;
    position: relative;
    padding-bottom: 1rem;
    margin-bottom: 0.5rem;
    &:last-of-type::after {
      display: none;
    }

    &.--empty {
      &::after {
        display: none;
      }
    }
    @include large {
      font-size: 1.25rem;
      padding: 1rem;
      max-width: 100%;
      &:last-of-type::after {
        display: block;
      }

      &:nth-child(2) {
        text-align: center;
      }
      &:nth-child(3) {
        text-align: right;
      }
    }
    &::after {
      content: '';
      position: absolute;
      width: 150px;
      left: 50%;
      transform: translateX(-50%);
      height: 1px;
      background: #000;
      bottom: 0;
    }
  }
}
</style>

