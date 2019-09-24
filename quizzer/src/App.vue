<template>
  <v-app>
    <navbar />
   <div class="row">
        <div class="col-sm-8  d-flex justify-content-center align-items-center">
            <card />
        </div>
        <div class="col-sm-4 d-flex justify-content-center align-items-center ">
            <grid />
        </div>
  </div>
  

    <v-content>
    </v-content>
    
  </v-app>
</template>

<script>
import navbar from './components/navbar';
import card from './components/card';
import home from './components/home';
import grid from './components/grid';

export default {
  name: 'App',
  components: {
    home,
    navbar,
    card,
    grid,
  },
  data: () => ({
  }),
};
</script>
