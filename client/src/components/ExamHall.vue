<template>
  <div id="ExamHall">
    <div class="row">
      <div class="col-sm-1"></div>
      <div class="col-sm-8">
        <ul>{{current}}
          <div v-for="(i,index) in array" v-bind:key="index" v-if="current==index">
            {{i.img}}
            <img src="http://localhost:8081/uploads/1733c305a21bd3b38985732af7b1b62d" height=120px>
            <li> {{i.question}} </li>
              <ol> {{index}}
                <div v-for="(j,index) in i.choices" v-bind:key="index">
                  <input type="radio" value="asa" v-model="answer"> <li> {{j.option}} </li>
                </div>
              </ol>
            </div>
          </ul>
        </div>
      <div class="col-sm-3">
        <div class="row">
          <div class="col-sm-1" v-for="(i,a) in array" v-bind:key="i.id">
            <button type="submit" style="padding: 8px 4px;" v-on:click="getcurrent(a)">{{a}}</button>
          </div>
        </div>
      </div>
    </div>
    <h1> {{current}} </h1>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'ExamHall',
  data () {
    return {
      array: null,
      current: 0,
      image: null
    }
  },
  async mounted () {
    console.log('here')
    axios.get('http://localhost:8081/question').then(res => (this.array = res.data)
    ).catch(error => console.log(error))
  },
  methods: {
    getcurrent: function (a) {
      this.current = a
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
</style>
