<template>
  <div id="HelloWorld">
  <div class="container">
  <form @submit.prevent="onSubmit">
      <div class="row" >
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <div class="form-group">
          <h3> Login Here </h3>
        </div>
          <div class="form-group">
            <label for="email"> Email </label>
            <input type="text" id="email" class="form-control" v-model="email">
          </div>
          <div class="form-group">
            <label for="First_Name"> Frist Name </label>
            <input type="text" id="First_Name" class="form-control" v-model="first_name">
          </div>
          <div class="form-group">
            <label for="Last_Name"> Last Name </label>
            <input type="text" id="Last_Name" class="form-control" v-model="last_name">
          </div>
          <div class="form-group">
            <label for="Number"> Number </label>
            <input type="text" id="Number" class="form-control" v-model="number">
          </div>
          <div class="form-group">
          <button
              class="btn btn-primary" type="submit" >Submit
          </button>
          </div>
        </div>
        <p> {{email}} </p>
      </div>
    </form>
  </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'HelloWorld',
  data () {
    return {
      first_name: '',
      last_name: '',
      email: '',
      number: ''
    }
  },
  methods: {
    onSubmit () {
      const formData = {
        first_name: this.first_name,
        last_name: this.last_name,
        email: this.email,
        number: this.number
      }
      console.log(formData)
      axios.post('http://localhost:8081/', formData)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
