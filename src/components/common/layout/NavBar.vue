<template>
  <div>
    <!-- SideBar -->
    <v-navigation-drawer
      v-if="!isSideBarDisabled"
      v-model="sidebar"
      :mini-variant.sync="mini"
      mini-variant-width="70"
      :permanent="$vuetify.breakpoint.smAndUp"
      bottom
      clipped
      :expand-on-hover="$vuetify.breakpoint.smAndUp"
      app
    >
      <v-treeview
        :items="sideBarTreeView"
        item-key="name"
        item-text="title"
        :open="openSideBar"
        :active="activeSideBar"
        hoverable
        activatable
      >
        <template v-slot:prepend="{ item }">
          <v-icon v-if="item.icon">
            {{ item.icon }}
          </v-icon>
        </template>
        <template v-slot:label="{ item }">
          <router-link :to="item.path" v-if="item.path">{{
            item.title
          }}</router-link>
          <span v-else>{{ item.title }}</span>
        </template>
      </v-treeview>
      <!-- <v-list dense>
        <v-list-item v-for="item in navBarItems" :key="item.title" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list> -->
    </v-navigation-drawer>

    <!-- NavBar -->
    <v-app-bar app fixed class="primary app-pl20" clipped-left>
      <v-toolbar-title class="white--text">
        <router-link to="/" tag="span" style="cursor: pointer">
          <span class="app-text-30"> CoWeb </span>
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <span class="hidden-sm-and-up">
        <v-app-bar-nav-icon
          class="white--text"
          @click="closeSideBar"
        ></v-app-bar-nav-icon>
      </span>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn
          text
          depressed
          class="primary"
          v-for="item in navBarItems"
          :key="item.title"
          :to="item.path"
        >
          <v-icon left dark>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "NavBar",

  data() {
    return {
      sidebar: false,
      mini: true,
      disableSideBarRoutes: ["home"],
      navBarItems: [
        { title: "Home", path: "/", icon: "mdi-home" },
        {
          title: "Theory",
          path: "/theory/consonants",
          icon: "mdi-book-open-page-variant",
        },
        { title: "Flashcards", path: "/flashcards", icon: "mdi-card-text" },
        { title: "Tests", path: "/tests", icon: "mdi-clipboard-list-outline" },
      ],
      sideBarTreeView: [
        { title: "Home", name: "home", path: "/", icon: "mdi-home" },
        {
          title: "Theory",
          path: "/theory/consonants",
          name: "theory",
          icon: "mdi-book-open-page-variant",
          children: [
            {
              title: "Consonants",
              name: "theory.consonants",
              path: "/theory/consonants",
              children: [
                {
                  title: "Place of Articulation",
                  name: "place",
                  path: "/theory/consonants#place-of-articulation",
                  children: [
                    {
                      title: "Bilabial",
                      name: "bilabial",
                      path: "/theory/consonants#bilabial",
                    },
                    {
                      title: "Labiodental",
                      name: "labiodental",
                      path: "/theory/consonants#labiodental",
                    },
                    {
                      title: "Dental",
                      name: "dental",
                      path: "/theory/consonants#dental",
                    },
                    {
                      title: "Alveolar",
                      name: "alveolar",
                      path: "/theory/consonants#alveolar",
                    },
                    {
                      title: "Palato – alveolar",
                      name: "palato-alveolar",
                      path: "/theory/consonants#palato–alveolar",
                    },
                    {
                      title: "Palato",
                      name: "palato",
                      path: "/theory/consonants#palato",
                    },
                    {
                      title: "Velar",
                      name: "velar",
                      path: "/theory/consonants#velar",
                    },
                    {
                      title: "Glottal",
                      name: "glottal",
                      path: "/theory/consonants#glottal",
                    },
                    {
                      title: "Retroflexes",
                      name: "retroflexes",
                      path: "/theory/consonants#retroflexes",
                    },
                  ],
                },
                {
                  title: "Manner of Articulation",
                  name: "manner",
                  path: "/theory/consonants#manner-of-articulation",
                  children: [
                    {
                      title: "Plosive",
                      name: "plosive",
                      path: "/theory/consonants#plosive",
                    },
                    {
                      title: "Fricative",
                      name: "fricative",
                      path: "/theory/consonants#fricative",
                    },
                    {
                      title: "Afficate",
                      name: "afficate",
                      path: "/theory/consonants#afficate",
                    },
                    {
                      title: "Nasal",
                      name: "nasal",
                      path: "/theory/consonants#nasal",
                    },
                    {
                      title: "Lateral",
                      name: "lateral",
                      path: "/theory/consonants#lateral",
                    },
                    {
                      title: "approximants",
                      name: "approximants",
                      path: "/theory/consonants#approximants",
                    },
                  ],
                },
                {
                  title: "State of vocal cords",
                  name: "state",
                  path: "/theory/consonants#state-of-vocal-cords",
                },
                {
                  title: "Position of velum",
                  name: "velum",
                  path: "/theory/consonants#position-of-velum",
                },
                {
                  title: "Forces of articulation",
                  name: "forces",
                  path: "/theory/consonants#forces-of-articulation",
                  children: [
                    {
                      title: "Fortis",
                      name: "fortis",
                      path: "/theory/consonants#fortis",
                    },
                    {
                      title: "Lenis",
                      name: "lenis",
                      path: "/theory/consonants#lenis",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          title: "Flashcards",
          name: "flashcards",
          path: "/flashcards",
          icon: "mdi-card-text",
        },
        {
          title: "Tests",
          name: "tests",
          path: "/tests",
          icon: "mdi-clipboard-list-outline",
        },
      ],
    };
  },
  computed: {
    isSideBarDisabled() {
      return this.disableSideBarRoutes.includes(this.$route.name);
    },
    openSideBar() {
      return this.$route.name?.split(".");
    },
    activeSideBar() {
      return [this.$route.name];
    },
  },

  methods: {
    closeSideBar() {
      this.sidebar = !this.sidebar;
    },
    toggleMinimizeSideBar() {
      this.mini = !this.mini;
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/components/nav-bar";
</style>
