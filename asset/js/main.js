const { createApp } = Vue;

createApp({
    data() {
        return {
            email: '',
            numberEmail: 10
        }
    },
    methods: {
        getEmailAddress() {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((response) => {
                this.email = response.data.response;
                console.log('la mail è', this.email);
            })
        }

    },
    created() {
        this.getEmailAddress();
    },
    mounted() {

        console.log(this.email);
    }
}).mount('#app'); 