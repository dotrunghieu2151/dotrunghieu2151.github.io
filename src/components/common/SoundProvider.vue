<template>
  <span><slot :play="playSound" /></span>
</template>

<script>
export default {
  name: "SoundProvider",
  props: {
    soundSrc: {
      type: String,
      isRequired: true,
    },
  },
  data() {
    return {};
  },
  computed: {
    sound() {
      return new Audio(require(`@/assets/sounds/${this.soundSrc}`));
    },
  },
  methods: {
    playSound() {
      const alertPromise = this.sound.play();
      if (alertPromise !== undefined) {
        alertPromise.then().catch((error) => {
          console.log('_soundAlert.play() [error:"%o"]', error);
        });
      }
    },
  },
};
</script>
