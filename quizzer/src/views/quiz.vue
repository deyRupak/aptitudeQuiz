<template>
<div class="quiz">
   <div class="row">
     <div id="panel" class="col-sm-2 d-flex justify-content-center align-items-center ">
            <grid />
        </div>
        <div  class="col-sm-1">
        </div>
        <div class="col-sm-8 ">
            <card />
            <button />
        </div>
        <div id="panel" class="col-sm-1 ">
        </div>
        </div>
        
</div>
  </template>

  <script>
    import grid from '@/components/grid';
    import card from '@/components/card';
  export default {
  name: 'App',
  components: {
    grid,
    card
  },
  data: () => ({
  }),
};
  </script>