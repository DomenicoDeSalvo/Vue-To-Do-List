//Dichiarazione vue
const {createApp} = Vue;

createApp({
    data() {
        return{
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
        }
    },

    methods:{
        deleteTask(i){
            this.tasks.splice(i,1)
        }

    }

}).mount('#app')