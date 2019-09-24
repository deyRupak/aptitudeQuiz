<template>
  <v-row justify="center">
    <v-expansion-panels >
      <v-expansion-panel
        v-for="(item,i) in 20"
        :key="i"
      >
        <v-expansion-panel-header>Question</v-expansion-panel-header>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-row>
</template>