<template>
  <v-row justify="center">
<v-container
      id="scroll-target"
      style="max-height: 720px"
      class="overflow-y-auto"
    >
      <v-row
        v-scroll:#scroll-target="onScroll"
        align="center"
        justify="center"
        style="height: 1000px"
      >
      <v-expansion-panels >
      <v-expansion-panel
        v-for="(item,i) in 20"
        :key="i"
      >
        

        <v-expansion-panel-header>Question</v-expansion-panel-header>
      </v-expansion-panel>
    </v-expansion-panels>


      </v-row>
    </v-container>
  </v-row>
</template>