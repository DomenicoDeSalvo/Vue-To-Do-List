//Dichiarazione vue
const {createApp} = Vue;

createApp({
    data() {
        return{
            done: false,
            // Array contente le task
            tasks:[
                {
                    text: 'Fare gli esercizi',
                    done: false
                },
                {
                    text: 'Preparare il pranzo',
                    done: false
                },
                {
                    text: 'Lavare la macchina',
                    done: true
                }
            ],
            //Nuova Task
            inputValue:''
        }
    },

    methods:{
        deleteTask(i){
            this.tasks.splice(i,1)
        },

        addTask(){
            this.tasks.push(
                {
                    text: this.inputValue,
                    done: false
                }
            )
        }
    }

}).mount('#app')