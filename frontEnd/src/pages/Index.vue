<script setup>
import { onMounted } from "vue";
import { simpleSlider } from "@/scripts/slideshow.js";

const imagesList = [
  {
    src: "/assets/images/screenshots/colorful_crystals.png",
    link: "",
    alt: "",
    name: "Colorful Crystals"
  },
  {
    src: "/assets/images/screenshots/green_purple_crystals.png",
    link: "",
    alt: "",
    name: "Green Purple Crystals"
  },
  {
    src: "/assets/images/screenshots/naturecave.png",
    link: "",
    alt: "",
    name: "Nature Cave"
  },
  {
    src: "/assets/images/screenshots/dirt.png",
    link: "",
    alt: "",
    name: "Dirt"
  },
  {
    src: "/assets/images/screenshots/icymountain.png",
    link: "",
    alt: "",
    name: "Icy Mountain"
  },
  {
    src: "/assets/images/screenshots/treetops.png",
    link: "",
    alt: "",
    name: "Treetops"
  },
  {
    src: "/assets/images/screenshots/green_crystals.png",
    link: "",
    alt: "",
    name: "Green Crystals"
  },
  {
    src: "/assets/images/screenshots/island.png",
    link: "",
    alt: "",
    name: "Island"
  }
];

onMounted(() => {
  simpleSlider("#hcg-slider-1", imagesList, {
    autoplay: true,
    autoplayDelay: 2000,
    pauseOnHover: true
  });
});
</script>
<style scoped>
.hcg-slider {
    width: 100%;
    max-width: 900px;
    margin: 0 auto;
}
.hcg-slide-container {
    width: 100%;
    height: 400px;
    position: relative;
    overflow: hidden;
    border-radius: 5px;
    border: 1px solid #a0a0a0;
}
.hcg-slider-track {
    height: 100%;
}
.hcg-slides {
    width: 100%;
    height: 100%;
    display: none;
    justify-content: center;
    align-items: center;
}
.hcg-slides img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale(0.8);
}

.hcg-slide-text {
    display: none;
    color: #000000;
    font-size: 20px;
    padding: 3px 10px;
    position: absolute;
    bottom: 0;
    border-radius: 5px;
    left: 50%;
    text-align: center;
    text-shadow: 0 0 2px #ffffff7d;
    background-color: rgb(255 255 255 / 50%);
    display: inline-block;
    transform: translate(-50%, -5px);
    text-transform: capitalize;
    font-weight: bold;
}
#hcg-slide-prev, #hcg-slide-next {
    cursor: pointer;
    position: absolute;
    top: 50%;
    width: auto;
    padding: 16px;
    margin-top: -22px;
    color: #fff;
    font-weight: bold;
    font-size: 18px;
    transition: 0.6s ease;
    border-radius: 0 3px 3px 0;
    text-decoration: none;
    text-shadow: 1px 1px 5px #686868;
    z-index: 2;
}
#hcg-slide-next {
    right: 0;
    border-radius: 3px 0 0 3px;
}
#hcg-slide-prev {
    left: 0;
    border-radius: 0 3px 3px 0;
}

.hcg-slide-dot-control {
    margin-top: 10px;
    text-align: center;
}
.hcg-slide-dot {
    cursor: pointer;
    height: 13px;
    width: 13px;
    margin: 0 2px;
    background-color: #bbb;
    border-radius: 50%;
    display: inline-block;
}
.hcg-slide-dot.dot-active {
    background-color: #717171;
}
/************CSS Animation***********/

.animated {
    animation-name: fadeIn;
    animation-duration: 1s;
}
@keyframes fadeIn {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}
.fadeIn {
    animation-name: fadeIn;
}
</style>

<template>
  <p style="text-align: center; display: none;"> <!--Change the "text-align: center" to "display none" if you want it gone.-->
            Embark on an thrilling journey across vast landscapes, <br>exploring the deepest of caves <br>unseen by
            daylight.
            Discover ancient minerals, untouched by time, <br>as you discover more in this forgotten
            <br>world.
        </p>

        <div id="hcg-slider-1" class="hcg-slider">
            <div class="hcg-slide-container">
                <div class="hcg-slider-track"></div>

                <a href="#" id="hcg-slide-prev">❮</a>
                <a href="#" id="hcg-slide-next">❯</a>
            </div>

            <div class="hcg-slide-dot-control"></div>
        </div>



        <div class="flexbox">
            <div class="container">
                <p class="title">
                    Free and Open Source
                </p>
                <p>
                    You can also become a contributor and make miracles in Cubyz's development.<br>
                    <button onclick="window.location.href='https://github.com/PixelGuys/Cubyz'">Github</button><button
                        onclick="window.location.href='https://github.com/PixelGuys/Cubyz/issues'">Issues</button><button
                        onclick="window.location.href='https://github.com/PixelGuys/Cubyz/wiki/Addons'">Make
                        Addons</button>
                </p>
            </div>
            <div class="container">
                <p class="title">
                    Installation in Four Clicks
                </p>
                <p>
                    The guide can be found <a href="https://github.com/PixelGuys/Cubyz/blob/master/README.md">here</a>.
                </p>
            </div>
        </div>
        <div class="container">
            <p class="title">
                Features
            </p>
            <p>
                Cubyz is a limitless indie game which uses voxels as a base, but don't think that's all! We have a
                ton of our own features. If you want your own features, you can expand the game with addons. <br><br>
                TL;DR: Like a similar cube game, but with more possibilities. <br><br>
                - No height limit <br>
                - No depth limit <br>
                - Farther render distances <br>
                - Immersive fog of all colors <br>
                - Crystals of all colors <br>
                - Colored glass that filters light <br>
                - Mod and addon friendly
            </p>
        </div>
        <div class="container">
            <p class="title">
                Some screenshots
            </p>
            <div class="images">
                <img style="width: 100%" src="/assets/images/screenshots/colorful_crystals.png" alt="">
                <img style="width: 100%" src="/assets/images/screenshots/treetops.png" alt="">
                <img style="width: 100%" src="/assets/images/screenshots/icymountain.png" alt="">
                <img style="width: 100%" src="/assets/images/screenshots/green_crystals.png" alt="">
                <img style="width: 100%" src="/assets/images/screenshots/island.png" alt="">
            </div>
        </div>
</template>
