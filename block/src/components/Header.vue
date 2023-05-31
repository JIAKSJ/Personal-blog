<template>
    <div class="box">
       

        <div class="l">
            <div class="logo"><h1>J</h1></div>
            <div class="w">
                <span>首页</span>
                <span>百日css</span>
                <span>资源分享</span> 
                <span>个人简介</span>
            </div>
        </div>

        <div>
            <span>登录</span>
            <span>注册</span>
        </div>

    </div>

    
</template>

<style scoped>
*{
    scroll-behavior: smooth;
    box-sizing: border-box;
}
.box {
    background-color: rgb(244, 247, 250);
    height: 60px;
    width: 100%;
    box-shadow: 1px 1px 1px 1px rgb(228, 222, 222);
    align-items: center;
    display: flex;
    justify-content: space-between;
    padding: 0 8rem;
}

.con{
    width: 80%;
}
.l{
    display: flex;
    align-items: center;
    gap: 60px;
}
.w span{
    gap: 40px;
 
}
.box > :nth-of-type(1) > :nth-of-type(2) {
				display: flex;
				/* 导航之间的距离 */
				gap: 50px;
			}
</style>