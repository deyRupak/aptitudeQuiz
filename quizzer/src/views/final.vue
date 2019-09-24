<template>
<div id="inst">
  <v-card
    class="mx-auto"
    width="700"
    elevation="16"
    tile
  >
    <v-list disabled>
      <v-subheader><h1>THANK YOU</h1></v-subheader>
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
    <router-link to="/">
     <v-btn color="primary">Logout</v-btn>
    </router-link>
    </div>
  </v-card>
</div>
</template>
<script>
export default {
}
</script>