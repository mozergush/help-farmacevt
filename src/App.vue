<template>
<!--  <div id="nav">-->
<!--    <router-link to="/">Home</router-link> |-->
<!--    <router-link to="/about">About</router-link>-->
<!--  </div>-->
  <router-view />
</template>

<style lang="scss">
#app {
  font-family: AvenirNextCyr, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100%;
  min-width: 100%;
  display: block;
  position: relative;
}
body{
  margin: 0;
  display: flex;
}
*{
  box-sizing: border-box;
}
@font-face {
  font-family: 'AvenirNextCyr';
  src: url('~@/assets/fonts/AvenirNextCyr-Regular.woff') format('woff');
  font-weight: 400;
  font-style: normal;
}
@font-face {
  font-family: 'AvenirNextCyr';
  src: url('~@/assets/fonts/AvenirNextCyr-Bold.woff') format('woff');
  font-weight: 750;
  font-style: normal;
}
@font-face {
  font-family: 'AvenirNextCyr';
  src: url('~@/assets/fonts/AvenirNextCyr-Light.woff') format('woff');
  font-weight: 300;
  font-style: normal;
}
</style>
