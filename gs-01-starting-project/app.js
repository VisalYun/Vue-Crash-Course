/*
    With Vue - define the speific DOM endpoint with specific data to be displayed
*/
Vue.createApp({
    data() {
        return {
            goals: [],
            enteredValue: '',
        };
    },
    methods: {
        addGoal(){
            this.goals.push(this.enteredValue);
        },
    },
}).mount('#app');


/*
    Plain JS
*/

// const buttonEl = document.querySelector('button');
// const inputEl = document.querySelector('input');
// const listEl = document.querySelector('ul');

// const addGoal = () => {
//     const enteredValued = inputEl.value;
//     const listItemEl = document.createElement('li');
//     listItemEl.textContent = enteredValued;
//     listEl.appendChild(listItemEl);
//     inputEl.value = '';
//  }

//  buttonEl.addEventListener('click', addGoal);