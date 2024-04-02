//Dichiarazione vue
const {createApp} = Vue;

createApp({
    data() {
        return{
            done: false,
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


    }

}).mount('#app')