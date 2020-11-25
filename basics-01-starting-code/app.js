const app = Vue.createApp({
    data() {
        return {
            courseGoalA: 'Finished!',
            courseGoalB: 'Do Carry On!',
            vueLink: 'https://v3.vuejs.org/'
        };
    },
    methods: {
        outputGoal() {
            const randomNumber = Math.random();
            if(randomNumber < 0.5){
                return this.courseGoalB;
            }
            else{
                return this.courseGoalA;
            }
        }
    }
});

app.mount('#user-goal');