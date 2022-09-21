<script setup lang="ts">
import ParallaxSection from '~/components/ParallaxSection.vue'
import CenteredText from '~/components/CenteredText.vue'
import GridText from '~/components/GridText.vue'
import HeroImg from '~/images/hero.jpg'

const homepage = [
  {
    component: ParallaxSection,
    props: {
      logo: 'https://i.imgur.com/VbbTDGE.png',
      text: 'Cozinha artesanal, <br>comida de verdade.',
      bg: HeroImg,
    },
  },
  {
    component: CenteredText,
    props: {
      text: `Somos um grupo focado em servir comidas de
        <br/>qualidade aliado à praticidade que o dia a dia demanda.
        <br/><br/>Todos os produtos são feitos a mão, com o cuidado necessário que cada
        <br/>ingrediente requer e precisa para resultar num prato gostoso e aconchegante.
        <br/><br/><strong><span class='clip' data-clipboard-text='cozinhados5@gmail.com'>COZINHADOS5@GMAIL.COM</span>&nbsp;
        <br/><a href="https://www.instagram.com/cozinhadoscinco">@COZINHADOSCINCO</strong></a>`,
    },
  },
  {
    component: ParallaxSection,
    props: {
      id: 'massas-frescas',
      text: 'MASSAS FRESCAS & MOLHOS',
      bg: 'https://i.imgur.com/YfORU1j.jpg',
    },
  },
  {
    component: GridText,
    props: {
      grid: [
        {
          title: 'Raviolis',
          text: `
<strong>MUSSARELA DE BÚFALA COM MANJERICÃO</strong>
INDIVIDUAL (200G) R$ 26 | | (500G) R$ 54
<strong>ABÓBORA COM AMÊNDOA</strong>
INDIVIDUAL (200G) R$ 25 | | (500G) R$ 50
<strong>CARNE DE PANELA</strong>
INDIVIDUAL (200G) R$ 31 | | (500G) R$ 62
<strong>ESPINAFRE COM 2 QUEIJOS</strong>
INDIVIDUAL (200G) R$ 26 | | (500G) R$ 52
<strong>MASSA VERDE COM 4 QUEIJOS</strong>
INDIVIDUAL (200G) R$ 28 | | (500G) R$ 56
          `,
        },
        {
          title: 'Molhos',
          text: `
<strong>TOMATE AO SUGO</strong>
500G - R$ 26
<strong>BRANCO (CREME DE LEITE COM ERVAS)</strong>
500G - R$ 26
<strong>BOLOGNESA</strong>
500G - R$ 26
<strong>MANTEIGA COM SÁLVIA</strong>
500G - R$ 26
<strong>PESTO DE MANJERICÃO</strong>
500G - R$ 26
          `,
        },
        {
          title: 'Lasagnas',
          text: `
<strong>MUSSARELA DE BÚFALA COM MANJERICÃO</strong>
INDIVIDUAL (200G) R$ 26 | | (500G) R$ 54
<strong>ABÓBORA COM AMÊNDOA</strong>
INDIVIDUAL (200G) R$ 25 | | (500G) R$ 50
<strong>CARNE DE PANELA</strong>
INDIVIDUAL (200G) R$ 31 | | (500G) R$ 62
<strong>ESPINAFRE COM 2 QUEIJOS</strong>
INDIVIDUAL (200G) R$ 26 | | (500G) R$ 52
<strong>MASSA VERDE COM 4 QUEIJOS</strong>
INDIVIDUAL (200G) R$ 28 | | (500G) R$ 56
          `,
        },
      ],
    },
  },
  {
    component: ParallaxSection,
    props: {
      id: 'quiches-e-diversos',
      text: 'QUICHES & DIVERSOS',
      bg: 'https://i.imgur.com/jDj1oYs.jpg',
    },
  },
  {
    component: GridText,
    props: {
      grid: [
        {
          title: 'Quiches',
          text: `
<strong>ABOBRINHA COM CEBOLA E TOMILHO</strong>
INDIVIDUAL (COM 2) R$ 26 | 4 PESSOAS R$ 54 | 6/8 PESSOAS (500G) R$ 80
<strong>ABOBRINHA COM CEBOLA E TOMILHO</strong>
INDIVIDUAL (COM 2) R$ 26 | 4 PESSOAS R$ 54 | 6/8 PESSOAS (500G) R$ 80
<strong>ABOBRINHA COM CEBOLA E TOMILHO</strong>
INDIVIDUAL (COM 2) R$ 26 | 4 PESSOAS R$ 54 | 6/8 PESSOAS (500G) R$ 80
<strong>ABOBRINHA COM CEBOLA E TOMILHO</strong>
INDIVIDUAL (COM 2) R$ 26 | 4 PESSOAS R$ 54 | 6/8 PESSOAS (500G) R$ 80
<strong>ABOBRINHA COM CEBOLA E TOMILHO</strong>
INDIVIDUAL (COM 2) R$ 26 | 4 PESSOAS R$ 54 | 6/8 PESSOAS (500G) R$ 80
        `,
        },
        {},
        {
          title: 'Arroz de Pato',
          text: `
<strong>KIT PARA FINALIZAR EM CASA</strong>
APROXIMADAMENTE 600G R$ 115
          `,
        },
      ],
    },
  },
  {
    component: ParallaxSection,
    props: {
      id: 'sobremesas',
      text: 'SOBREMESAS',
      bg: 'https://i.imgur.com/5uO2Pza.jpg',
    },
  },
  {
    component: GridText,
    props: {
      grid: [
        {
          title: 'Tortas',
          text: `
<strong>CHEESECAKE COM GELÉIA CASEIRA DE FRUTAS VERMELHAS</strong>
TAMANHO P (3/4 PESSOAS) R$ 26 | TAMANHO P (3/4 PESSOAS) R$ 26
<strong>TORTA SANTIAGO (NOZES)</strong>
TAMANHO P (3/4 PESSOAS) R$ 26 | TAMANHO P (3/4 PESSOAS) R$ 26
<strong>CHEESECAKE COM GELÉIA CASEIRA DE FRUTAS VERMELHAS</strong>
TAMANHO P (3/4 PESSOAS) R$ 26 | TAMANHO P (3/4 PESSOAS) R$ 26
<strong>TORTA SANTIAGO (NOZES)</strong>
TAMANHO P (3/4 PESSOAS) R$ 26 | TAMANHO P (3/4 PESSOAS) R$ 26
<strong>CHEESECAKE COM GELÉIA CASEIRA DE FRUTAS VERMELHAS</strong>
TAMANHO P (3/4 PESSOAS) R$ 26 | TAMANHO P (3/4 PESSOAS) R$ 26
<strong>TORTA SANTIAGO (NOZES)</strong>
TAMANHO P (3/4 PESSOAS) R$ 26 | TAMANHO P (3/4 PESSOAS) R$ 26
          `,
        },
        {},
        {
          title: 'Bolos',
          text: `
<strong>MUSSARELA DE BÚFALA COM MANJERICÃO</strong>
INDIVIDUAL (200G) R$ 26 | | (500G) R$ 54
<strong>ABÓBORA COM AMÊNDOA</strong>
INDIVIDUAL (200G) R$ 25 | | (500G) R$ 50
<strong>CARNE DE PANELA</strong>
INDIVIDUAL (200G) R$ 31 | | (500G) R$ 62
<strong>ESPINAFRE COM 2 QUEIJOS</strong>
INDIVIDUAL (200G) R$ 26 | | (500G) R$ 52
<strong>MASSA VERDE COM 4 QUEIJOS</strong>
INDIVIDUAL (200G) R$ 28 | | (500G) R$ 56
          `,
        },
      ],
    },
  },
  {
    component: ParallaxSection,
    props: {
      id: 'contato',
      text: 'FAÇA SEU PEDIDO',
      bg: 'https://i.imgur.com/xClHhGP.jpg',
    },
  },
  {
    component: CenteredText,
    props: {
      text: `<strong>FAÇA SEU PEDIDO PELOS NÚMEROS</strong>
        <br/><span class='clip-phone' data-clipboard-text='+5511982806680'>(11) 982 806 680</span> OU <span class='clip-phone' data-clipboard-text='+5511964437762'>(11) 964 437 762</span>
        <br/><br/>NOSSOS PRODUTOS SÃO VENDIDOS (EM SUA MAIORIA) CONGELADOS.
        <br/>SOBREMESAS PODEM SER REFRIGERADAS OU CONGELADAS.
        <br/><br/><strong><span class='clip' data-clipboard-text='cozinhados5@gmail.com'>COZINHADOS5@GMAIL.COM</span>&nbsp;
        <br/><a href="https://www.instagram.com/cozinhadoscinco">@COZINHADOSCINCO</strong></a>`,
    },
  },
]
</script>

<template>
  <component :is="section.component" v-for="(section, index) in homepage" v-bind="section.props" :key="index" />
</template>
