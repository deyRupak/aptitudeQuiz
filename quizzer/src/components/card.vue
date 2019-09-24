<template>
<div class="card">
  <v-card
    class="mx-auto"
    width="700px"
    elevation="15">
    <v-img
      src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
      height="300px"
      width="700px"
      min-width="700px"
      min-height="300px"
    ></v-img>

    <v-card-title>
      <div>Question number :</div>
    </v-card-title>
    <div>
        <v-card-text>
          I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
        </v-card-text>
      </div>
      
          <v-card-text>
      <v-chip-group
        v-model="selection"
        active-class="deep-purple accent-4 white--text"
        column
      >
        <v-chip>A</v-chip>
        <v-chip>B</v-chip>
        <v-chip>C</v-chip>
        <v-chip>D</v-chip>
      </v-chip-group>
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="deep-purple accent-4"
        text
        @click="prev"
      >
        PREV
      </v-btn>
      <v-btn
        color="deep-purple accent-4"
        text
        @click="Save"
      >
        SAVE
      </v-btn>
      <v-btn
        color="deep-purple accent-4"
        text
        @click="next"
      >
        NEXT
      </v-btn>
    </v-card-actions>
  </v-card>
  </div>
</template>


<script>
export default{

}
</script>