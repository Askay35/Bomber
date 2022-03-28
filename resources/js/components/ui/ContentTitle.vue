<template>
    <div>
        <h6>
            <strong>
                <slot name="title"></slot>
            </strong>
        </h6>
        <slot name="content"></slot>
    </div>
</template>

<script>
    export default {
        name: "ContentTitle",
    }
</script>
