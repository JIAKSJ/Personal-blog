<script setup>
import Writer from './Writer.vue';
import Aside from './Aside.vue'
</script>

<template>

    <div class="box">
        <Writer></Writer>
        <Aside></Aside>
    </div>

</template>

<style scoped>
.box{
    display: flex;
    justify-content: space-around;
}
</style>