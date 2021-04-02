var app= new Vue({
    el:'#app',
    data:{
        buneo:0,
    },
    computed: {
       buliding: function(){
            return (this.buneo*40/508000).toFixed(3);
        }
    }
    
})

test.onclick = function(){
    document.body.scrollTop = document.documentElement.scrollTop = 0;
}
