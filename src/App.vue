<template>
  <v-app>
    <v-main class="blue-grey lighten-5">
      <LoaderWrapper :loading="isLoading">
        <BookLoader />
      </LoaderWrapper>
      <transition name="fade">
        <RouterView />
      </transition>
    </v-main>
  </v-app>
</template>


<script>
import { commonGetters } from "@/store/modules/common";
import LoaderWrapper from "./components/common/loaders/LoaderWrapper.vue";
import BookLoader from "./components/common/loaders/BookLoader.vue";

export default {
  name: "App",
  page: {
    titleTemplate(title) {
      title = typeof title === "function" ? title(this.$store) : title;
      return title ? `${title} | CoWeb` : "CoWeb";
    },
  },
  components: {
    LoaderWrapper,
    BookLoader,
  },
  data: () => ({
    //
  }),
  computed: {
    ...commonGetters(["isLoading"]),
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/style";
</style>
