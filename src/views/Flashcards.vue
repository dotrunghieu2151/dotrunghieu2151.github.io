<template>
  <div>
    <v-tabs align-with-title dark background-color="#1867c0" v-model="tab">
      <v-tabs-slider color="white"></v-tabs-slider>
      <v-tab class="white--text" v-for="card in flashcards" :key="card.text">
        {{ card.text }}
      </v-tab>
    </v-tabs>
    <v-container style="max-width: 700px; margin: 10px auto">
      <v-carousel
        v-model="carouselIndex"
        hide-delimiters
        :continuous="false"
        show-arrows-on-hover
      >
        <v-carousel-item
          v-for="(card, index) in currentCarouselItems"
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
                      v-if="card.front.type === 'sound/img'"
                      :soundSrc="card.front.soundSrc"
                      v-slot="{ play }"
                    >
                      <img
                        class="sound-btn-img"
                        @click.stop="play"
                        :src="
                          require(`@/assets/images/flashcards/audio-btn.png`)
                        "
                        alt=""
                      />
                    </SoundProvider>
                    <img
                      v-if="card.front.type === 'sound/img'"
                      class="sound-img"
                      :src="
                        require(`@/assets/images/flashcards/${card.front.img}`)
                      "
                      alt=""
                    />
                    <p
                      class="app-text-30 black--text"
                      v-if="card.front.type === 'text'"
                    >
                      {{ card.front.text }}
                    </p>
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
                    <div>
                      <p class="app-text-30 black--text">
                        {{ card.back.text }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </v-carousel-item>
      </v-carousel>
    </v-container>
  </div>
</template>

<script>
import SoundProvider from "@/components/common/SoundProvider.vue";
import { shuffleArray, forLoop } from "@/utils/helpers";
export default {
  components: { SoundProvider },
  page: {
    title: "Flashcards",
    meta: [{ name: "description", content: "flashcards" }],
  },
  name: "Flashcards",
  data() {
    return {
      tab: 0,
      carouselIndex: 0,
      flashcards: [
        {
          text: "Consonants",
          cards: [
            {
              front: {
                type: "sound/img",
                img: "1.png",
                soundSrc: "consonants/1.mp3",
              },
              back: {
                type: "text",
                text: "/p/",
              },
            },
            {
              front: {
                type: "sound/img",
                img: "1.png",
                soundSrc: "consonants/2.mp3",
              },
              back: {
                type: "text",
                text: "/b/",
              },
            },
            {
              front: {
                type: "sound/img",
                img: "1.png",
                soundSrc: "consonants/3.mp3",
              },
              back: {
                type: "text",
                text: "/t/",
              },
            },
            {
              front: {
                type: "sound/img",
                img: "1.png",
                soundSrc: "consonants/4.mp3",
              },
              back: {
                type: "text",
                text: "/d/",
              },
            },
            {
              front: {
                type: "sound/img",
                img: "1.png",
                soundSrc: "consonants/5.mp3",
              },
              back: {
                type: "text",
                text: "/k/",
              },
            },
            {
              front: {
                type: "sound/img",
                img: "1.png",
                soundSrc: "consonants/6.mp3",
              },
              back: {
                type: "text",
                text: "/g/",
              },
            },
            {
              front: {
                type: "sound/img",
                img: "1.png",
                soundSrc: "consonants/7.mp3",
              },
              back: {
                type: "text",
                text: "/f/",
              },
            },
            {
              front: {
                type: "sound/img",
                img: "1.png",
                soundSrc: "consonants/8.mp3",
              },
              back: {
                type: "text",
                text: "/v/",
              },
            },
            {
              front: {
                type: "sound/img",
                img: "1.png",
                soundSrc: "consonants/11.mp3",
              },
              back: {
                type: "text",
                text: "/s/",
              },
            },
            {
              front: {
                type: "sound/img",
                img: "1.png",
                soundSrc: "consonants/12.mp3",
              },
              back: {
                type: "text",
                text: "/z/",
              },
            },
            {
              front: {
                type: "sound/img",
                img: "1.png",
                soundSrc: "consonants/9.mp3",
              },
              back: {
                type: "text",
                text: "/θ/",
              },
            },
            {
              front: {
                type: "sound/img",
                img: "1.png",
                soundSrc: "consonants/10.mp3",
              },
              back: {
                type: "text",
                text: "/ð/",
              },
            },
            {
              front: {
                type: "sound/img",
                img: "1.png",
                soundSrc: "consonants/13.mp3",
              },
              back: {
                type: "text",
                text: "/ʃ/",
              },
            },
            {
              front: {
                type: "sound/img",
                img: "1.png",
                soundSrc: "consonants/14.mp3",
              },
              back: {
                type: "text",
                text: "/ʒ/",
              },
            },
            {
              front: {
                type: "sound/img",
                img: "1.png",
                soundSrc: "consonants/16.mp3",
              },
              back: {
                type: "text",
                text: "/ʈʃ/",
              },
            },
            {
              front: {
                type: "sound/img",
                img: "1.png",
                soundSrc: "consonants/17.mp3",
              },
              back: {
                type: "text",
                text: "/dʒ/",
              },
            },
            {
              front: {
                type: "sound/img",
                img: "1.png",
                soundSrc: "consonants/15.mp3",
              },
              back: {
                type: "text",
                text: "/h/",
              },
            },
            {
              front: {
                type: "sound/img",
                img: "1.png",
                soundSrc: "consonants/22.mp3",
              },
              back: {
                type: "text",
                text: "/w/",
              },
            },
            {
              front: {
                type: "sound/img",
                img: "1.png",
                soundSrc: "consonants/19.mp3",
              },
              back: {
                type: "text",
                text: "/n/",
              },
            },
            {
              front: {
                type: "sound/img",
                img: "1.png",
                soundSrc: "consonants/18.mp3",
              },
              back: {
                type: "text",
                text: "/m/",
              },
            },
            {
              front: {
                type: "sound/img",
                img: "1.png",
                soundSrc: "consonants/24.mp3",
              },
              back: {
                type: "text",
                text: "/r/",
              },
            },
            {
              front: {
                type: "sound/img",
                img: "1.png",
                soundSrc: "consonants/23.mp3",
              },
              back: {
                type: "text",
                text: "/j/",
              },
            },
            {
              front: {
                type: "sound/img",
                img: "1.png",
                soundSrc: "consonants/20.mp3",
              },
              back: {
                type: "text",
                text: "/ŋ/",
              },
            },
            {
              front: {
                type: "sound/img",
                img: "1.png",
                soundSrc: "consonants/21.mp3",
              },
              back: {
                type: "text",
                text: "/l/",
              },
            },
            {
              front: {
                type: "text",
                text: "Bilabial",
              },
              back: {
                type: "text",
                text: "Phụ âm môi: 2 lips come together /p/, /b/, /m/, /w/",
              },
            },
            {
              front: {
                type: "text",
                text: "Labiodental",
              },
              back: {
                type: "text",
                text:
                  "Phụ âm môi răng: with lower lips and upper front teeth /f/, /v/",
              },
            },
            {
              front: {
                type: "text",
                text: "Dental",
              },
              back: {
                type: "text",
                text:
                  "Phụ âm răng: tongue tip/blade and upper front teeth /θ/, /ð/",
              },
            },
            {
              front: {
                type: "text",
                text: "Alveolar",
              },
              back: {
                type: "text",
                text:
                  "Phụ âm chân răng: tongue tip/blade with alveolar ridge /t/, /d/, /l/, /n/, /s/, /z/",
              },
            },
            {
              front: {
                type: "text",
                text: "Palato – alveolar",
              },
              back: {
                type: "text",
                text:
                  "Phụ âm vòm – chân răng: tongue blade and the back of the alveolar ridge /ʃ/, /ʒ/, /ʈʃ/, /dʒ/",
              },
            },
            {
              front: {
                type: "text",
                text: "Palatal",
              },
              back: {
                type: "text",
                text: "Phụ âm vòm front: of tongue and hard palate /j/",
              },
            },
            {
              front: {
                type: "text",
                text: "Velar",
              },
              back: {
                type: "text",
                text:
                  "Phụ âm vòm mềm: back of the tongue and soft palate /k/, /g/, /ŋ/",
              },
            },
            {
              front: {
                type: "text",
                text: "Glottal",
              },
              back: {
                type: "text",
                text: "Phụ âm cổ họng (Glottis):  /h/",
              },
            },
            {
              front: {
                type: "text",
                text: "Retroflexes",
              },
              back: {
                type: "text",
                text:
                  "Phụ âm đầu lưỡi – vòm cứng: the tip of the tongue and the back of the alveolar rigde /r/",
              },
            },
            {
              front: {
                type: "text",
                text: "Plosive",
              },
              back: {
                type: "text",
                text:
                  "âm tắt/nổ: the airstream cannot escape through the mouth /p/, /b/, /t/, /d/, /k/, /g/",
              },
            },
            {
              front: {
                type: "text",
                text: "Fricative",
              },
              back: {
                type: "text",
                text:
                  "âm xát: the airstream passes through them with friction /f/, /v/, /θ/, /ð/, /s/, /z/, /ʃ/, /ʒ/, /h/",
              },
            },
            {
              front: {
                type: "text",
                text: "Affricate",
              },
              back: {
                type: "text",
                text:
                  "âm tắt – xát: A complete closure at some point in the mouth the air pressure builds up the separation of the organs is slow so there is friction /ʈʃ/, /dʒ/",
              },
            },
            {
              front: {
                type: "text",
                text: "Nasal",
              },
              back: {
                type: "text",
                text:
                  "âm mũi: the soft palate being lowered the air escapes through the nose /m/, /n/, /ŋ/",
              },
            },
            {
              front: {
                type: "text",
                text: "Fortis",
              },
              back: {
                type: "text",
                text: "Strong force, often voiceless",
              },
            },
            {
              front: {
                type: "text",
                text: "Lenis",
              },
              back: {
                type: "text",
                text: "Week energy, often voiced",
              },
            },
          ],
        },
        // vowels
        {
          text: "Vowels",
          cards: [
            {
              front: {
                type: "text",
                text: "Monophthong",
              },
              back: {
                type: "text",
                text: "Nguyên âm đơn: 12 single vowels",
              },
            },
            {
              front: {
                type: "text",
                text: "Diphthong",
              },
              back: {
                type: "text",
                text: "Nguyên âm đôi: 8 diphthongs",
              },
            },
            {
              front: {
                type: "text",
                text: "Triphthong",
              },
              back: {
                type: "text",
                text: "Nguyên âm ba: 5 triphthongs",
              },
            },
            {
              front: {
                type: "text",
                text: "Tense vowels",
              },
              back: {
                type: "text",
                text: "Long vowels",
              },
            },
            {
              front: {
                type: "text",
                text: "Lax vowels",
              },
              back: {
                type: "text",
                text: "Short vowels",
              },
            },
            {
              front: {
                type: "text",
                text: "Articulatory Characteristics /i:/ 'he'",
              },
              back: {
                type: "text",
                text: "High, front, unround, long tense",
              },
            },
            {
              front: {
                type: "text",
                text: "Articulatory Characteristics /æ/ 'last'",
              },
              back: {
                type: "text",
                text: "Low, front, unround, short lax",
              },
            },
            {
              front: {
                type: "text",
                text: "Articulatory Characteristics /u:/ 'you'",
              },
              back: {
                type: "text",
                text: "High, back, round, long tense",
              },
            },
            {
              front: {
                type: "text",
                text: "Articulatory Characteristics /ʊ/ 'look'",
              },
              back: {
                type: "text",
                text: "High, central, neutral, short lax",
              },
            },
            {
              front: {
                type: "text",
                text: "Articulatory Characteristics /ɔ:/ 'tall'",
              },
              back: {
                type: "text",
                text: "Mid, back, round, long tense",
              },
            },
          ],
        },
      ],
    };
  },
  computed: {
    shuffledCards() {
      const newArr = [...this.flashcards];
      forLoop(newArr, (cardCollection) => {
        shuffleArray(cardCollection.cards);
      });
      return newArr;
    },
    currentCarouselItems() {
      return this.shuffledCards[this.tab].cards;
    },
  },
  watch: {
    currentCarouselItems() {
      this.carouselIndex = 0;
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/components/flashcards";
</style>