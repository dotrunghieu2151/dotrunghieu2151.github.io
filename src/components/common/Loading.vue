<template>
  <div class="loading-wrapper" v-if="loading">
    <div id="loader"></div>
  </div>
</template>

<script>
export default {
  name: "Loading",
  props: {
    loading: Boolean,
  },
};
</script>

<style scoped>
.loading-wrapper {
  display: grid;
  place-items: center;
  background-color: rgba(244, 246, 249, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999999;
}

#loader {
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  border-top: 16px solid #d798c1;
  width: 120px;
  height: 120px;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;
}

/* Safari */
@-webkit-keyframes spin {
  0% {
    -webkit-transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
