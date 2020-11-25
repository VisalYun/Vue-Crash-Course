const app = Vue.createApp({
    data() {
        return{
            name: 'Visal Yun',
            age: 20,
            imgUrl: 'https://wallpaperaccess.com/full/1897374.png',
        }
    },
    methods: {
        computeNext5yearsAge(){
            return this.age + 5;
        },
        computeRandomNum(){
            return Math.random();
        }
    }
});

app.mount('#assignment');