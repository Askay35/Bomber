<template>
    <header>
        <nav class="navbar">
            <div class="container-fluid justify-content-between">
                <router-link class="navbar-brand d-flex align-items-center" to="/">
                    <img src="/images/ui/logo.svg" width="45" height="45">
                    BOMBER
                </router-link>
                <div id="header__menu-toggle" onclick="document.getElementById('header__menu').classList.toggle('show')">
                    <img src="/images/ui/list.svg" width="50" height="50">
                </div>
            </div>
            <div class="header__money d-flex justify-content-between align-items-center">
                <div class="b-btn b-btn-blue">
                    Пополнить
                </div>
                <div class="b-btn">
                    Вывести
                </div>
            </div>
            <div id="header__menu" class="b-dropdown w-100 flex-column d-flex">
                <div class="b-dropdown-item"><router-link to="/faq">FAQ</router-link></div>
                <div class="b-dropdown-item"><router-link to="/ref">Рефералы</router-link></div>
                <div class="b-dropdown-item"><a @click.prevent="logout">Выйти</a></div>
            </div>
        </nav>
    </header>
</template>

<script>
    export default {
        name: "Header",
    }
</script>

<style lang="scss">
    @import "resources/scss/vars";
    .header__money{
        width: 100%;
        padding: 10px 10px 5px 10px;
        .b-btn{
            width: 49%;
            padding: 10px 0;
        }
    }
    header {
        z-index: 1000;
        top: 0;
        left: 0;
        position: fixed;
        width: 100%;
        height: 66px;
        &,.navbar,.container-fluid,.header__money{
            background-color: #fff;
        }
        .navbar{
            border-bottom: 1px solid $border-gray;
            position: relative;
            -webkit-box-shadow: 0px 0px 6px 0px #bfbfbf;
            box-shadow: 0px 0px 6px 0px #bfbfbf;
        }
        .container-fluid{
            padding: 0 5px;
        }
        .navbar-brand {
            font-weight: 500;
            font-size: 24px;
        }
    }

    #header__menu{
        z-index: -1;
        position: absolute;
        top:-110%;
        font-size: 1.2em;
        left: 0;
        transition: all .25s ease-out;
        display: flex;
        .b-dropdown-item{
            width: 100%;
            background-color: #F2F2F2;
            border-bottom: 1px solid $border-gray;
            &:hover{
                background-color: $bg-gray;
            }
            a{
                display: flex;
                justify-content: center;
                padding: 10px 25px;
                align-items: center;
                width: 100%;
                height: 100%;
            }
        }
        &.show{
            top:100%;
            display:flex;
        }
    }
</style>
