<template>
  <section>
    <div class="py-12"></div>

    <v-container>
      <h2 id="projects" class="display-2 font-weight-bold mb-3 text-uppercase text-center">Projects</h2>

      <v-responsive class="mx-auto mb-12" width="56">
        <v-divider class="mb-1"></v-divider>

        <v-divider></v-divider>
      </v-responsive>

      <!-- <v-row align="center" justify="center">
        <h2>Filters</h2>
      </v-row>
      <v-row align="center" justify="center">
        <v-chip-group v-model="neighborhoods" column multiple>
          <v-chip filter outlined v-for="(item, i) in uniqueTags" :key="i">{{item}}</v-chip>
        </v-chip-group>
      </v-row>-->

      <v-row align="center" justify="center">
        <v-col
          v-for="({ name, repoUrl, appUrl, description, screenshot, tags, favorite},
          i) in projects"
          :key="i"
          cols="12"
          md="4"
        >
          <v-card>
            <v-img :src="getImage(screenshot)" alt="project screenshot"></v-img>

            <v-card-title>
              <span>{{ name }}</span>
              <v-spacer />
              <v-chip v-if="favorite" color="accent">
                Favorite
                <v-icon right>mdi-heart</v-icon>
              </v-chip>
            </v-card-title>

            <v-card-text>
              <v-container fluid>
                <v-row>{{description}}</v-row>
                <v-row class="mt-4">
                  <v-chip color="info" class="mr-3" v-for="(name, i) in tags" :key="i">{{name}}</v-chip>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-btn :href="appUrl" target="_blank" color="success">See Demo</v-btn>
              <v-spacer></v-spacer>
              <v-btn icon :href="repoUrl" target="_blank">
                <v-icon large>mdi-github</v-icon>
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
  }),
  computed: {
    // I was thinking about allowing user to filter tags using tag group, but it seems to take more time to do this than I initially thought
    // uniqueTags() {
    //   let allTags = [];
    //   this.projects.forEach(project => allTags.push(...project.tags));
    //   let result = new Set(allTags);
    //   return [...result];
    // }
  },
  methods: {
    getImage(fileName) {
      return require(`../assets/${fileName}`);
    }
  }
};
</script>
