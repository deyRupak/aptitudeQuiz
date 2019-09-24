<template>
<div>
   <div class="row">
        <div class="col-sm-8  d-flex justify-content-center align-items-center">
            <card />
            <button />
        </div>
        <div class="col-sm-4 d-flex justify-content-center align-items-center ">
            <grid />
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