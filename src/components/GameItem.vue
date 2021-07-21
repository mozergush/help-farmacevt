<template>
  <vue-swing
      @throwoutleft="$parent.swiped('prep1')"
      @throwoutright="$parent.swiped('prep3')"
      @throwoutup="$parent.swiped('prep2')"
      :config="config"
  >
    <div class="game-side__item" :class="activeItemClass">
      <div class="print">
        {{ activePrep }}
      </div>
      <div class="img">
        <img :src="`img/${card.img}.jpg`" :alt="`Пациент ${ card.id }`">
      </div>
      <div class="content">
        <div class="title">
          {{ card.title }}
        </div>
        <div class="text">
          {{ card.text }}
        </div>
      </div>
    </div>
  </vue-swing>
</template>

<script>
import VueSwing from 'vue-swing';

export default {
  name: "GameItem",
  data: () => ({
    config: {
      allowedDirections: [VueSwing.Direction.LEFT, VueSwing.Direction.RIGHT, VueSwing.Direction.UP]
    }
  }),
  props:{
    card: {
      type: Object,
      required: true,
    },
    activeItemClass: String,
    activePrep: String,
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">

  .game-side
    &__item
      box-shadow: 0px 0px 40px rgba(127, 127, 127, 0.4)
      border-radius: 40px
      max-width: 540px
      overflow: hidden
      cursor: pointer
      user-select: none
      position: relative
      .print
        padding: 30px 10px
        width: 80%
        position: absolute
        top: 80%
        left: 50%
        font-weight: 750
        font-size: 52px
        line-height: 51px
        color: #8049C7
        transform: translateX(-50%) translateY(-50%) rotate(-10deg)
        border: 8px solid #8049C7
        border-radius: 10px
        opacity: 0
        transition: 0.3s ease
        @media only screen and (max-width : 768px)
          font-size: 18px
          line-height: 24px
          padding: 10px 10px
      &_prep1
        .print
          top: 60%
          opacity: 1
          color: #8049C7
          border-color: #8049C7
      &_prep2
        .print
          top: 60%
          opacity: 1
          color: #169AE4
          border-color: #169AE4
      &_prep3
        .print
          top: 60%
          opacity: 1
          color: #FFB903
          border-color: #FFB903
      .img
        height: 350px
        width: 100%
        pointer-events: none
        @media only screen and (max-width : 768px)
          height: 180px
        img
          width: 100%
          height: 100%
          object-fit: cover
      .content
        padding: 15px 50px 30px
        text-align: left
        background: #FFFFFF
        @media only screen and (max-width : 768px)
          padding: 15px 15px 20px
        .title
          pointer-events: none
          font-weight: 750
          font-size: 32px
          line-height: 39px
          color: #8E9AD5
          @media only screen and (max-width : 768px)
            font-size: 20px
            line-height: 25px
        .text
          pointer-events: none
          margin-top: 5px
          min-height: 145px
          font-weight: 300
          font-size: 24px
          line-height: 29px
          color: #424242
          @media only screen and (max-width : 768px)
            font-size: 16px
            line-height: 20px
            min-height: unset

</style>
