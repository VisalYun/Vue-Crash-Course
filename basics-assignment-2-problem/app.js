const app = Vue.createApp({
    data(){
        return{
            text: '',
            confirmedText: ''
        }
    },
    methods:{
        ShowAlertMsg(){
            alert('Hello World!');
        },
        setText(event){
            this.text = event.target.value;
        },
        setConfirmText(){
            this.confirmedText = this.text;
        }
    }
});

app.mount('#assignment');