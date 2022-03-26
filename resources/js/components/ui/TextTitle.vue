<template>
    <div>
        <h6>
            <strong v-html="title">
            </strong>
        </h6>
        <div v-html="text"/>
    </div>
</template>

<script>
    export default {
        name: "TextTitle",
        props:{text:String,title:String}
    }
</script>
