<template>
  <div class="container">
  
    <form>
  
      <div class="well">
        <h4> Registration</h4>
        <div class="form-group">
          <label class="pull-left"> Name </label>
          <input type="text" class="form-control" placeholder="Name" v-model="User.name">
        </div>
        <div class="form-group">
          <label class="pull-left"> Username </label>
          <input type="text" class="form-control" placeholder="Username" v-model="User.username">
        </div>
        <div class="form-group">
          <label class="pull-left"> Password </label>
          <input type="text" class="form-control" placeholder="Password " v-model="User.password">
        </div>
        <div class="form-group">
          <label class="pull-left"> Address </label>
          <input type="text" class="form-control" placeholder="Address "  v-model="User.address">
        </div>
        <div class="form-group">
          <label class="pull-left"> State </label>
          <input type="text" class="form-control" placeholder="State " v-model="User.state">
        </div>
        <div class="form-group">
          <label class="pull-left"> Country </label>
          <input type="text" class="form-control" placeholder="Country " v-model="User.country">
        </div>
        <div class="form-group">
          <label class="pull-left"> Email </label>
          <input type="text" class="form-control" placeholder="Email " v-model="User.email">
        </div>
        <div class="form-group">
          <label class="pull-left"> PAN </label>
          <input type="text" class="form-control" placeholder="PAN number " v-model="User.pan">
        </div>
        <div class="form-group">
          <label class="pull-left"> Contact </label>
          <input type="text" class="form-control" placeholder="Contact " v-model="User.contact">
        </div>
        <div class="form-group">
          <label class="pull-left"> Date of birth </label>
          <input type="text" class="form-control" placeholder="Date of birth " v-model="User.dob">
        </div>
        <div class="form-group">
          <label class="pull-left"> Account Type </label>
          <input type="text" class="form-control" placeholder="Account type " v-model="User.account_type">
        </div>
      </div>
  
  <router-link to="/login">
      <button type="submit" class="btn btn-large btn-block btn-primary full-width" @click="addToAPI">Submit</button>
      
  </router-link>
  <router-link to="/">
      <button class="btn btn-large btn-block btn-success full-width">Cancel</button>
  </router-link>
    </form>
  
  </div>
</template>

<script>

import axios from 'axios';

export default {
  
  data() {
    return {
      
      User: { name: '', username: '', password: '', address: '', state: '', country: '', email: '', pan: '', contact: '', dob: '', account_type: ''
       },
    }
  }, methods: {
    addToAPI() {

      let newUser = {
        name: this.User.name,
        username: this.User.username,
        password: this.User.password,
        address: this.User.address,
        state: this.User.state,
        country: this.User.country,
        email: this.User.email,
        pan: this.User.pan,
        contact: this.User.contact,
        DOB: this.User.dob,
        accounttype: this.User.account_type

      }
      console.log(newUser);
      axios.post('http://127.0.0.1:5000/Account', newUser)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);

        });

    }


  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
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
