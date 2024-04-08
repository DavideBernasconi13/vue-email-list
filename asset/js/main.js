const { createApp } = Vue;

createApp({
    data() {
        return {
            test: 'test',
        }
    },
    methods: {

    },
    created() {
    },
    mounted() {
        console.log(this.test)
    }
}).mount('#app'); 