const { createApp } = Vue;

createApp({
    data() {
        return {
            emailList: [],
            email: '',
            numberEmail: 10,
        }
    },
    methods: {
        getEmailAddress() {
            const listaMail = [];
            for (let i = 0; i < this.numberEmail; i++) {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((response) => {
                    this.email = response.data.response;
                    console.log('la mail è', this.email);
                    listaMail.push(this.email);
                    if (i === this.numberEmail - 1) {
                        this.emailList = [...listaMail]
                    }
                    console.log(this.emailList);
                })
            }
            console.log(listaMail);

        }

    },
    created() {
        this.getEmailAddress();
    },
    mounted() {
        console.log(this.email);
    }
}).mount('#app'); 