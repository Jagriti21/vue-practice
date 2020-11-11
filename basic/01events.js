var one = new Vue({
    el:"#vueapp1",
    data:{
        score: 0,
        x: 0,
        y: 0
    },
    methods:{
        increment: function(event){
            console.log(event)
            this.score++
        },
        decrement: function(event){
            console.log(event)
            this.score--
        },
        captureXYPositionOfMouse:function(event){
            console.log(event)
            this.x = event.offsetX
            this.y = event.offsetY
        }
    }
})