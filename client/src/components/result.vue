<template>
<div style="margin-left:10%;">
    <div class="row"><br>
    <div class="col-sm-6">
       <h1>RESULTS !</h1><br><br>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Sr no</th>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Contact No.</th>
          <th scope="col">Marks Acheived</th>
        </tr>
      </thead>
      <tbody>
      <template v-for="(i,index) in array">
        <tr v-bind:key="index">
          <th scope="row">{{index+1}}</th>
          <td>{{i.first_name}}</td>
          <td>{{i.last_name}}</td>
          <td>{{i.number}}</td>
          <td>{{i.marks}}</td>
        </tr>
      </template>
      </tbody>
    </table>
    <br><br><br><br><br>
    </div>
         <div class="col-sm-3"></div>
          </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'result',
  data () {
    return {
      url: 'http://localhost:8081/',
      array: null
    }
  },
  async mounted () {
    axios.get('http://localhost:8081/candidates').then(res => (this.array = res.data)
    ).catch(error => console.log(error))
  }
}
</script>

<style>
h1{
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
}
</style>
