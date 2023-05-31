
<script setup>
import Typed from 'typed.js'
import { onMounted } from 'vue';

onMounted(() => {
    var typed = new Typed('#change', {
        strings: ['Hello 我是JIA,这是我的第一个项目'],
        typeSpeed: 50,
    });
})



</script>

<template>
    <div class="box">
        <div id="change">
        </div>
    </div>
</template>


<style scoped>
.box {
   width: 100%;
   height: 30px;
}

#change {
    
    line-height: 30px;
    display: inline;
    text-align: center;
    padding-left: 38%;
    color: rgb(236, 139, 13);
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    
}
</style>