<script setup lang="ts">
const navItems = [
  {
    label: 'Massas Frescas',
    href: '#massas-frescas',
  },
  {
    label: 'Quiches & Diversos',
    href: '#quiches-e-diversos',
  },
  {
    label: 'Sobremesas',
    href: '#sobremesas',
  },
  {
    label: 'Contato',
    href: '#contato',
  },
]
</script>

<template>
  <div class="topnav">
    <img src="https://i.imgur.com/LaYHxbs.png" alt="logo" class="left">
    <img src="https://i.imgur.com/3xGLcpq.png" alt="logo" class="right">
    <ul m-0 p-0 flex>
      <li v-for="item in navItems" :key="item.href" text-center m-0 p-0>
        <a :href="item.href" class="title">
          <span>
            {{ item.label }}
          </span>
        </a>
      </li>
    </ul>
  </div>
</template>

<style lang="scss">
.topnav {
  z-index: 1;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  height: 4.5rem;
  background-color: rgba(white, 0.8);

  ul {
    height: 4.5rem;
    flex-flow: row wrap;
  }

  li {
    flex: 1;
    font-size: 1.2rem;
    height: 100%;
  }
  a {
    display: flex;
    width: 100%;
    flex-flow: row wrap;
    align-items: center;
    justify-content: center;
    height: 100%;
    color: black;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #ddd;
    }
  }

  span {
    line-height: 1.3;
  }
  .left,
  .right {
    display: none;
  }
  @include medium {
    .left,
    .right {
      display: initial;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
    }
    .left {
      left: 0;
    }
    .right {
      right: 0;
    }

    ul {
      max-width: 530px;
      margin: 0 auto;
    }
  }

  @include large {
    ul {
      max-width: 760px;
    }
  }
  // color: black;
  // width: 100%;
  // opacity: 80%;
  // background-color: rgb(255, 255, 255);
  // overflow: hidden;
  // position: fixed;
  // top: 0;
  // z-index: 1;
  // scroll-behavior: smooth;
  // list-style:none;

}

/* Style the links inside the navigation bar */
.topnav a {
  // align-content: center;
  // display: inline-block;
  // color: #000000;
  // font-family: "Oswald", sans-serif;
  // margin: 0 auto;
  // padding: 1em 1em;
  // text-decoration: none;
  // font-size: 1.2em;
  // scroll-behavior: smooth;
}

.topnav ul {
  // text-align: center;
  // width: 50%;
  // height: 80%;
  // margin: 0 auto;
  // text-align: center;
}

.topnav li {
  // display: block;
  // float: left;
  // width: 25%;
  // text-align: center;
  // line-height: 2em;
  // position: relative;
}

/* Change the color of links on hover */
.topnav a:hover {
  // background-color: #ddd;
  // color: black;
}

/* Add a color to the active/current link */
.topnav a.active {
  // background-color: #000000;
  // color: white;
}
</style>
