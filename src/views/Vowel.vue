<template>
  <v-container style="max-width: 700px; margin: 10px auto">
    <h1 style="text-align: center">Vowels</h1>
    <h1 class="mt-4">Classification of vowels</h1>
    <v-divider></v-divider>
    <h2 class="mt-4" id="monophthongs">
      I. Monophthongs
      <sound-provider sound-src="vowels/1.mp3" v-slot="{ play }">
        <v-icon @click="play">mdi-volume-high</v-icon>
      </sound-provider>
      (Nguyên âm đơn) – 12 single vowels
    </h2>
    <p>
      <u>A pure vowel sound</u> which is pronounced
      <u>without changing the position of the organs</u> of speech throughout
      the duration of the vowel’s articulation.
    </p>
    <p>There are 12 single vowels:</p>
    <div>
      <v-simple-table>
        <template v-slot:default>
          <tbody>
            <tr>
              <td>
                <sound-provider sound-src="vowels/2.mp3" v-slot="{ play }">
                  <v-chip @click="play">/ɪ/</v-chip>
                </sound-provider>
                -
                <sound-provider sound-src="vowels/3.mp3" v-slot="{ play }">
                  <v-chip @click="play">sit</v-chip>
                </sound-provider>
              </td>
              <td>
                <sound-provider sound-src="vowels/14.mp3" v-slot="{ play }">
                  <v-chip @click="play">/ə/</v-chip>
                </sound-provider>
                -
                <sound-provider sound-src="vowels/15.mp3" v-slot="{ play }">
                  <v-chip @click="play">America</v-chip>
                </sound-provider>
              </td>
            </tr>
            <tr>
              <td>
                <sound-provider sound-src="vowels/4.mp3" v-slot="{ play }">
                  <v-chip @click="play">/e/</v-chip>
                </sound-provider>
                -
                <sound-provider sound-src="vowels/5.mp3" v-slot="{ play }">
                  <v-chip @click="play">men</v-chip>
                </sound-provider>
              </td>
              <td>
                <sound-provider sound-src="vowels/16.mp3" v-slot="{ play }">
                  <v-chip @click="play">/i:/</v-chip>
                </sound-provider>
                -
                <sound-provider sound-src="vowels/17.mp3" v-slot="{ play }">
                  <v-chip @click="play">read</v-chip>
                </sound-provider>
              </td>
            </tr>
            <tr>
              <td>
                <sound-provider sound-src="vowels/6.mp3" v-slot="{ play }">
                  <v-chip @click="play">/æ/</v-chip>
                </sound-provider>
                -
                <sound-provider sound-src="vowels/7.mp3" v-slot="{ play }">
                  <v-chip @click="play">cat</v-chip>
                </sound-provider>
              </td>
              <td>
                <sound-provider sound-src="vowels/18.mp3" v-slot="{ play }">
                  <v-chip @click="play">/ɑ:/</v-chip>
                </sound-provider>
                -
                <sound-provider sound-src="vowels/19.mp3" v-slot="{ play }">
                  <v-chip @click="play">part</v-chip>
                </sound-provider>
              </td>
            </tr>
            <tr>
              <td>
                <sound-provider sound-src="vowels/8.mp3" v-slot="{ play }">
                  <v-chip @click="play">/ʌ/</v-chip>
                </sound-provider>
                -
                <sound-provider sound-src="vowels/9.mp3" v-slot="{ play }">
                  <v-chip @click="play">but</v-chip>
                </sound-provider>
              </td>
              <td>
                <sound-provider sound-src="vowels/20.mp3" v-slot="{ play }">
                  <v-chip @click="play">/ɔ:/</v-chip>
                </sound-provider>
                -
                <sound-provider sound-src="vowels/21.mp3" v-slot="{ play }">
                  <v-chip @click="play">sort</v-chip>
                </sound-provider>
              </td>
            </tr>
            <tr>
              <td>
                <sound-provider sound-src="vowels/10.mp3" v-slot="{ play }">
                  <v-chip @click="play">/ʊ/</v-chip>
                </sound-provider>
                -
                <sound-provider sound-src="vowels/11.mp3" v-slot="{ play }">
                  <v-chip @click="play">book</v-chip>
                </sound-provider>
              </td>
              <td>
                <sound-provider sound-src="vowels/22.mp3" v-slot="{ play }">
                  <v-chip @click="play">/ɜ:/</v-chip>
                </sound-provider>
                -
                <sound-provider sound-src="vowels/23.mp3" v-slot="{ play }">
                  <v-chip @click="play">word</v-chip>
                </sound-provider>
              </td>
            </tr>
            <tr>
              <td>
                <sound-provider sound-src="vowels/12.mp3" v-slot="{ play }">
                  <v-chip @click="play">/ɒ/</v-chip>
                </sound-provider>
                -
                <sound-provider sound-src="vowels/13.mp3" v-slot="{ play }">
                  <v-chip @click="play">not</v-chip>
                </sound-provider>
              </td>
              <td>
                <sound-provider sound-src="vowels/24.mp3" v-slot="{ play }">
                  <v-chip @click="play">/u:/</v-chip>
                </sound-provider>
                -
                <sound-provider sound-src="vowels/25.mp3" v-slot="{ play }">
                  <v-chip @click="play">too</v-chip>
                </sound-provider>
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </div>
    <p class="mt-5">
      We can describe the characteristics of vowels using the vowel
      <u>quadrilateral</u> <strong>(26)</strong> as below.
    </p>
    <div>
      <h2 class="mt-4 mb-2" id="mono-height">1. The height of the tongue.</h2>
      <p>High vowels: tongue raised close to roof of mouth.</p>
      <p>Low vowels: tongue is low and jaw lowers.</p>
      <div class="grid-center mt-4 mb-4">
        <img
          style="width: 100%; max-width: 700px"
          :src="require('@/assets/images/vowels/thang-vowel.png')"
          alt=""
        />
      </div>
    </div>

    <div>
      <h2 class="mt-4 mb-2" id="mono-backness">
        2. The backness of the tongue
      </h2>
      <p>Front vowels: front of tongue raised toward hard palate.</p>
      <p>
        Central vowels: central of tongue raised toward the juncture of hard
        palate and soft palate.
      </p>
      <p>Back vowels: back of tongue raised toward soft palate.</p>
      <div class="grid-center mt-4 mb-4">
        <img
          style="width: 100%; max-width: 700px"
          :src="require('@/assets/images/vowels/thang-vowel.png')"
          alt=""
        />
      </div>
    </div>

    <div>
      <h2 class="mt-4 mb-2" id="mono-shape">3. The shape of the lips</h2>
      <p>
        Round vowels: corners of lips brought toward each other and lips pushed
        forward.
      </p>
      <p>Unround/spread vowels: corners of lips moving away from each other.</p>
      <p>Neutral vowels: lips not noticeably round or spread.</p>
      <div class="grid-center mt-4 mb-4">
        <img
          style="width: 100%; max-width: 700px"
          :src="require('@/assets/images/vowels/thang-vowel.png')"
          alt=""
        />
      </div>
    </div>

    <div>
      <h2 class="mt-4 mb-2" id="mono-length-degree">
        4. Vowels length and degree of muscular attention
      </h2>
      <p>
        Long vowels =
        <sound-provider sound-src="vowels/27.mp3" v-slot="{ play }">
          <v-chip @click="play"><u>tense</u></v-chip>
        </sound-provider>
        (27) vowels: longer and more muscular tension
      </p>
      <p>
        Short vowels =
        <sound-provider sound-src="vowels/28.mp3" v-slot="{ play }">
          <v-chip @click="play"><u>lax</u></v-chip>
        </sound-provider>
        (28) vowels:: shorter and more muscular relaxation.
      </p>
      <p>=> Describe a Vowels arcording to vowel quadrilateral.</p>
      <p>
        For example:
        <sound-provider sound-src="vowels/16.mp3" v-slot="{ play }">
          <v-chip @click="play">/i:/</v-chip>
        </sound-provider>
        in
        <sound-provider sound-src="vowels/17.mp3" v-slot="{ play }">
          <v-chip @click="play">read</v-chip> </sound-provider
        >: high, front, unround, long tense vowel.
      </p>
      <div class="grid-center mt-4 mb-4">
        <img
          style="width: 100%; max-width: 700px"
          :src="require('@/assets/images/vowels/thang-vowel-marked.png')"
          alt=""
        />
      </div>
    </div>

    <div>
      <h2 class="mt-4" id="diphthong">
        II. Diphthong
        <sound-provider sound-src="vowels/29.mp3" v-slot="{ play }">
          <v-icon @click="play">mdi-volume-high</v-icon>
        </sound-provider>
        (Nguyên âm đôi) – 8 dipthongs
      </h2>
      <p>
        Complex sound consisting of 2 vowels elements pronounced to form a
        single syllable.
      </p>
      <p>
        Organs of speech start in the position of 1 vowel and glide (move
        smoothly) gradually to the other one.
      </p>
      <div>
        <h4>Centering:</h4>
        <p class="ml-3">
          Ending in
          <sound-provider sound-src="vowels/14.mp3" v-slot="{ play }">
            <v-chip @click="play">/ə/</v-chip>:
          </sound-provider>
        </p>
        <p class="ml-6">
          <sound-provider sound-src="vowels/30.mp3" v-slot="{ play }">
            <v-chip @click="play">/ɪə/</v-chip>
          </sound-provider>
          -
          <sound-provider sound-src="vowels/31.mp3" v-slot="{ play }">
            <v-chip @click="play">here</v-chip>
          </sound-provider>
        </p>
        <p class="ml-6">
          <sound-provider sound-src="vowels/32.mp3" v-slot="{ play }">
            <v-chip @click="play">/ʊə/</v-chip>
          </sound-provider>
          -
          <sound-provider sound-src="vowels/33.mp3" v-slot="{ play }">
            <v-chip @click="play">tour</v-chip>
          </sound-provider>
        </p>
        <p class="ml-6">
          <sound-provider sound-src="vowels/34.mp3" v-slot="{ play }">
            <v-chip @click="play">/eə/</v-chip>
          </sound-provider>
          -
          <sound-provider sound-src="vowels/35.mp3" v-slot="{ play }">
            <v-chip @click="play">wear</v-chip>
          </sound-provider>
        </p>
      </div>
      <div>
        <h4>Closing:</h4>
        <div>
          <p class="ml-3">
            Ending in
            <sound-provider sound-src="vowels/2.mp3" v-slot="{ play }">
              <v-chip @click="play">/ɪ/</v-chip>:
            </sound-provider>
          </p>
          <p class="ml-6">
            <sound-provider sound-src="vowels/36.mp3" v-slot="{ play }">
              <v-chip @click="play">/eɪ/</v-chip>
            </sound-provider>
            -
            <sound-provider sound-src="vowels/37.mp3" v-slot="{ play }">
              <v-chip @click="play">day</v-chip>
            </sound-provider>
          </p>
          <p class="ml-6">
            <sound-provider sound-src="vowels/38.mp3" v-slot="{ play }">
              <v-chip @click="play">/ɔɪ/</v-chip>
            </sound-provider>
            -
            <sound-provider sound-src="vowels/39.mp3" v-slot="{ play }">
              <v-chip @click="play">boy</v-chip>
            </sound-provider>
          </p>
          <p class="ml-6">
            <sound-provider sound-src="vowels/40.mp3" v-slot="{ play }">
              <v-chip @click="play">/aɪ/</v-chip>
            </sound-provider>
            -
            <sound-provider sound-src="vowels/41.mp3" v-slot="{ play }">
              <v-chip @click="play">my</v-chip>
            </sound-provider>
          </p>
        </div>
        <div>
          <p class="ml-3">
            Ending in
            <sound-provider sound-src="vowels/10.mp3" v-slot="{ play }">
              <v-chip @click="play">/ʊ/</v-chip>:
            </sound-provider>
          </p>
          <p class="ml-6">
            <sound-provider sound-src="vowels/42.mp3" v-slot="{ play }">
              <v-chip @click="play">/aʊ/</v-chip>
            </sound-provider>
            -
            <sound-provider sound-src="vowels/43.mp3" v-slot="{ play }">
              <v-chip @click="play">how</v-chip>
            </sound-provider>
          </p>
          <p class="ml-6">
            <sound-provider sound-src="vowels/44.mp3" v-slot="{ play }">
              <v-chip @click="play">/oʊ/</v-chip>
            </sound-provider>
            -
            <sound-provider sound-src="vowels/45.mp3" v-slot="{ play }">
              <v-chip @click="play">go</v-chip>
            </sound-provider>
          </p>
        </div>
      </div>
    </div>

    <div>
      <h2 class="mt-4" id="triphthong">
        III. Triphthong
        <sound-provider sound-src="vowels/46.mp3" v-slot="{ play }">
          <v-icon @click="play">mdi-volume-high</v-icon>
        </sound-provider>
        (Nguyên âm ba) – 5 triphthongs
      </h2>
      <div class="mt-4">
        <p class="ml-3">
          <sound-provider sound-src="vowels/47.mp3" v-slot="{ play }">
            <v-chip @click="play">/eiə/</v-chip>
          </sound-provider>
          -
          <sound-provider sound-src="vowels/48.mp3" v-slot="{ play }">
            <v-chip @click="play">layer</v-chip>
          </sound-provider>
        </p>
        <p class="ml-3">
          <sound-provider sound-src="vowels/49.mp3" v-slot="{ play }">
            <v-chip @click="play">/aiə/</v-chip>
          </sound-provider>
          -
          <sound-provider sound-src="vowels/50.mp3" v-slot="{ play }">
            <v-chip @click="play">fire</v-chip>
          </sound-provider>
        </p>
        <p class="ml-3">
          <sound-provider sound-src="vowels/51.mp3" v-slot="{ play }">
            <v-chip @click="play">/ɔɪə/</v-chip>
          </sound-provider>
          -
          <sound-provider sound-src="vowels/52.mp3" v-slot="{ play }">
            <v-chip @click="play">soya</v-chip>
          </sound-provider>
        </p>
        <p class="ml-3">
          <sound-provider sound-src="vowels/53.mp3" v-slot="{ play }">
            <v-chip @click="play">/aʊə/</v-chip>
          </sound-provider>
          -
          <sound-provider sound-src="vowels/54.mp3" v-slot="{ play }">
            <v-chip @click="play">power</v-chip>
          </sound-provider>
        </p>
        <p class="ml-3">
          <sound-provider sound-src="vowels/55.mp3" v-slot="{ play }">
            <v-chip @click="play">/əʊə/</v-chip>
          </sound-provider>
          -
          <sound-provider sound-src="vowels/56.mp3" v-slot="{ play }">
            <v-chip @click="play">shower</v-chip>
          </sound-provider>
        </p>
      </div>
    </div>
  </v-container>
</template>

<script>
import SoundProvider from "@/components/common/SoundProvider.vue";
export default {
  components: { SoundProvider },
  name: "Vowels",
  page: {
    title: "Theory | Vowels",
    meta: [{ name: "description", content: "Theory vowels" }],
  },
  data: () => ({}),
};
</script>
