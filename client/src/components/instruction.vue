<template>
<div style="margin-left:10%;">
    <h2>INSTRUCTIONS</h2>
    <div class="row"><br>
    <div class="col-sm-6">
        <h6>
            <li>The 'NEXT' button below will take you to the LOGIN PAGE.</li>
            <br><li>Fill in your details correctly. Check for 'spellings'.</li>
            <br><li>The total number of questions are /*no(ques)*/.</li>
            <br><li>Total time limit is /*time*/ minutes.</li>
            <br><li>After attempting a questions click on 'Save and Next'.</li>
            <br><li>Click on the 'SUBMIT' button only after you're sure with your responses.</li>
        </h6><br>

    <router-link to="/signin">
      <button
              class="btn btn-primary" type="submit" >NEXT
          </button>
    </router-link>
    <br><br><br><br><br>
    <h2>Good Luck!</h2>
    </div>

         <div class="col-sm-3"></div>
          <div class="col-sm-3" style="margin-top:20%;">
              <img src="https://www.acpce.org/wp-content/uploads/2017/06/csi-logo.png" alt="" srcset="">
          </div>
          </div>
    </div>
</template>
<style>
h1{
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
}
</style>
