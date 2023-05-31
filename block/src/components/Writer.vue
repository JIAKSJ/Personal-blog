
<script setup>



</script>



<template>
    <div class="box">
            <div class="msg" v-for="item in 20">
                <div class="img"><img src="../assets/imags/2023052810143482488.jpg" alt=""></div>
                <div class="k">
                    <h3>Chatgpt4.0发布</h3>
                    <p>啊撒卡卡卡卡卡卡卡卡卡</p>
                </div>
            </div>
           
    </div>
</template>


<style scoped>

.box{
  
   height: 100%;
   width: 60%;
   display: flex;
   flex-direction: column;
}
img{
    width: 100px;
    height: 100px;
}
.msg{
    display: flex;
    margin-top: 10px;
    margin-bottom: 10px;
    background-color: rgb(221, 234, 247); 
    border-radius: 15px;
    overflow: hidden;
}
.k{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}
</style>