<template>
  <div id="ExamHall">
    <div class="row">
      <div class="col-sm-1"></div>
      <div class="col-sm-8">
        <ul>{{current}}
          <div v-for="(i,index) in array" v-bind:key="index" v-if="current==index">
            <img v-bind:src="url+i.img" height=120px>
              <li> {{i.question}} </li>
                <ol> {{index}}
                  <div v-for="(j,index) in i.choices" v-bind:key="index">
                    <input type="checkbox" v-model="answer" :value="j._id"> <li> {{j.option}} {{j.iscorrect}}</li>
                  </div>
                </ol>
                <button v-on:click="current--" v-if="current!=0">Prev</button>
                <button v-on:click="current++" v-if="current!=array.length">Save and Next</button>

          </div>
        </ul>
      </div>
      <div class="col-sm-3">
        <div class="row">
          <div class="col-sm-3" v-for="(i,a) in array" v-bind:key="i.id">
            <button type="submit" class="btn btn-primary" style="border-radius: 66%; padding:12px; background-color: #4CAF50;" v-on:click="getcurrent(a)">{{a+1}}</button>
          </div>
        </div>
      </div>
    </div>
    <button
        class="btn btn-primary" type="submit" @click="onSubmit">Submit
    </button>
    <h1> {{answer}} {{test}}</h1>
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
      test: ''
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
    },
    onSubmit () {
      console.log('hsere')
      this.test = 'asdasd'
      const formAnswer = {
        answer: this.answer
      }
      console.log(formAnswer)
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
</style>
