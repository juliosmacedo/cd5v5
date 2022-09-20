<script setup lang="ts">
const props = defineProps({
  logo: {
    type: String,
    required: false,
  },
  text: String,
  bg: String,
})

const handleArrow = () => {
  window.scrollTo({
    top: window.innerHeight,
    behavior: 'smooth',
  })
}
</script>

<template>
  <div
    class="parallax-section"
    :class="{
      '--hero': !!props.logo,
    }"
    :style="{
      'background-image': `url(${props.bg})`,
    }"
  >
    <img v-if="props.logo" :src="props.logo" alt="Logo Cozinha dos Cinco">
    <h2 class="title" v-html="props.text" />
    <div v-if="props.logo" class="arrows" @click="handleArrow">
      <svg>
        <path class="a1" d="M0 0 L30 32 L60 0" />
        <path class="a2" d="M0 20 L30 52 L60 20" />
        <path class="a3" d="M0 40 L30 72 L60 40" />
      </svg>
    </div>
  </div>
</template>

<style lang="scss">
.parallax-section {
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top center;
  height: auto;
  &.--hero {
    height: 100vh;
    background-color: #716B5D;

    h2 {
      width: 100%;
      margin: 1.7rem auto;
    }
  }
  display: flex;
  flex-flow: row wrap;
  align-content: flex-start;

  img {
    width: calc(367px / 2);
    flex: 0 calc(367px / 2);
    height: calc(347px / 2);
    margin: 6rem auto 0;
    filter: drop-shadow(1px 1px 1px #222);
  }

  @include medium {
    img {
      width: 367px;
      flex: 0 367px;
      height: 347px;
    }
  }

  h2 {
    margin: 13rem auto;
    font-size: 35px;
    letter-spacing: 10px;
    text-transform: uppercase;
    font-weight: 400;
    text-shadow: 1.4px 1.4px 2px #000;
    opacity: 0.9;
    color: white
  }

  @include medium {
    h2 {
      font-size: 70px;
    }
  }

  .arrows {
    width: 60px;
    height: 6em;
    position: absolute;
    left: 50%;
    transform: translateX(-30px);
    cursor: pointer;
    svg {
      width: 60px;
      height: 6em;
    }
    bottom: 4rem;
    z-index: 1;

    path {
      stroke: #FFFFFF;
      fill: transparent;
      stroke-width: 1px;
      animation: arrow 2s infinite;

      &.a1 {
        animation-delay:-1s;
      }
      &.a2 {
        animation-delay:-0.5s;
      }
      &.a3 {
        animation-delay:0s;
      }
    }
  }
}

@keyframes arrow
{
0% {opacity:0}
40% {opacity:1}
80% {opacity:0}
100% {opacity:0}
}
</style>
