<template>
<div id="inst">
  <v-card
    class="mx-auto"
    width="700"
    elevation="16"
    tile
  >
    <v-list disabled>
      <v-subheader><h1>INSTRUCTIONS</h1></v-subheader>
      <v-list-item-group v-model="item" color="primary">
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
        >
          <v-list-item-content>
            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
    <div class="style">
    <router-link to="/quiz">
     <v-btn color="primary">Start</v-btn>
    </router-link>
    </div>
  </v-card>
</div>
</template>
<script>
export default {
}
</script>