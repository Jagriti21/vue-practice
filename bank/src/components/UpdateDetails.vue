<template>
    <div class="account">
        <h4>{{message}} as {{id}}</h4>
        <div>
            <form>
                    <label >Name: </label>
                    <input type="text" v-model="editAccount.name">
                    <br>
                    <!-- <label >Username </label>
                    <input type="text" v-model="editAccount.username">
                    <br> -->
                    <label >Password: </label>
                    <input type="text" v-model="editAccount.password">
                    <br>
                    <label >Address: </label>
                    <input type="text" v-model="editAccount.address">
                    <br>
                    <label >State: </label>
                    <input type="text" v-model="editAccount.state">
                    <br>
                    <label >Country: </label>
                    <input type="text" v-model="editAccount.country">
                    <br>
                    <label >Email: </label>
                    <input type="email" v-model="editAccount.email">
                    <br>
                    <label >PAN: </label>
                    <input type="text" v-model="editAccount.pan">
                    <br>
                    <label >Contact: </label>
                    <input type="number" v-model="editAccount.contact">
                    <br>
                    <label >Date of birth:</label> 
                    <input type="date" v-model="editAccount.DOB">
                    <br>
                    <label >Account Type: </label>
                    <input type="text" v-model="editAccount.accounttype">
                    <br>
                    <br>
                    <button v-on:click.prevent="editAccountForm">Apply</button>
                    <button  v-on:click.prevent="cancel" >Cancel</button>
            </form>
        </div>
    </div>
</template>
<script>
import axios from "axios";
export default {
    data: function(){
        return {
            id: this.$route.params.username,
            message: " edit Account",
            errorMessage:'',
            editAccount:{
                name:'',
                username:this.$route.params.username,
                password:'',
                address:'',
                state:'',
                country:'',
                email:'',
                pan:'',
                contact:'',
                DOB:'',
                accounttype:''
            }
        }
    },
    mounted: function(){
        this.getAccount()
    },
    methods:{
        getAccount: function(){
            console.log(this.editAccount.username)
            axios.get("http://127.0.0.1:5000/Account/"+this.editAccount.username)
            .then(response =>{
                this.editAccount=response.data[0]
                console.log(this.editAccount)
            }).catch(error=>{
                
                if(error.response.status==404){
                    this.accounts=error.response.data
                }
                
            })
        },
        editAccountForm: function(){
            console.log(this.id)
            axios.put("http://127.0.0.1:5000/Account/"+this.id,this.editAccount)
            .then(response =>{
                console.log(response)
            }).catch(error=>{
                if(error.response.status==404){
                    this.errorMessage=error.response.data.output
                }
                console.log(error.response)
            })
        },
        cancel:function(){
            console.log(this.isEditing)
        }
    },
}
</script>
<style scoped>
.account {
    /* position:absolute; */
    border: 1px solid red;
    width: 99.6%;
    height: 480px;
    padding: 1px;
    text-align: center;
    /* display: inline-table;
    height: 200px;
    float:right;
    z-index: auto;
    display: table-row; */
    /* width:980%;
    height:450px;
    background-color: #0d7963;
    float:right;
    flex-wrap: nowrap; */
}

</style>