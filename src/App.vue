<template>
  <v-app>
    <v-app-bar app>
      <v-avatar class="mr-3">
        <v-img contain src="./assets/logo_transparent-no-text.png"></v-img>
      </v-avatar>

      <v-toolbar-title class="font-weight-black headline">fractal-n</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon :href="linkedIn" target="_blank">
        <v-icon x-large>mdi-linkedin</v-icon>
      </v-btn>

      <v-btn icon :href="gitHub" target="_blank">
        <v-icon x-large>mdi-github</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content>
      <Intro />
      <Projects />
    </v-content>
  </v-app>
</template>

<script>
import Intro from "./components/Intro";
import Projects from "./components/Projects";

export default {
  name: "App",

  components: {
    Intro,
    Projects
  },

  data: () => ({
    linkedIn: "https://www.linkedin.com/in/hien-nguyen-5b503533/",
    gitHub: "https://github.com/fractal-n"
  })
};
</script>
