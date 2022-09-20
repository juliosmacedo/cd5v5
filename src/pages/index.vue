<script setup lang="ts">
// parallax-section (logo + texto + foto)
// centered-text
// parallax-section (texto + foto)
// grid-text (3)
// parallax-section (texto + foto)
// grid-text (2)
// parallax-section (texto + foto)
// grid-text (2)

// const homepage = $ref()
import ParallaxSection from '~/components/ParallaxSection.vue'
import CenteredText from '~/components/CenteredText.vue'
import GridText from '~/components/GridText.vue'

const homepage = [
  {
    component: ParallaxSection,
    props: {
      logo: 'https://i.imgur.com/VbbTDGE.png',
      text: 'Cozinha artesanal, <br>comida de verdade.',
      bg: 'https://i.imgur.com/S8hpSUp.jpg',
    },
  },
  {
    component: CenteredText,
    props: {
      text: `
        Somos um grupo focado em servir comidas de
        \nqualidade aliado à praticidade que o dia a dia demanda.
        \n\nTodos os produtos são feitos a mão, com o cuidado necessário que cada
        \ningrediente requer e precisa para resultar num prato gostoso e aconchegante.
        \n\n<strong>COZINHADOS5@GMAIL.COM&nbsp;
        \n<a href="https://www.instagram.com/cozinhadoscinco">@COZINHADOSCINCO</strong></a>`,
    },
  },
  {
    component: ParallaxSection,
    props: {
      text: 'MASSAS FRESCAS & MOLHOS',
      bg: 'https://hotmart.s3.amazonaws.com/product_contents/302ab041-673e-43d5-b4d6-2640e8c12fa5/massasfrescasCD.jpg',
    },
  },
  {
    component: GridText,
  },
]
</script>

<template>
  <component :is="section.component" v-for="(section, index) in homepage" v-bind="section.props" :key="index" />
</template>
