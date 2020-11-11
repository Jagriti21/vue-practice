var one = new Vue({
    el:"#vueapp",
    data:{
        name:"Jagriti",
        location:"Lucknow",
        friendname:'oneway binding',
        friendlocation:''
    },
    methods:{
        welcome: function(){
            return this.name + ", Hello from Vue! I am from " + this.location  
        },
        message(msg){
            return "Day 01 Message: " + msg
        },
        getFriendLocation: function(){
            return "My friend is from " + this.friendlocation
        }
    }
})


var two = new Vue({
    el:"#anothervue",
    data:{
        name:"another vue"
    }
})

