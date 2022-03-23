<template>
    <router-view></router-view>
</template>

<script>
    import axios from 'axios'

    export default {
        name: "App",
        inject:['csrf'],
        created() {
            axios.defaults.headers.common['X-CSRF-TOKEN'] = this.csrf
        },
    }
</script>
