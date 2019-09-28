<template>
  <div id="HelloWorld">
  <div class="container" id="cont">
  <form @submit.prevent="onSubmit">
      <div class="row" >
        <div class="col-sm-6">
        <div class="form-group">
          <h3> LOGIN </h3>
        </div>
          <div class="form-group">
            <label for="email"> Email </label>
            <input type="email" id="email" class="form-control" v-model="email" required>
          </div>
          <div class="form-group">
            <label for="First_Name"> First Name </label>
            <input type="text" id="First_Name" class="form-control" v-model="first_name" required>
          </div>
          <div class="form-group">
            <label for="Last_Name"> Last Name </label>
            <input type="text" id="Last_Name" class="form-control" v-model="last_name" required>
          </div>
          <div class="form-group">
            <label for="Number"> Contact </label>
            <input type="text" id="Number" class="form-control" v-model="number" required>
          </div><br>
          <div class="form-group">
          <button
              class="btn btn-primary" type="submit" >Login
          </button>
          </div>
        </div>
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
      axios.post('http://localhost:8081/', formData).then((response) => {
        console.log(response.message)

        this.$router.push('/exam/' + this.email)
      }).catch((error) => {
        console.log(error)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#cont {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

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
