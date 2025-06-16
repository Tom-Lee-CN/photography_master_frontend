<script>
</script>

<template>
    <div :class="{ 'header-container': true }">
        <div :class="{ 'header-box': true }">
            <div :class="{ 'header-left': true }"><a href="javascript:;">摄影大师</a></div>
            <div :class="{ 'header-center': true }">
                <ul :class="{ 'tag-list': true }">
                    <li><a href="javascript:;">首页</a></li>
                    <li><a href="javascript:;">探索</a></li>
                    <li><a href="javascript:;">标签</a></li>
                    <li><a href="javascript:;">摄影师</a></li>
                    <li><a href="javascript:;">热门活动</a></li>
                </ul>
            </div>
            <div :class="{ 'header-right': true }">
                <span :class="{ 'search-container': true }">
                    <input type="text" placeholder="请输入搜索内容" maxlength="40"></input>
                    <i :class="{ iconfont: true, 'icon-search': true }"></i>
                </span>
                <span :class="{ 'user-sgin': true }">登录/注册</span>
            </div>
        </div>
    </div>
</template>

<style scoped>
@import url('../style/common.css');
@import url('../assets/iconfont/iconfont.css');

.header-container {
    width: 100%;
    line-height: 6vh;
    margin: 0 auto;
    margin: 0 auto;
    background-color: #000;
    color: #fff;
}

a {
    color: #fff;
    text-decoration: none;
}

.header-box {
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    flex: 1;
}


.header-left {
    font-size: 1.2rem;
}

.tag-list {
    display: flex;
    justify-content: space-around;
    column-gap: 1rem;
    margin: 0;
    padding: 0;
}

.tag-list a,
.user-sgin {
    cursor: pointer;
    color: #bbbbbb;
    transition: color 0.3s;
}

.tag-list a:hover,
.user-sgin:hover {
    color: #fff
}

.header-right>span {
    margin-right: 1rem;
}


.search-container {
    display: inline-block;
    position: relative;
    width: 10rem;
    height: 1.8rem;
    line-height: 1.8rem;
    background-color: #dadada;
    border-radius: 5px;
}

.header-right input {
    outline: none;
    width: 8.5rem;
    border: 0;
    text-indent: 0.5rem;
    background-color: transparent;
}

.icon-search {
    position: absolute;
    top: 0%;
    right: 3%;
    color: #000;
}

.icon-search:hover {
    cursor: pointer;
}


@media screen and (max-width:768px) {

    .header-center {
        display: none;
    }
}
</style>
