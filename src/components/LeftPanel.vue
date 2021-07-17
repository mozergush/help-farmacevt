<template>
  <div class="left-panel">
    <div class="wrap">
      <div class="left-panel__buttons">
        <div class="left-panel__button" @click="$router.push(`/`);">
          <img src="img/button-home.svg" alt="">
        </div>
        <div class="left-panel__button" @click="$parent.checkReset">
          <img src="img/button-refresh.svg" alt="">
        </div>
      </div>
      <div class="left-panel__params">
        <div class="left-panel__params-title">
          Параметры:
        </div>
        <div class="left-panel__params-items">
          <div class="left-panel__param">
            <div class="img"><img src="img/param1.svg" alt=""></div>
            <div class="value">
              {{ prep1 }}
            </div>
          </div>
          <div class="left-panel__param">
            <div class="img"><img src="img/param2.svg" alt=""></div>
            <div class="value">
              {{ prep2 }}
            </div>
          </div>
          <div class="left-panel__param">
            <div class="img"><img src="img/param3.svg" alt=""></div>
            <div class="value">
              {{ prep3 }}
            </div>
          </div>
        </div>
      </div>
      <div class="left-panel__bottom">
        Осталось в очереди:
        <div class="values">
          <span>{{ cardsLength - currentCard + 1 }}</span>/{{ cardsLength }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LeftPanel",
  props: {
    cardsLength: Number,
    currentCard: Number,
    prep1: Number,
    prep2: Number,
    prep3: Number,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">

  .left-panel
    position: relative
    height: 100%
    &:before
      content: ''
      position: absolute
      top: 0
      left: 0
      width: 100%
      height: 100%
      background: linear-gradient(63.53deg, #2D8550 16.62%, #5E6EC2 83.38%)
      opacity: 0.7
    .wrap
      position: relative
      display: flex
      flex-direction: column
      height: 100%

    &__buttons
      flex: 0 0 auto
      padding: 50px 30px 0
      display: flex
      align-items: flex-start
      justify-content: flex-start
    &__button
      margin: 20px 20px 0
      background: #FFFFFF
      border-radius: 100%
      display: flex
      align-items: center
      justify-content: center
      width: 70px
      height: 70px
      cursor: pointer
      overflow: hidden

    &__params
      flex: 1 0 auto
      color: #FFFFFF
      padding: 50px 30px 0px
      display: flex
      align-items: center
      justify-content: center
      flex-direction: column
      &-title
        padding: 0 10px
        width: 100%
        text-align: left
        font-weight: 750
        font-size: 36px
        line-height: 44px
      &-items
        width: 100%
        margin-top: 30px
        display: flex
        align-items: flex-start
        justify-content: center
        flex-wrap: wrap
    &__param
      width: calc(50% - 20px)
      margin: 0px 10px 37px
      background: #FFFFFF
      box-shadow: 0px 0px 50px rgba(131, 42, 64, 0.4)
      border-radius: 40px
      font-weight: 750
      font-size: 48px
      line-height: 59px
      color: #424242
      display: flex
      align-items: center
      justify-content: flex-start
      text-align: center
      padding: 10px
      .img
        display: flex
        align-items: center
        justify-content: center
        width: 60px
        height: 60px
        img
          max-width: 100%
          max-height: 100%
      .value
        padding-left: 10px
        width: calc(100% - 60px)
    &__bottom
      flex: 0 0 auto
      background: rgba(#fff, 0.15)
      font-weight: 300
      font-size: 36px
      line-height: 44px
      letter-spacing: 0.02em
      text-align: center
      color: #FFFFFF
      padding: 15px 15px 15px
      .values
        width: 100%
        font-weight: 300
        font-size: 45px
        line-height: 55px
        letter-spacing: 0.02em
        span
          font-weight: 750

</style>
