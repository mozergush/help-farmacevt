<template>
  <div class="final-page">
    <div class="img">
      <img src="img/final.jpg" alt="">
    </div>
    <div class="final-page__top">
      <div class="button" @click="{resetGame(); $router.push(`/`);}">
        <img src="img/button-home2.svg" alt="">
      </div>
    </div>
    <div class="final-page__content">
      <div class="wrap">
        <div class="results">
          <div class="results__item">
            <div class="value">{{ Math.round(prep1.value / cards.length * 100) }} %</div>
            {{ prep1.name }}
          </div>
          <div class="results__item">
            <div class="value">{{ Math.round(prep2.value / cards.length * 100) }} %</div>
            {{ prep2.name }}
          </div>
          <div class="results__item">
            <div class="value">{{ Math.round(prep3.value / cards.length * 100) }} %</div>
            {{ prep3.name }}
          </div>
        </div>
        <div class="content">
          <div class="title">
            Ваш результат:
            <span>«Что я здесь делаю?»</span>
          </div>
          <div class="text">
            Это тестовое задание, так что не будем углубляться в глубины проблем фармацевтов.
          </div>
        </div>
      </div>
    </div>
    <div class="final-page__bottom">
      <div class="button" @click="{resetGame(); $router.push(`/main`);}">
        Попробовать еще
      </div>
    </div>


  </div>
</template>

<script>

import {mapMutations, mapState} from "vuex";
import router from "@/router";

export default {
  name: "Final",
  data: () => ({

  }),
  methods: {
    ...mapMutations({
      resetGame: 'resetGame',
    }),
  },
  computed: {
    ...mapState({
      cards: state => state.cards,
      prep1: state => state.prep1,
      prep2: state => state.prep2,
      prep3: state => state.prep3,
    }),
  },
};
</script>

<style scoped lang="sass">

  .final-page
    padding-right: 670px
    width: 100%
    height: 100vh
    min-height: 100%
    background-color: #fff
    overflow: hidden
    display: flex
    flex-direction: column
    position: relative
    .img
      right: 0
      top: 0
      position: absolute
    &__top
      flex: 0 0 auto
      padding: 50px 30px 0
      display: flex
      align-items: flex-start
      justify-content: flex-start
      .button
        background: linear-gradient(63.53deg, #2D8550 16.62%, #5E6EC2 83.38%)
        border-radius: 100%
        margin: 20px 20px 0
        display: flex
        align-items: center
        justify-content: center
        width: 70px
        height: 70px
        cursor: pointer
        overflow: hidden
    &__content
      display: flex
      align-items: center
      justify-content: flex-start
      flex-wrap: wrap
      flex: 1 0 auto
      padding: 50px 130px 50px
      .results
        display: flex
        align-items: center
        padding-bottom: 50px
        border-bottom: 2px solid #D9D9D9
        &__item
          flex: 1 0 0
          font-weight: 750
          font-size: 16px
          line-height: 20px
          color: #424242
          .value
            margin-bottom: 10px
            display: block
            width: 100%
            font-weight: 400
            font-size: 48px
            line-height: 59px
      .content
        text-align: left
        .title
          margin-top: 40px
          font-weight: 500
          font-size: 32px
          line-height: 35px
          letter-spacing: 0.02em
          color: #8E9AD5
          span
            display: block
            font-weight: 750
            font-size: 40px
            line-height: 44px
        .text
          margin-top: 20px
          font-weight: normal
          font-size: 24px
          line-height: 29px
          color: #424242

    &__bottom
      flex: 0 0 auto
      padding: 50px 130px 84px
      text-align: left
      .button
        cursor: pointer
        display: inline-block
        font-weight: 750
        font-size: 24px
        line-height: 29px
        color: #FFFFFF
        padding: 15px 25px
        background: linear-gradient(90deg, #D9D9D9 0%, #A1A1A1 100%)
        border-radius: 100px
</style>
