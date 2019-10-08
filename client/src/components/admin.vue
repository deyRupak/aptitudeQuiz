<template>
  <div id="admin">

    <div class="row">

      <div class="col-sm-1">
      </div>
      <div class="col-sm-8">

      <div v-if="!addquestion">
        <ul>
          <div v-for="(i,index) in array" v-bind:key="index" v-if="current==index">
            <img v-bind:src="url+i.img" height=300px v-if="i.img">
              <h2>Question no:{{index+1}}</h2>
                 <h3>{{i.question}} </h3>
                 <ol>
                  <div v-for="(j,indx) in i.choices" v-bind:key="indx">
                    <li type="A">
                    <input type="radio" v-model="answer[index]" :value="j">
                     {{j.option}} {{j.iscorrect}}</li>
                  </div>
                </ol>
                <br>
                <button class="btn btn-primary" type="submit" @click="toggel">Add Question</button>
                <button v-on:click="delques(i._id)" class="btn btn-danger">Delete Question</button>
          </div>
        </ul>
      </div>
      <div v-if="addquestion">
      <form @submit.prevent="submitFile">
      <div class="row" >
        <div class="col-sm-6">
        <div class="form-group">
          <label for="question"> Question </label>
          <input type="text" id="question" class="form-control" v-model="question" required>
        </div>
          <div class="form-group">
            <label for="option1"> A </label>
            <input type="checkbox" v-model="iscorrect1" true-value=true false-value=false>
            <input type="text" id="option1" class="form-control" v-model="option1" required>
          </div>
          <div class="form-group">
            <label for="option2"> B </label>
            <input type="checkbox" v-model="iscorrect2" true-value=true false-value=false>
            <input type="text" id="option2" class="form-control" v-model="option2" required>
          </div>
          <div class="form-group">
            <label for="option3"> C </label>
            <input type="checkbox" v-model="iscorrect3" true-value=true false-value=false>
            <input type="text" id="option3" class="form-control" v-model="option3" required>
          </div>
          <div class="form-group">
            <label for="option4"> D </label>
            <input type="checkbox" v-model="iscorrect4" true-value=true false-value=false>
            <input type="text" id="option4" class="form-control" v-model="option4" required>
          </div>
          <label>File
            <input type="file" id="file" ref="file" v-on:change="handleFileUpload()"/>
          </label>
            <button class="btn btn-primary">Submit</button>
          <br>
        </div>
      </div>
      </form>
      </div>
      </div>
      <div class="col-sm-3">
        <div class="panel-body" style="max-height: 450px; min-height:450px; overflow-y: scroll;">
        <div class="row" style="margin-right:35px;">
          <div class="col-sm-3" v-for="(i,a) in array" v-bind:key="i.id">
            <button type="submit" class="btn btn-dark" style=" padding:20px; margin:10px;" v-on:click="getcurrent(a)">{{a+1}}</button>
          </div>
        </div>
        </div>
      </div>
    </div>
    <h1> {{file}} {{current}}</h1>
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
      addquestion: true,
      question: '',
      file: '',
      option1: '',
      option2: '',
      option3: '',
      option4: '',
      iscorrect1: '',
      iscorrect2: '',
      iscorrect3: '',
      iscorrect4: ''
    }
  },
  async mounted () {
    console.log('here')
    axios.get('http://localhost:8081/question').then(res => (this.array = res.data)
    ).catch(error => console.log(error))
  },
  // computed: {
  //   async mounted () {
  //   console.log('here')
  //   axios.get('http://localhost:8081/question').then(res => (this.array = res.data)
  //   ).catch(error => console.log(error))
  //   }
  // },
  methods: {
    getcurrent: function (a) {
      this.addquestion = false
      this.current = a
    },
    toggel: function () {
      this.addquestion = true
    },
    handleFileUpload () {
      this.file = this.$refs.file.files[0]
    },
    delques: function (a) {
      console.log(a)
      axios.delete('http://localhost:8081/question/' + a).then().catch(err => console.log(err))
    },
    submitFile: function () {
      let formData = new FormData()
      formData.append('question', this.question)
      formData.append('option1', this.option1)
      formData.append('option2', this.option2)
      formData.append('option3', this.option3)
      formData.append('option4', this.option4)
      formData.append('iscorrect1', this.iscorrect1)
      formData.append('iscorrect2', this.iscorrect2)
      formData.append('iscorrect3', this.iscorrect3)
      formData.append('iscorrect4', this.iscorrect4)
      console.log('here')
      formData.append('quesionImage', this.file)
      axios.post('http://localhost:8081/question', formData, {headers: {'Content-Type': 'multipart/form-data'}}).then().catch(err => console.log(err))
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
#ExamHall{
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
}
</style>
