//Dichiarazione vue
const {createApp} = Vue;

createApp({
    data() {
        return{
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
                    done: false
                }
            ],
        }
    }

}).mount('#app')