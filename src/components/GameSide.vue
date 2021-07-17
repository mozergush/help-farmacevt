<template>
  <div class="game-side">
    <div class="game-side__content">
      <GameItem :card = 'cards[currentCard - 1]' :key="cards[currentCard - 1].id" :activeItemClass="activeItemClass" :activePrep="activePrep"></GameItem>
    </div>
    <div class="game-side__buttons">
      <div class="game-side__button game-side__button_v1" @click="swiped('prep1')">
        Препарат 1
      </div>
      <div class="game-side__button game-side__button_v2" @click="swiped('prep2')">
        Препарат 2
      </div>
      <div class="game-side__button game-side__button_v3" @click="swiped('prep3')">
        Препарат 3
      </div>
    </div>
  </div>
</template>

<script>
import GameItem from "@/components/GameItem";

export default {
  components: {
    GameItem
  },
  name: "GameSide",
  data: () => ({

  }),
  props: {
    cards: {
      type: Array,
      required: true,
    },
    currentCard: Number,
    activeItemClass: String,
    activePrep: String,
  },
  methods: {
    swiped(prep){
      this.$parent.swiped(prep);
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">

  .game-side
    overflow: hidden
    position: relative
    display: flex
    flex-direction: column

    &__content
      padding: 100px 100px 70px 100px
      display: flex
      align-items: center
      justify-content: center
      flex: 1 0 auto

    &__buttons
      padding: 0 10px 64px
      display: flex
      align-items: flex-start
      justify-content: flex-start
      flex-wrap: wrap
    &__button
      width: calc(100% / 3 - 40px)
      margin: 20px 20px 0
      font-weight: 750
      font-size: 28px
      line-height: 34px
      text-align: center
      color: #FFFFFF
      border-radius: 100px
      height: 90px
      display: flex
      align-items: center
      justify-content: center
      cursor: pointer
      &_v1
        background: linear-gradient(266.19deg, #8049C7 0%, #CA57FD 100%)
      &_v2
        background: linear-gradient(266.19deg, #169AE4 0%, #0CC4FA 100%)
      &_v3
        background: linear-gradient(90deg, #FFD748 0.02%, rgba(195, 199, 11, 0.96) 99.97%, #CAC6AB 99.98%, #D3E9E1 99.99%)




</style>
