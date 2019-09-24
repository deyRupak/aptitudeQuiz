<template>
<div class="grid">
  <v-app id="inspire">
    <v-container grid-list-md text-xs-center>
      <v-layout row wrap>

        <v-flex v-for="i in 4" :key="`6${i}`" xs3>
          <v-card dark >
            <v-card-text class="px-0">6</v-card-text>
          </v-card>
        </v-flex>
        <v-flex v-for="i in 4" :key="`4${i}`" xs3>
          <v-card dark >
            <v-card-text class="px-0">4</v-card-text>
          </v-card>
        </v-flex>
        <v-flex v-for="i in 4" :key="`3${i}`" xs3>
          <v-card dark >
            <v-card-text class="px-0">3</v-card-text>
          </v-card>
        </v-flex>
        <v-flex v-for="i in 4" :key="`2${i}`" xs3>
          <v-card dark >
            <v-card-text class="px-0">2</v-card-text>
          </v-card>
        </v-flex>
        <v-flex v-for="i in 4" :key="`1${i}`" xs3>
          <v-card dark >
            <v-card-text class="px-0">1</v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</div>

</template>

<script>
export default{

}
</script>