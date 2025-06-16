<script>
export default {
    data() {
        return {
            currentIndex: 0,
            slides: [
                {
                    id: 0,
                    image: '../assets/image/slideshow-img/1.jpg',
                    title: '',
                },
                {
                    id: 1,
                    image: '../assets/image/slideshow-img/2.jpg',
                    title: '',
                },
                {
                    id: 2,
                    image: '../assets/image/slideshow-img/3.jpg',
                    title: '',
                },
                {
                    id: 3,
                    image: '../assets/image/slideshow-img/4.jpg',
                    title: '',
                }
            ],
        };
    },

    methods: {
        prevSlide() {
            if (this.currentIndex > 0) {
                this.currentIndex--;
            }
        },
        nextSlide() {

        }
    }
}



</script>
<template>
    <div class="wrapper">
        <div class="slideshow-container ">
            <div class="slideshow-box">
                <ul class="image-list" ref="imgBox">
                    <li><a href="javascript:;"><img src="../assets/image/slideshow-img/1.jpg"></a></li>
                </ul>
            </div>
        </div>
    </div>
</template>



<style scoped>
@import url('../style/common.css');

.slideshow-container {
    width: 90%;
    margin: 3rem auto;
}

.slideshow-box,
.image-list {
    width: 100%;
}

.image-list img {
    width: 100%;
    object-fit: cover;
}

.image-list {
    display: flex;

    /* justify-content: flex-start; */
}

.image-list>li {
    width: 100%;
    flex-shrink: 0;
}

@media screen and (max-width:1280px) {
    .wrapper {
        width: 100%;
    }

    .slideshow-container {
        width: 95%;
        margin: 1rem auto;
    }
}

@media screen and (max-width:768px) {
    .wrapper {
        width: 100%;
    }

    .slideshow-container {
        width: 95%;
        margin: 0.5rem auto;
    }
}
</style>