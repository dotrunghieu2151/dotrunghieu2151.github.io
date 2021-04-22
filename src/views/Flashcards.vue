<template>
  <v-container style="max-width: 700px; margin: 10px auto">
    <v-carousel
      v-model="carouselIndex"
      hide-delimiters
      :continuous="false"
      show-arrows-on-hover
    >
      <v-carousel-item
        v-for="(card, index) in flashcards"
        :key="`card${index}`"
      >
        <div class="wrapper">
          <div class="card">
            <input
              type="checkbox"
              :id="`card_${index}`"
              class="flip-state"
              aria-hidden="true"
            />
            <div class="content">
              <div class="front">
                <label
                  :for="`card_${index}`"
                  class="flip-trigger"
                  aria-hidden="true"
                >
                </label>
                <div class="inner">
                  <SoundProvider
                    :soundSrc="card.front.soundSrc"
                    v-slot="{ play }"
                  >
                    <img
                      class="sound-btn-img"
                      @click.stop="play"
                      :src="require(`@/assets/images/flashcards/audio-btn.png`)"
                      alt=""
                    />
                  </SoundProvider>
                  <img
                    class="sound-img"
                    :src="
                      require(`@/assets/images/flashcards/${card.front.img}`)
                    "
                    alt=""
                  />
                </div>
              </div>
              <div class="back">
                <label
                  :for="`card_${index}`"
                  class="flip-trigger"
                  aria-hidden="true"
                >
                </label>
                <div class="inner">
                  <p class="app-text-30 black--text">{{ card.back.text }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </v-carousel-item>
    </v-carousel>
  </v-container>
</template>

<script>
import SoundProvider from "../components/common/SoundProvider.vue";
export default {
  components: { SoundProvider },
  page: {
    title: "Flashcards",
    meta: [{ name: "description", content: "flashcards" }],
  },
  name: "Flashcards",
  data() {
    return {
      carouselIndex: 0,
      flashcards: [
        {
          front: {
            img: "1.png",
            soundSrc: "consonants/1.mp3",
          },
          back: {
            text: "/p/",
          },
        },
        {
          front: {
            img: "1.png",
            soundSrc: "consonants/2.mp3",
          },
          back: {
            text: "/b/",
          },
        },
      ],
    };
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/components/flashcards";
</style>