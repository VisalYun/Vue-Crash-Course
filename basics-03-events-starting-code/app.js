const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: ''
    };
  },
  methods: {
    submitForm() {
      alert('Submitted!');
    },
    setName(event, nickname){
      this.name = event.target.value + ' ' + nickname;
    },
    add(num) {
      this.counter+=num;
    },
    reduce(num){
      this.counter-=num;
    }
  }
});

app.mount('#events');
