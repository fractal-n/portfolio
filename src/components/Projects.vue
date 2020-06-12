<template>
  <section>
    <div class="py-12"></div>

    <v-container>
      <h2 id="projects" class="display-2 font-weight-bold mb-3 text-uppercase text-center">Projects</h2>

      <v-responsive class="mx-auto mb-12" width="56">
        <v-divider class="mb-1"></v-divider>

        <v-divider></v-divider>
      </v-responsive>

      <v-row align="center" justify="center">
        <v-col
          v-for="({ name, repoUrl, appUrl, description, screenshot },
          i) in projects"
          :key="i"
          cols="12"
          md="4"
        >
          <v-card>
            <v-card-title>{{ name }}</v-card-title>

            <v-img :src="screenshot" alt="project screenshot"></v-img>

            <v-card-text>{{ description }}</v-card-text>

            <v-card-actions>
              <v-btn :href="appUrl" target="_blank" color="success">
                Demo
                <v-icon right>mdi-play-circle</v-icon>
              </v-btn>
              <v-spacer></v-spacer>
              <v-btn icon :href="repoUrl" target="_blank">
                <v-icon>mdi-github</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <div class="py-12"></div>
  </section>
</template>

<script>
import data from "../store/projects.json";

export default {
  data: () => ({
    projects: data.projects
  })
};
</script>
