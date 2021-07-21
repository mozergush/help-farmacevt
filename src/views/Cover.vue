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
    @media only screen and (max-width : 1200px)
      overflow: auto

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
    @media only screen and (max-width : 1200px)
      top: 50%
      left: 50%
      width: 95vw
      height: 95vw
      transform: translateY(-50%) translateX(-50%)
      padding: 15px
      align-items: center
      justify-content: center
      text-align: center

    &__title
      padding-left: 90px
      font-size: 35px
      line-height: 41px
      text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25)
      letter-spacing: 0.02em
      @media only screen and (max-width : 1200px)
        padding-left: 0
      @media only screen and (max-width : 768px)
        font-size: 20px
        line-height: 25px
      @media only screen and (max-width : 400px)
        font-size: 16px
        line-height: 25px

    &__bigtitle
      padding-left: 90px
      margin-top: 29px
      font-size: 60px
      line-height: 66px
      letter-spacing: 0.02em
      font-weight: 750
      @media only screen and (max-width : 1200px)
        padding-left: 0
      @media only screen and (max-width : 768px)
        margin-top: 25px
        font-size: 30px
        line-height: 40px
      @media only screen and (max-width : 400px)
        margin-top: 15px
      span
        text-transform: uppercase
        font-size: 70px
        line-height: 77px
        @media only screen and (max-width : 768px)
          font-size: 40px
          line-height: 45px
        @media only screen and (max-width : 400px)
          font-size: 35px
          line-height: 40px

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
      @media only screen and (max-width : 1200px)
        margin: 80px auto 0
      @media only screen and (max-width : 768px)
        margin: 40px auto 0
        width: auto
        padding: 0 25px
        font-size: 28px
        height: 50px

</style>
