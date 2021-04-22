<template>
  <v-app>
    <v-layout row justify-center>
      <v-container fluid>
        <NavBar />
        <LoaderWrapper :loading="isLoading">
          <BookLoader />
        </LoaderWrapper>
        <v-main>
          <vue-page-transition name="overlay-left">
            <router-view />
          </vue-page-transition>
        </v-main>
      </v-container>
    </v-layout>
  </v-app>
</template>


<script>
import { commonGetters } from "@/store/modules/common";
import LoaderWrapper from "./components/common/loaders/LoaderWrapper.vue";
import BookLoader from "./components/common/loaders/BookLoader.vue";
import NavBar from "./components/common/layout/NavBar.vue";

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
    NavBar,
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
