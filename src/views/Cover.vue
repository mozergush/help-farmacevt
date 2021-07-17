<template>
  <div class="cover" style="background-image: url('img/cover-bg.jpg';">
    <div class="content">
      <div class="content__title">
        Добро пожаловать в игру
      </div>
      <div class="content__bigtitle">
        Помоги <br>
        <span>Фармацевту</span>
      </div>
      <router-link to="/main" class="content__button">
        Начать
      </router-link>
    </div>
  </div>
</template>

<script>

export default {
  name: "Home",
};
</script>

<style scoped lang="sass">
  .cover
    position: relative
    width: 100%
    height: 100vh
    min-height: 100%
    background-size: cover
    background-repeat: no-repeat
    overflow: hidden

  .content
    position: absolute
    top: -30px
    left: 110px
    background: linear-gradient(63.53deg, #2D8550 16.62%, #5E6EC2 83.38%)
    border-radius: 100%
    width: 860px
    height: 860px
    display: flex
    flex-direction: column
    align-self: center
    justify-content: flex-end
    text-align: left
    color: #fff
    padding: 0 90px 160px 90px
    &__title
      padding-left: 90px
      font-size: 35px
      line-height: 41px
      text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25)
      letter-spacing: 0.02em

    &__bigtitle
      padding-left: 90px
      margin-top: 29px
      font-size: 60px
      line-height: 66px
      letter-spacing: 0.02em
      font-weight: 750
      span
        text-transform: uppercase
        font-size: 70px
        line-height: 77px

    &__button
      margin: 120px auto 0
      font-weight: bold
      font-size: 36px
      line-height: 44px
      color: #8E9AD5
      background: #FFFFFF
      border-radius: 100px
      height: 90px
      display: flex
      align-items: center
      justify-content: center
      text-align: center
      width: 381px
      text-decoration: none

</style>
