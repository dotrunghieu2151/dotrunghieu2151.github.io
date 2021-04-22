<template>
  <LoaderWrapper :loading="loading">
    <h1 id="coweb-title-loader" data-content="CoWeb">CoWeb</h1>
  </LoaderWrapper>
</template>

<script>
import LoaderWrapper from "./LoaderWrapper.vue";
export default {
  components: { LoaderWrapper },
  name: "CowebTitleLoader",
  props: {
    loading: Boolean,
  },
};
</script>

<style scoped>
#coweb-title-loader {
  font-size: 5em;
}

#coweb-title-loader:before {
  content: attr(data-content);
  position: absolute;
  overflow: hidden;
  max-width: 4em;
  color: #1976d2;
  animation: loading 4s linear;
}

@keyframes loading {
  from {
    max-width: 0;
  }
}
</style>
