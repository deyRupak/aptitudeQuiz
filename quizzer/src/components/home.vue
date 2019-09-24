<template>
<v-app >
            <v-content>
              <v-container 
              class="fill-height"
              fluid
                
                
              >
                <v-layout
                  align-center
                  justify-center
                >
                  <v-flex
                    xs12
                    sm8
                    md4
                    
                  >
                    <v-card class="elevation-12">
                      <v-toolbar
                        color="primary"
                        dark
                        flat
                      >
                        <v-toolbar-title>Login form</v-toolbar-title>
                        <v-spacer></v-spacer>
                        
                      </v-toolbar>
                      <v-card-text >
                        <v-form>
                          <v-text-field
                            label="Username"
                            name="login"
                            prepend-icon="person"
                            type="text"
                          ></v-text-field>
        
                          <v-text-field
                            id="Contact No."
                            label="Contact No."
                            name="Contact No."
                            prepend-icon="call"
                            type="number"
                          ></v-text-field>
                          <v-text-field
                            id="E-mail"
                            label=" E-mail"
                            name="E-mail"
                            prepend-icon="email"
                            type="e-mail"
                          ></v-text-field>
                        </v-form>
                      </v-card-text>
                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="primary">Login</v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-content>
          </v-app>
</template>

<script>
</script>
