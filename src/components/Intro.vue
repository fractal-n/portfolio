<template>
  <section class="gradient-bg">
    <v-img
      height="100vh"
      src="https://images.unsplash.com/photo-1565932887479-b18108f07ffd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80"
    >
      <v-container fill-height>
        <v-row justify="center">
          <v-col class="text-center" lg="6" md="8" sm="10">
            <div class="text-h2 font-weight-black">
              HIEN NGUYEN
            </div>

            <br />

            <v-avatar size="150">
              <v-img src="@/assets/portrait-small.png" alt="me"></v-img>
            </v-avatar>

            <br />
            <br />

            <div class="text-h4 font-weight-light">
              I am a Software Developer who is in love with backend development,
              software architecture, and artificial intelligence.
            </div>

            <br />
            <br />

            <v-btn
              x-large
              raised
              color="success"
              @click="$vuetify.goTo('#projects')"
              >View my projects</v-btn
            >
          </v-col>
        </v-row>
      </v-container>
    </v-img>
  </section>
</template>

<style lang="scss">
// .gradient-bg {
//   background: linear-gradient(-45deg, #1e4bff, #601aff, #08c9ff);
//   background-size: 400% 400%;
//   animation: gradient 15s ease infinite;
// }

// @keyframes gradient {
//   0% {
//     background-position: 0% 50%;
//   }
//   50% {
//     background-position: 100% 50%;
//   }
//   100% {
//     background-position: 0% 50%;
//   }
// }
</style>
