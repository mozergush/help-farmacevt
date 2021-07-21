<template>
  <div class="main-page">
    <LeftPanel class="left-panel" :cardsLength="cards.length" :currentCard="currentCard" :prep1="prep1.value" :prep2="prep2.value" :prep3="prep3.value"></LeftPanel>
    <GameSide class="game-side" :cards="cards" :currentCard="currentCard" :activeItemClass="activeItemClass" :activePrep="activePrep"></GameSide>
  </div>
</template>

<script>
// @ is an alias to /src
import LeftPanel from "@/components/LeftPanel.vue";
import GameSide from "@/components/GameSide.vue";
import router from "@/router";
import {mapState, mapGetters, mapActions, mapMutations} from "vuex";

export default {
  name: "Main",
  data: () => ({
    activeItemClass: '',
    activePrep: '',
    clickAvaible: true,
  }),
  components: {
    LeftPanel, GameSide
  },
  methods: {
    ...mapMutations({
      iteratePrep: 'iteratePrep',
      iterateCurrentCard: 'iterateCurrentCard',
      resetGame: 'resetGame',
    }),
    swiped(prep){
      if(this.clickAvaible){
        this.iteratePrep(prep);

        this.activeItemClass = 'game-side__item_' + prep;
        this.activePrep = this[prep].name;
        this.clickAvaible = false;

        setTimeout(function () {
          if(this.currentCard < this.cards.length){
            this.iterateCurrentCard();
          }else{
            router.push(`/final`);
          }
          this.activeItemClass = '';
          this.activePrep = '';
          this.clickAvaible = true;
        }.bind(this), 800);
      }
    },
    checkReset() {
      if(this.clickAvaible){
        this.resetGame();
      }
    }
  },
  computed: {
    ...mapState({
      cards: state => state.cards,
      currentCard: state => state.currentCard,
      prep1: state => state.prep1,
      prep2: state => state.prep2,
      prep3: state => state.prep3,
    }),
  },
};
</script>

<style scoped lang="sass">
  .main-page
    height: 100vh
    min-height: 100%
    display: flex
    align-items: stretch
    justify-content: flex-start
    @media only screen and (max-width : 1200px)
      height: auto
      flex-wrap: wrap
  .left-panel
    width: 470px
    @media only screen and (max-width : 1200px)
      width: 100%

  .game-side
    flex: 1 0 auto
    @media only screen and (max-width : 1200px)
      width: 100%

</style>
