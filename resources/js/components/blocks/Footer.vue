<template>
    <footer>
        <div class="game-button"><img src="/images/ui/dice5.svg"></div>
        <div class="game-button"><img src="/images/ui/grid3x3.svg"></div>
    </footer>
</template>

<script>
    export default {
        name: "Footer",
    }
</script>

<style lang="scss">
    @import "resources/scss/vars";

    .game-button{
        display: flex;
        align-items: center;
        justify-content: center;
        flex: 6;
        background-color: #fff;
        &:first-child{
            border-right: 2px solid $border-gray;
        }
        &:hover{
            background-color: $global-blue;

        }
        &:hover > img{
            filter: brightness(200%) contrast(200%) saturate(0%)
        }
    }

    footer {
        border-top: 2px solid $border-gray;
        bottom: 0;
        left: 0;
        display: flex;
        position: fixed;
        width: 100%;
        height: 90px;
    }
</style>
