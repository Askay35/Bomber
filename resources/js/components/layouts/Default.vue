<template>
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
</template>

<script>
    import Footer from "../blocks/Footer";
    import Header from "../blocks/Header";

    export default {
        name: "Default",
        components:{Header:Header, Footer:Footer}
    }
</script>

<style>

</style>
