<template>
    <div>
        <h6 class="mt-3"><strong>
            <template v-if="title">{{title}}</template>
            <template v-else>Title</template>
        </strong></h6>
        <div class="input-group mb-2 col-12 p-0">
            <input type="text" :id="inputId" :value="inputText" :disabled="disabled" class="form-control bg-white">
            <div class="b-btn-blue" @click="$emit('button-action')">
                <template v-if="buttonText">
                    {{buttonText}}
                </template>
                <template v-else>Button</template>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "InputTitleButton",
        props: {inputId:String, inputText:String,disabled:Boolean,buttonText:String, title:String}
    }
</script>
