<template>
<nav>
    <v-apps id="inspire" color="primary">
              <div>
                <v-toolbar style="background:#1976D2;">
                  <v-toolbar-title style="color:#eee;" ><h3>Aptitude  Quiz</h3></v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-spacer></v-spacer>
                  <v-toolbar-items>
                    <div class="navicon">
                      <router-link to="/">
                      <v-btn color="primary">logout</v-btn>
                      </router-link> 
                    </div>
                  </v-toolbar-items>
                </v-toolbar>
              </div>
            </v-apps>
</nav>
</template>

<script>
export default{

}
</script>