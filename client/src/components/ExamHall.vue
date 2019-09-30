<template>
  <div id="ExamHall">
    <div class="row">
      <div class="col-sm-1"></div>
      <div class="col-sm-8">
        <ul>
          <div v-for="(i,index) in array" v-bind:key="index" v-if="current==index">
            <img v-bind:src="url+i.img" height=300px v-if="i.img">
              <h6>Question no:{{index+1}}</h6>
                 <h2>{{i.question}} </h2>
                 <ol>
                  <div v-for="(j,indx) in i.choices" v-bind:key="indx">
                    <li type="A">
                    <input type="radio" v-model="answer[index]" :value="j">
                     {{j.option}}</li>
                  </div>
                </ol>
                <br>
                <button v-on:click="current--" v-if="current!=0" class="btn btn-secondary">Prev</button>
                <button v-on:click="current++" v-if="current!=array.length-1" class="btn btn-success">Save and Next</button>
          </div>
        </ul>
      </div>
      <div class="col-sm-3">
        <div class="panel-body" style="max-height: 450px; min-height:450px; overflow-y: scroll;">
        <div class="row" style="margin-right:35px;">
          <div class="col-sm-3" v-for="(i,a) in array" v-bind:key="i.id">
            <button type="submit" class="btn btn-dark rises" v-on:click="getcurrent(a)">{{a+1}}</button>
          </div>
        </div>
        </div>
      </div>
    </div>
    <router-link to='/Thank'>
    <button
        class="btn btn-primary" type="submit" @click="onSubmit" style="margin-left:85%;">Submit</button>
  </router-link>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'ExamHall',
  data () {
    return {
      url: 'http://localhost:8081/',
      array: null,
      current: 0,
      image: null,
      answer: [],
      email: this.$route.params.email
    }
  },
  async mounted () {
    axios.get('http://localhost:8081/question').then(res => (this.array = res.data)
    ).catch(error => console.log(error))
  },
  methods: {
    getcurrent: function (a) {
      this.current = a
    },
    onSubmit () {
      const formAnswer = {
        answer: this.answer,
        email: this.email
      }
      axios.post('http://localhost:8081/result/', formAnswer).then().catch(err => console.log(err))
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
  @import'~bootstrap/dist/css/bootstrap.css'
}
.rises{
  padding:20px;
  margin:10px;
}
#ExamHall{
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
}
</style>
