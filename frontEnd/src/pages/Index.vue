<script setup>
import { onMounted } from "vue";
import { simpleSlider } from "../../public/scripts/slideshow.ts";

const imagesList = [
    {
        src: "/assets/images/screenshots/rainbow-trees.png",
        link: "",
        alt: "",
        name: "Rainbow Trees"
    },
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
        src: "/assets/images/screenshots/icymountain.png",
        link: "",
        alt: "",
        name: "Icy Mountain"
    },
    {
        src: "/assets/images/screenshots/green_crystals.png",
        link: "",
        alt: "",
        name: "Green Crystals"
    },
];

onMounted(() => {
  simpleSlider("#hcg-slider-1", imagesList, {
    autoplay: true,
    autoplayDelay: 2000,
    pauseOnHover: true
  });
});
</script>

<template>
    <h1 style="font-size: 70px; text-align: center;">Cubyz</h1>
    <p style="text-align: center; font-size: 22px;"> <!--Change the "text-align: center" to "display none" if you want it gone.-->
        Open Source <b>Infinite</b> Voxel Game
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
                    The guide can be found <a href="https://wiki.cubyz.net/index.php/Installation_Guide">here</a>.
                </p>
            </div>
        </div>

        <p style="text-align: center;"> <!--Change the "text-align: center" to "display none" if you want it gone.-->
            Embark on an thrilling journey across vast landscapes, <br>exploring the deepest of caves <br>unseen by
            daylight.
            Discover ancient minerals, untouched by time, <br>as you discover more in this forgotten
            <br>world.
        </p>

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
</template>
