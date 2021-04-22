<template>
  <v-container style="max-width: 700px; margin: 10px auto">
    <h1>Consonants</h1>
    <v-divider></v-divider>
    <p>
      A consonant is <strong>a basic sound</strong>. English has
      <strong>24</strong> consonant sounds. Some consonants have voices from the
      voice box and some don’t. These consonants are <strong>voiced</strong> and
      <strong>voiceless</strong> pairs:
    </p>
    <div>
      <v-chip-group column>
        <v-chip> /p/ - /b/ </v-chip>
        <v-chip> /t/ - /d/ </v-chip>
        <v-chip> /k/ - /g/ </v-chip>
        <v-chip> /f/ - /v/ </v-chip>
        <v-chip> /s/ - /z/ </v-chip>
        <v-chip> /θ/ - /ð/ </v-chip>
        <v-chip> /ʃ/ - /ʒ/ </v-chip>
        <v-chip> /ʈʃ/ - /dʒ/ - /h/ </v-chip>
        <v-chip> /w/ </v-chip>
        <v-chip> /n/ </v-chip>
        <v-chip> /m/ </v-chip>
        <v-chip> /r/ </v-chip>
        <v-chip> /j/ </v-chip>
        <v-chip> /ŋ/ </v-chip>
        <v-chip> /l/ </v-chip>
      </v-chip-group>
    </div>
    <div class="grid-center mt-4 mb-4">
      <img
        style="width: 100%; max-width: 700px"
        :src="require('@/assets/images/table-articulation.png')"
        alt=""
      />
    </div>
    <p>
      During formation, the airstream that flows through the vocal tract is
      hindered somehow.
    </p>
    <div>
      <!-- Place of aritculation -->
      <h1 id="place-of-articulation">1. Place of articulation</h1>
      <v-divider></v-divider>
      <p class="mt-4">
        Where the sounds are produced in the vocal tract (with articulation
        contacts with which articulator).
      </p>
      <!-- Bilabial -->
      <div class="mb-5">
        <h1 id="bilabial">Bilabial</h1>
        <v-divider></v-divider>
        <p class="mt-4">made with 2 lips coming together.</p>
        <div>
          <v-chip-group column>
            <sound-provider sound-src="consonants/1.mp3" v-slot="{ play }">
              <v-chip @click="play"> /p/ </v-chip>
            </sound-provider>
            <sound-provider sound-src="consonants/2.mp3" v-slot="{ play }">
              <v-chip @click="play"> /b/ </v-chip>
            </sound-provider>
            <sound-provider sound-src="consonants/18.mp3" v-slot="{ play }">
              <v-chip @click="play"> /m/ </v-chip>
            </sound-provider>
            <sound-provider sound-src="consonants/22.mp3" v-slot="{ play }">
              <v-chip @click="play"> /w/ </v-chip>
            </sound-provider>
          </v-chip-group>
        </div>
        Example:
        <v-chip-group column>
          <sound-provider
            sound-src="consonant-examples/5.mp3"
            v-slot="{ play }"
          >
            <v-chip @click="play"> point </v-chip>
          </sound-provider>
          <sound-provider
            sound-src="consonant-examples/6.mp3"
            v-slot="{ play }"
          >
            <v-chip @click="play"> bird </v-chip>
          </sound-provider>
          <sound-provider
            sound-src="consonant-examples/7.mp3"
            v-slot="{ play }"
          >
            <v-chip @click="play"> match </v-chip>
          </sound-provider>
          <sound-provider
            sound-src="consonant-examples/8.mp3"
            v-slot="{ play }"
          >
            <v-chip @click="play"> watch </v-chip>
          </sound-provider>
        </v-chip-group>
      </div>
      <!-- Labiodental -->
      <div class="mb-5">
        <h1 id="labiodental">Labiodental</h1>
        <v-divider></v-divider>
        <p class="mt-4">made with lower lips and upper front teeth.</p>
        <div>
          <v-chip-group column>
            <sound-provider sound-src="consonants/7.mp3" v-slot="{ play }">
              <v-chip @click="play"> /f/ </v-chip>
            </sound-provider>
            <sound-provider sound-src="consonants/8.mp3" v-slot="{ play }">
              <v-chip @click="play"> /v/ </v-chip>
            </sound-provider>
          </v-chip-group>
        </div>
        Example:
        <v-chip-group column>
          <sound-provider
            sound-src="consonant-examples/11.mp3"
            v-slot="{ play }"
          >
            <v-chip @click="play"> face </v-chip>
          </sound-provider>
          <sound-provider
            sound-src="consonant-examples/12.mp3"
            v-slot="{ play }"
          >
            <v-chip @click="play"> view </v-chip>
          </sound-provider>
        </v-chip-group>
      </div>
      <!-- Dental -->
      <div class="mb-5">
        <h1 id="dental">Dental</h1>
        <v-divider></v-divider>
        <p class="mt-4">made with tongue tip or blade and upper front teeth.</p>
        <div>
          <v-chip-group column>
            <sound-provider sound-src="consonants/9.mp3" v-slot="{ play }">
              <v-chip @click="play"> /θ/ </v-chip>
            </sound-provider>
            <sound-provider sound-src="consonants/10.mp3" v-slot="{ play }">
              <v-chip @click="play"> /ð/ </v-chip>
            </sound-provider>
          </v-chip-group>
        </div>
        Example:
        <v-chip-group column>
          <sound-provider
            sound-src="consonant-examples/15.mp3"
            v-slot="{ play }"
          >
            <v-chip @click="play"> thank </v-chip>
          </sound-provider>
          <sound-provider
            sound-src="consonant-examples/16.mp3"
            v-slot="{ play }"
          >
            <v-chip @click="play"> that </v-chip>
          </sound-provider>
        </v-chip-group>
      </div>
      <!-- Alveolar -->
      <div class="mb-5">
        <h1 id="alveolar">Alveolar</h1>
        <v-divider></v-divider>
        <p class="mt-4">made with tongue tip or blade with alveolar ridge.</p>
        <div>
          <v-chip-group column>
            <sound-provider sound-src="consonants/3.mp3" v-slot="{ play }">
              <v-chip @click="play"> /t/ </v-chip>
            </sound-provider>
            <sound-provider sound-src="consonants/4.mp3" v-slot="{ play }">
              <v-chip @click="play"> /d/ </v-chip>
            </sound-provider>
            <sound-provider sound-src="consonants/21.mp3" v-slot="{ play }">
              <v-chip @click="play"> /l/ </v-chip>
            </sound-provider>
            <sound-provider sound-src="consonants/19.mp3" v-slot="{ play }">
              <v-chip @click="play"> /n/ </v-chip>
            </sound-provider>
            <sound-provider sound-src="consonants/11.mp3" v-slot="{ play }">
              <v-chip @click="play"> /s/ </v-chip>
            </sound-provider>
            <sound-provider sound-src="consonants/12.mp3" v-slot="{ play }">
              <v-chip @click="play"> /z/ </v-chip>
            </sound-provider>
          </v-chip-group>
        </div>
        Example:
        <v-chip-group column>
          <sound-provider
            sound-src="consonant-examples/23.mp3"
            v-slot="{ play }"
          >
            <v-chip @click="play"> take </v-chip>
          </sound-provider>
          <sound-provider
            sound-src="consonant-examples/24.mp3"
            v-slot="{ play }"
          >
            <v-chip @click="play"> dance </v-chip>
          </sound-provider>
          <sound-provider
            sound-src="consonant-examples/25.mp3"
            v-slot="{ play }"
          >
            <v-chip @click="play"> let </v-chip>
          </sound-provider>
          <sound-provider
            sound-src="consonant-examples/26.mp3"
            v-slot="{ play }"
          >
            <v-chip @click="play"> name </v-chip>
          </sound-provider>
          <sound-provider
            sound-src="consonant-examples/27.mp3"
            v-slot="{ play }"
          >
            <v-chip @click="play"> such </v-chip>
          </sound-provider>
          <sound-provider
            sound-src="consonant-examples/28.mp3"
            v-slot="{ play }"
          >
            <v-chip @click="play"> zoo </v-chip>
          </sound-provider>
        </v-chip-group>
      </div>
      <!-- Palato – alveolar -->
      <div class="mb-5">
        <h1 id="palato–alveolar">Palato – alveolar</h1>
        <v-divider></v-divider>
        <p class="mt-4">
          made with tongue blade and the back of the alveolar ridge.
        </p>
        <div>
          <v-chip-group column>
            <sound-provider sound-src="consonants/13.mp3" v-slot="{ play }">
              <v-chip @click="play"> /ʃ/ </v-chip>
            </sound-provider>
            <sound-provider sound-src="consonants/14.mp3" v-slot="{ play }">
              <v-chip @click="play"> /ʒ/ </v-chip>
            </sound-provider>
            <sound-provider sound-src="consonants/16.mp3" v-slot="{ play }">
              <v-chip @click="play"> /ʈʃ/ </v-chip>
            </sound-provider>
            <sound-provider sound-src="consonants/17.mp3" v-slot="{ play }">
              <v-chip @click="play"> /dʒ/ </v-chip>
            </sound-provider>
          </v-chip-group>
        </div>
        Example:
        <v-chip-group column>
          <sound-provider
            sound-src="consonant-examples/33.mp3"
            v-slot="{ play }"
          >
            <v-chip @click="play"> she </v-chip>
          </sound-provider>
          <sound-provider
            sound-src="consonant-examples/34.mp3"
            v-slot="{ play }"
          >
            <v-chip @click="play"> measure </v-chip>
          </sound-provider>
          <sound-provider
            sound-src="consonant-examples/35.mp3"
            v-slot="{ play }"
          >
            <v-chip @click="play"> chair </v-chip>
          </sound-provider>
          <sound-provider
            sound-src="consonant-examples/36.mp3"
            v-slot="{ play }"
          >
            <v-chip @click="play"> job </v-chip>
          </sound-provider>
        </v-chip-group>
      </div>
      <!-- Palato -->
      <div class="mb-5">
        <h1 id="palato">Palato</h1>
        <v-divider></v-divider>
        <p class="mt-4">made with front of tongue and hard palate.</p>
        <div>
          <v-chip-group column>
            <sound-provider sound-src="consonants/23.mp3" v-slot="{ play }">
              <v-chip @click="play"> /j/ </v-chip>
            </sound-provider>
          </v-chip-group>
        </div>
        Example:
        <v-chip-group column>
          <sound-provider
            sound-src="consonant-examples/38.mp3"
            v-slot="{ play }"
          >
            <v-chip @click="play"> yes </v-chip>
          </sound-provider>
        </v-chip-group>
      </div>
      <!-- Velar -->
      <div class="mb-5">
        <h1 id="velar">Velar</h1>
        <v-divider></v-divider>
        <p class="mt-4">made with back of the tongue and soft palate.</p>
        <div>
          <v-chip-group column>
            <sound-provider sound-src="consonants/5.mp3" v-slot="{ play }">
              <v-chip @click="play"> /k/ </v-chip>
            </sound-provider>
            <sound-provider sound-src="consonants/6.mp3" v-slot="{ play }">
              <v-chip @click="play"> /g/ </v-chip>
            </sound-provider>
            <sound-provider sound-src="consonants/20.mp3" v-slot="{ play }">
              <v-chip @click="play"> /ŋ/ </v-chip>
            </sound-provider>
          </v-chip-group>
        </div>
        Example:
        <v-chip-group column>
          <sound-provider
            sound-src="consonant-examples/42.mp3"
            v-slot="{ play }"
          >
            <v-chip @click="play"> cat </v-chip>
          </sound-provider>
          <sound-provider
            sound-src="consonant-examples/43.mp3"
            v-slot="{ play }"
          >
            <v-chip @click="play"> goal </v-chip>
          </sound-provider>
          <sound-provider
            sound-src="consonant-examples/44.mp3"
            v-slot="{ play }"
          >
            <v-chip @click="play"> hungry </v-chip>
          </sound-provider>
        </v-chip-group>
      </div>
      <!-- Glottal -->
      <div class="mb-5">
        <h1 id="glottal">Glottal</h1>
        <v-divider></v-divider>
        <p class="mt-4">made with the glottis.</p>
        <div>
          <v-chip-group column>
            <sound-provider sound-src="consonants/15.mp3" v-slot="{ play }">
              <v-chip @click="play"> /h/ </v-chip>
            </sound-provider>
          </v-chip-group>
        </div>
        Example:
        <v-chip-group column>
          <sound-provider
            sound-src="consonant-examples/46.mp3"
            v-slot="{ play }"
          >
            <v-chip @click="play"> home </v-chip>
          </sound-provider>
        </v-chip-group>
      </div>
      <!-- Retroflexes -->
      <div class="mb-5">
        <h1 id="retroflexes">Retroflexes</h1>
        <v-divider></v-divider>
        <p class="mt-4">
          made with the tip of the tongue and the back of the alveolar ridge.
        </p>
        <div>
          <v-chip-group column>
            <sound-provider sound-src="consonants/24.mp3" v-slot="{ play }">
              <v-chip @click="play"> /r/ </v-chip>
            </sound-provider>
          </v-chip-group>
        </div>
        Example:
        <v-chip-group column>
          <sound-provider
            sound-src="consonant-examples/48.mp3"
            v-slot="{ play }"
          >
            <v-chip @click="play"> raise </v-chip>
          </sound-provider>
        </v-chip-group>
      </div>
    </div>

    <div>
      <!-- Manner of aritculation -->
      <h1 id="manner-of-articulation">2. Manner of Articulation</h1>
      <v-divider></v-divider>
      <p class="mt-4">How airflow is converted in the vocal tract.</p>
      <!-- Bilabial -->
      <div class="mb-5">
        <h1 id="plosive">Plosive</h1>
        <v-divider></v-divider>
        <p class="mt-4">
          A complete closure of the articulators involved so that the airstream
          cannot escape through the mouth.
        </p>
        <div>
          <v-chip-group column>
            <sound-provider sound-src="consonants/1.mp3" v-slot="{ play }">
              <v-chip @click="play"> /p/ </v-chip>
            </sound-provider>
            <sound-provider sound-src="consonants/2.mp3" v-slot="{ play }">
              <v-chip @click="play"> /b/ </v-chip>
            </sound-provider>
            <sound-provider sound-src="consonants/3.mp3" v-slot="{ play }">
              <v-chip @click="play"> /t/ </v-chip>
            </sound-provider>
            <sound-provider sound-src="consonants/4.mp3" v-slot="{ play }">
              <v-chip @click="play"> /d/ </v-chip>
            </sound-provider>
            <sound-provider sound-src="consonants/5.mp3" v-slot="{ play }">
              <v-chip @click="play"> /k/ </v-chip>
            </sound-provider>
            <sound-provider sound-src="consonants/6.mp3" v-slot="{ play }">
              <v-chip @click="play"> /g/ </v-chip>
            </sound-provider>
          </v-chip-group>
        </div>
        Example:
        <v-chip-group column>
          <sound-provider
            sound-src="consonant-examples/5.mp3"
            v-slot="{ play }"
          >
            <v-chip @click="play"> point </v-chip>
          </sound-provider>
          <sound-provider
            sound-src="consonant-examples/6.mp3"
            v-slot="{ play }"
          >
            <v-chip @click="play"> bird </v-chip>
          </sound-provider>
          <sound-provider
            sound-src="consonant-examples/23.mp3"
            v-slot="{ play }"
          >
            <v-chip @click="play"> take </v-chip>
          </sound-provider>
          <sound-provider
            sound-src="consonant-examples/24.mp3"
            v-slot="{ play }"
          >
            <v-chip @click="play"> dance </v-chip>
          </sound-provider>
          <sound-provider
            sound-src="consonant-examples/42.mp3"
            v-slot="{ play }"
          >
            <v-chip @click="play"> cat </v-chip>
          </sound-provider>
          <sound-provider
            sound-src="consonant-examples/43.mp3"
            v-slot="{ play }"
          >
            <v-chip @click="play"> goal </v-chip>
          </sound-provider>
        </v-chip-group>
      </div>
      <!-- Fricative -->
      <div class="mb-5">
        <h1 id="fricative">Fricative</h1>
        <v-divider></v-divider>
        <p class="mt-4">
          2 organs approximate to such an extent that the airstream passes
          through them with friction.
        </p>
        <div>
          <v-chip-group column>
            <sound-provider sound-src="consonants/7.mp3" v-slot="{ play }">
              <v-chip @click="play"> /f/ </v-chip>
            </sound-provider>
            <sound-provider sound-src="consonants/8.mp3" v-slot="{ play }">
              <v-chip @click="play"> /v/ </v-chip>
            </sound-provider>
            <sound-provider sound-src="consonants/9.mp3" v-slot="{ play }">
              <v-chip @click="play"> /θ/ </v-chip>
            </sound-provider>
            <sound-provider sound-src="consonants/10.mp3" v-slot="{ play }">
              <v-chip @click="play"> /ð/ </v-chip>
            </sound-provider>
            <sound-provider sound-src="consonants/11.mp3" v-slot="{ play }">
              <v-chip @click="play"> /s/ </v-chip>
            </sound-provider>
            <sound-provider sound-src="consonants/12.mp3" v-slot="{ play }">
              <v-chip @click="play"> /z/ </v-chip>
            </sound-provider>
            <sound-provider sound-src="consonants/13.mp3" v-slot="{ play }">
              <v-chip @click="play"> /ʃ/ </v-chip>
            </sound-provider>
            <sound-provider sound-src="consonants/14.mp3" v-slot="{ play }">
              <v-chip @click="play"> /ʒ/ </v-chip>
            </sound-provider>
            <sound-provider sound-src="consonants/15.mp3" v-slot="{ play }">
              <v-chip @click="play"> /h/ </v-chip>
            </sound-provider>
          </v-chip-group>
        </div>
        Example:
        <v-chip-group column>
          <sound-provider
            sound-src="consonant-examples/11.mp3"
            v-slot="{ play }"
          >
            <v-chip @click="play"> face </v-chip>
          </sound-provider>
          <sound-provider
            sound-src="consonant-examples/12.mp3"
            v-slot="{ play }"
          >
            <v-chip @click="play"> view </v-chip>
          </sound-provider>
          <sound-provider
            sound-src="consonant-examples/15.mp3"
            v-slot="{ play }"
          >
            <v-chip @click="play"> thank </v-chip>
          </sound-provider>
          <sound-provider
            sound-src="consonant-examples/16.mp3"
            v-slot="{ play }"
          >
            <v-chip @click="play"> that </v-chip>
          </sound-provider>
          <sound-provider
            sound-src="consonant-examples/27.mp3"
            v-slot="{ play }"
          >
            <v-chip @click="play"> such </v-chip>
          </sound-provider>
          <sound-provider
            sound-src="consonant-examples/28.mp3"
            v-slot="{ play }"
          >
            <v-chip @click="play"> zoo </v-chip>
          </sound-provider>
          <sound-provider
            sound-src="consonant-examples/33.mp3"
            v-slot="{ play }"
          >
            <v-chip @click="play"> she </v-chip>
          </sound-provider>
          <sound-provider
            sound-src="consonant-examples/34.mp3"
            v-slot="{ play }"
          >
            <v-chip @click="play"> measure </v-chip>
          </sound-provider>
          <sound-provider
            sound-src="consonant-examples/46.mp3"
            v-slot="{ play }"
          >
            <v-chip @click="play"> home </v-chip>
          </sound-provider>
        </v-chip-group>
      </div>
      <!-- Afficate -->
      <div class="mb-5">
        <h1 id="afficate">Afficate</h1>
        <v-divider></v-divider>
        <p class="mt-4">
          A complete closure at some point in the mouth, behind which the air
          pressure builds up; the separation of the organs is slow compared with
          that of a plosive, so that friction is a characteristic second element
          of the sound.
        </p>
        <div>
          <v-chip-group column>
            <sound-provider sound-src="consonants/16.mp3" v-slot="{ play }">
              <v-chip @click="play"> /ʈʃ/ </v-chip>
            </sound-provider>
            <sound-provider sound-src="consonants/17.mp3" v-slot="{ play }">
              <v-chip @click="play"> /dʒ/ </v-chip>
            </sound-provider>
          </v-chip-group>
        </div>
        Example:
        <v-chip-group column>
          <sound-provider
            sound-src="consonant-examples/35.mp3"
            v-slot="{ play }"
          >
            <v-chip @click="play"> chair </v-chip>
          </sound-provider>
          <sound-provider
            sound-src="consonant-examples/36.mp3"
            v-slot="{ play }"
          >
            <v-chip @click="play"> job </v-chip>
          </sound-provider>
        </v-chip-group>
      </div>
      <!-- Nasal -->
      <div class="mb-5">
        <h1 id="nasal">Nasal</h1>
        <v-divider></v-divider>
        <p class="mt-4">
          A complete closure at some point in the mouth but the soft palate
          being lowered, the air escapes through the nose, so no choice
          component.
        </p>
        <div>
          <v-chip-group column>
            <sound-provider sound-src="consonants/18.mp3" v-slot="{ play }">
              <v-chip @click="play"> /m/ </v-chip>
            </sound-provider>
            <sound-provider sound-src="consonants/19.mp3" v-slot="{ play }">
              <v-chip @click="play"> /n/ </v-chip>
            </sound-provider>
            <sound-provider sound-src="consonants/20.mp3" v-slot="{ play }">
              <v-chip @click="play"> /ŋ/ </v-chip>
            </sound-provider>
          </v-chip-group>
        </div>
        Example:
        <v-chip-group column>
          <sound-provider
            sound-src="consonant-examples/7.mp3"
            v-slot="{ play }"
          >
            <v-chip @click="play"> match </v-chip>
          </sound-provider>
          <sound-provider
            sound-src="consonant-examples/26.mp3"
            v-slot="{ play }"
          >
            <v-chip @click="play"> name </v-chip>
          </sound-provider>
          <sound-provider
            sound-src="consonant-examples/44.mp3"
            v-slot="{ play }"
          >
            <v-chip @click="play"> hungry </v-chip>
          </sound-provider>
        </v-chip-group>
      </div>
      <!-- Lateral -->
      <div class="mb-5">
        <h1 id="lateral">Lateral</h1>
        <v-divider></v-divider>
        <p class="mt-4">
          A partial closure is made at some point in the mouth, the airstream
          being allowed to escape on 1 or both sides.
        </p>
        <div>
          <v-chip-group column>
            <sound-provider sound-src="consonants/21.mp3" v-slot="{ play }">
              <v-chip @click="play"> /l/ </v-chip>
            </sound-provider>
          </v-chip-group>
        </div>
        Example:
        <v-chip-group column>
          <sound-provider
            sound-src="consonant-examples/25.mp3"
            v-slot="{ play }"
          >
            <v-chip @click="play"> let </v-chip>
          </sound-provider>
        </v-chip-group>
      </div>
      <!-- Approximants -->
      <div class="mb-5">
        <h1 id="approximants">Approximants (semi-vowels)</h1>
        <v-divider></v-divider>
        <p class="mt-4">
          The approach of 1 articular toward another but without the tract being
          narrowed to such an extend that a turbulent airstream is produced.
        </p>
        <div>
          <v-chip-group column>
            <sound-provider sound-src="consonants/22.mp3" v-slot="{ play }">
              <v-chip @click="play"> /w/ </v-chip>
            </sound-provider>
            <sound-provider sound-src="consonants/23.mp3" v-slot="{ play }">
              <v-chip @click="play"> /j/ </v-chip>
            </sound-provider>
            <sound-provider sound-src="consonants/24.mp3" v-slot="{ play }">
              <v-chip @click="play"> /r/ </v-chip>
            </sound-provider>
          </v-chip-group>
        </div>
        Example:
        <v-chip-group column>
          <sound-provider
            sound-src="consonant-examples/8.mp3"
            v-slot="{ play }"
          >
            <v-chip @click="play"> watch </v-chip>
          </sound-provider>
          <sound-provider
            sound-src="consonant-examples/38.mp3"
            v-slot="{ play }"
          >
            <v-chip @click="play"> yes </v-chip>
          </sound-provider>
          <sound-provider
            sound-src="consonant-examples/48.mp3"
            v-slot="{ play }"
          >
            <v-chip @click="play"> raise </v-chip>
          </sound-provider>
        </v-chip-group>
      </div>
    </div>
    <div>
      <!-- State -->
      <h1 id="state-of-vocal-cords">
        3. The state of vocal cords / The presence / Absence of voice
      </h1>
      <v-divider></v-divider>
      <p class="mt-4"><strong>- Voiced</strong></p>
      Example:
      <sound-provider sound-src="consonants/2.mp3" v-slot="{ play }">
        <v-chip @click="play"> /b/ </v-chip>
      </sound-provider>
      -
      <sound-provider sound-src="consonant-examples/6.mp3" v-slot="{ play }">
        <v-chip @click="play"> bird </v-chip>
      </sound-provider>
      ,
      <sound-provider sound-src="consonants/4.mp3" v-slot="{ play }">
        <v-chip @click="play"> /d/ </v-chip>
      </sound-provider>
      -
      <sound-provider sound-src="consonant-examples/24.mp3" v-slot="{ play }">
        <v-chip @click="play"> dance </v-chip>
      </sound-provider>
      ,
      <sound-provider sound-src="consonants/21.mp3" v-slot="{ play }">
        <v-chip @click="play"> /l/ </v-chip>
      </sound-provider>
      -
      <sound-provider sound-src="consonant-examples/25.mp3" v-slot="{ play }">
        <v-chip @click="play"> let </v-chip>
      </sound-provider>
      ...
      <p class="mt-4"><strong>- Voiceless</strong></p>
      Example:
      <sound-provider sound-src="consonants/7.mp3" v-slot="{ play }">
        <v-chip @click="play"> /f/ </v-chip>
      </sound-provider>
      -
      <sound-provider sound-src="consonant-examples/11.mp3" v-slot="{ play }">
        <v-chip @click="play"> face </v-chip>
      </sound-provider>
      ,
      <sound-provider sound-src="consonants/15.mp3" v-slot="{ play }">
        <v-chip @click="play"> /h/ </v-chip>
      </sound-provider>
      -
      <sound-provider sound-src="consonant-examples/46.mp3" v-slot="{ play }">
        <v-chip @click="play"> home </v-chip>
      </sound-provider>
      ,
      <sound-provider sound-src="consonants/5.mp3" v-slot="{ play }">
        <v-chip @click="play"> /k/ </v-chip>
      </sound-provider>
      -
      <sound-provider sound-src="consonant-examples/42.mp3" v-slot="{ play }">
        <v-chip @click="play"> cat </v-chip>
      </sound-provider>
      ...
      <p class="mt-5">
        More details in the
        <router-link to="#place-of-articulation"
          >Table of Place and Manner of articulation</router-link
        >
      </p>
    </div>
    <div>
      <!-- State -->
      <h1 id="position-of-velum">4. Position of velum</h1>
      <v-divider></v-divider>
      <p class="mt-4">
        <strong>- Nasal sounds: </strong>
        <sound-provider sound-src="consonants/18.mp3" v-slot="{ play }">
          <v-chip class="ml-2" @click="play"> /m/ </v-chip>
        </sound-provider>
        <sound-provider sound-src="consonants/19.mp3" v-slot="{ play }">
          <v-chip class="ml-2" @click="play"> /n/ </v-chip>
        </sound-provider>
        <sound-provider sound-src="consonants/20.mp3" v-slot="{ play }">
          <v-chip class="ml-2" @click="play"> /ŋ/ </v-chip>
        </sound-provider>
      </p>
      <p>
        <strong>- Oral sounds: </strong>
        <span>Other consonants</span>
      </p>
    </div>
    <div>
      <!--  Forces of articulation -->
      <h1 id="forces-of-articulation">5. Forces of articulation</h1>
      <v-divider></v-divider>
      <p class="mt-4" id="fortis">
        <strong>- Fortis: </strong>
        Strong force, often voiceless and normally shorten the preceding vowels.
      </p>
      <p>
        <strong>Example: </strong>
        <sound-provider sound-src="consonants/7.mp3" v-slot="{ play }">
          <v-chip @click="play"> /f/ </v-chip>
        </sound-provider>
        -
        <sound-provider sound-src="consonant-examples/11.mp3" v-slot="{ play }">
          <v-chip @click="play"> face </v-chip>
        </sound-provider>
        ,
        <sound-provider sound-src="consonants/15.mp3" v-slot="{ play }">
          <v-chip @click="play"> /h/ </v-chip>
        </sound-provider>
        -
        <sound-provider sound-src="consonant-examples/46.mp3" v-slot="{ play }">
          <v-chip @click="play"> home </v-chip>
        </sound-provider>
        ,
        <sound-provider sound-src="consonants/5.mp3" v-slot="{ play }">
          <v-chip @click="play"> /k/ </v-chip>
        </sound-provider>
        -
        <sound-provider sound-src="consonant-examples/42.mp3" v-slot="{ play }">
          <v-chip @click="play"> cat </v-chip>
        </sound-provider>
        ...
      </p>
      <p id="lenis">
        <strong>- Lenis: </strong>
        <span
          >Week energy, often voiced and often lengthen the preceding vowels.
        </span>
      </p>
      <p>
        <strong>Example: </strong>
        <sound-provider sound-src="consonants/2.mp3" v-slot="{ play }">
          <v-chip @click="play"> /b/ </v-chip>
        </sound-provider>
        -
        <sound-provider sound-src="consonant-examples/6.mp3" v-slot="{ play }">
          <v-chip @click="play"> bird </v-chip>
        </sound-provider>
        ,
        <sound-provider sound-src="consonants/4.mp3" v-slot="{ play }">
          <v-chip @click="play"> /d/ </v-chip>
        </sound-provider>
        -
        <sound-provider sound-src="consonant-examples/24.mp3" v-slot="{ play }">
          <v-chip @click="play"> dance </v-chip>
        </sound-provider>
        ,
        <sound-provider sound-src="consonants/21.mp3" v-slot="{ play }">
          <v-chip @click="play"> /l/ </v-chip>
        </sound-provider>
        -
        <sound-provider sound-src="consonant-examples/25.mp3" v-slot="{ play }">
          <v-chip @click="play"> let </v-chip>
        </sound-provider>
        ...
      </p>
    </div>
  </v-container>
</template>

<script>
import SoundProvider from "@/components/common/SoundProvider.vue";
export default {
  components: { SoundProvider },
  name: "Consonants",
  page: {
    title: "Theory | Consonants",
    meta: [{ name: "description", content: "Theory consonants" }],
  },
  data: () => ({}),
};
</script>
