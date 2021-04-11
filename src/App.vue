<template>
  <v-app>
    <v-main class="blue-grey lighten-5">
      <Loading :loading="isLoading" />
      <transition name="fade">
        <RouterView />
      </transition>
    </v-main>
  </v-app>
</template>


<script>
import Loading from "@/components/common/Loading";
import { commonGetters } from "@/store/modules/common";

export default {
  name: "App",
  page: {
    titleTemplate(title) {
      title = typeof title === "function" ? title(this.$store) : title;
      return title ? `${title} | CoWeb` : "CoWeb";
    },
  },
  components: {
    Loading,
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
