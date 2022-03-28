<template>
    <div class="toast show" role="alert" aria-live="assertive" aria-atomic="true">
        <div class="toast-header">
            <strong class="me-auto">{{title}}</strong>
            <button type="button" @click="deleteToast" class="btn-close btn-close-white"></button>
        </div>
        <div class="toast-body">
            {{text}}
        </div>
    </div>
</template>

<script>
    export default {
        name: "Toast",
        props:{title:String,text:String},
        inject:['toasts'],
        data(){
            return{
                toast_id:0
            }
        },
        created() {
            this.toast_id = this.toasts.length-1;
        },
        methods:{
            deleteToast(){
                this.toasts.splice(this.toast_id,1);
            }
        }
    }
</script>

<style lang="scss">
    .toast{
        margin-top: 5px;
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
        overflow: hidden;

        .toast-header {
            border-bottom: none;
            background-color: #6c6c6c;
        }
        &,.toast-body {
            background-color: #828282;
        }

        & *{
            color: #fff !important;
        }
        &.success {
            .toast-header {
                background-color: #00bd00;
            }
            &,.toast-body {
                background-color: #00c900;
            }
            background-color: #00c900;
        }

        &.error {
            .toast-header {
                background-color: #bd0000;
            }
            &,.toast-body {
                background-color: #c90000;
            }
        }
    }
</style>
