<template>
    <Header></Header>
    <div class="d-flex flex-column align-items-center default-container flex-grow-1">
        <router-view></router-view>
    </div>
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
    .default-container{
        padding: 131px 10px 90px 10px;
    }
</style>
