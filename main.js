var app = new Vue({
    el: '#app',
    data: {
        data: [],
        num: 0,
    },
    methods: {
        nextone() {
            this.num++
                if (this.num >= 16) {
                    alert("所有用户信息显示完毕")
                }
        }
    },
    beforeCreate() {},
    created() {
        console.log('进入mounted里面了')
        axios({
            url: 'http://localhost:5001/vuestudy',
            method: 'get',
        }).then(response => {
            // console.log(response.data[0].username)
            app.data = response.data
                // console.log(data)
        }).catch(error => {
            console.log(error)
        })
    },
    beforeMount() {
        //这是axios的get请求
    },
    // 数据  data methods 都拿到了  数据也到了 dom元素 页面上了  
    mounted() {},
    //数据更新前
    beforeUpdate() {},
    //数据更新后
    updated() {},
    //页面销毁之前
    beforeDestroy() {},
    //页面销毁之后
    destroyed() {}


})