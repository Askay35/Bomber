<template>
    <Header></Header>
    <div class="d-flex flex-column align-items-center default-container flex-grow-1">
        <router-view></router-view>
    </div>
    <Footer></Footer>

    <div class="position-fixed bottom-0 end-0 p-3 w-75">
        <Toast v-for="item in toasts" :class="item.class_name" :title="item.title" :text="item.text" />
    </div>
</template>

<script>
    import Footer from "../blocks/Footer";
    import Header from "../blocks/Header";
    import Toast from "../ui/Toast";
    import {ref} from "vue";

    export default {
        name: "Default",
        components: {Toast:Toast,Header: Header, Footer: Footer},
        data(){
            return{
              toasts:ref([])
            };
        },
        provide(){
            return {
                toasts:this.toasts,
                addToast:(title, text, class_name)=>{
                    this.toasts.push({title:title,text:text,class_name:class_name});
                }
            };
        },
    }
</script>

<style>
    .default-container {
        padding: 140px 12px 100px 12px;
    }
</style>
