<template>
  <div id="ExamHall">
  <div>
  <circular-count-down-timer
        :initial-value='60*15'
        @finish='finished'
        :size="100"
        :show-hour="false"
        style="text-align:center;"
        ></circular-count-down-timer>
</div>

    <div class="row">
      <div class="col-sm-1"></div>
      <div class="col-sm-8">
        <ul>
          <div v-for="(i,index) in array" v-bind:key="index" v-if="current==index">
            <div class="demos"></div>
            <img v-bind:src="url+i.img" height="300px" v-if="i.img" />
            <h6>Question No:{{index+1}}</h6>
            <p>{{i.question}} Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <ol>
              <div v-for="(j,indx) in i.choices" v-bind:key="indx">
                <li type="A">
                  <input type="radio" v-model="answer[index]" :value="j" />
                  {{j.option}}
                </li>
              </div>
            </ol>
            <br />
            <button v-on:click="current--" v-if="current!=0" class="btn btn-secondary">Previous</button>
            <button
              v-on:click="current++"
              v-if="current!=array.length-1"
              class="btn btn-success"
            >Save and Next</button>
          </div>
        </ul>
      </div>
      <div class="col-sm-3">
        <div class="panel-body" style="max-height: 450px; min-height:450px; overflow-y: scroll;">
          <div class="row" style="margin-right:35px;">
            <div class="col-sm-3" v-for="(i,a) in array" v-bind:key="i.id">
              <button
                type="submit"
                class="btn btn-dark" style=" padding:20px; margin:10px;"
                :class="{ rises: answer[a] }"
                v-on:click="getcurrent(a)"
              >{{a+1}}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <router-link to="/Thank">
      <button
        class="btn btn-primary"
        type="submit"
        @click="onSubmit"
        style="margin-left:85%;"
      >SUBMIT</button>
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
    axios
      .get('http://localhost:8081/question')
      .then(res => (this.array = res.data))
      .catch(error => console.log(error))
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
      axios
        .post('http://localhost:8081/result/', formAnswer)
        .then()
        .catch(err => console.log(err))
    },
    finished () {
      const formAnswer = {
        answer: this.answer,
        email: this.email
      }
      console.log(this.email)
      axios
        .post('http://localhost:8081/result/', formAnswer)
        .then(res => this.$route.push('Thank'))
        .catch(err => console.log(err))
    }
  }
}

// timer
// var now = new Date().getTime();
//       var countDownDate = now + 1802000
//       var x = setInterval(function () {
//           var now = new Date().getTime();
//           var distance = countDownDate - now;

//           // Time calculations for days, hours, minutes and seconds
//           var days = Math.floor(distance / (1000 * 60 * 60 * 24));
//           var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//           var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//           var seconds = Math.floor((distance % (1000 * 60)) / 1000);

//           // Output the result in an element with id="demo"
//           document.getElementById("demos").innerHTML = days + "d " + hours + "h " +
//               minutes + "m " + seconds + "s ";
//           if (distance < 0) {
//               clearInterval(x);
//               document.getElementById("demos").innerHTML = "EXPIRED";
//           }

//       }, 1000)
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
  @import "~bootstrap/dist/css/bootstrap.css";
}
.rises {
  padding: 20px;
  margin: 10px;
  background: green;
}
#ExamHall {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
</style>
