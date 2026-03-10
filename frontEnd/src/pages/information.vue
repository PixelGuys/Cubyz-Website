
<script setup lang="ts">
import { onMounted, ref } from 'vue';
    const items = ref<{message:string,contentHTML:string}[]>([])
    onMounted(()=>{

        const markdownURL =  "https://raw.githubusercontent.com/PixelGuys/Cubyz/master/README.md";
        fetch(markdownURL).then(response => response.text()).then(markdown =>{
            var lines = markdown.split('\n');
            var containerDiv = null;
            for (var i = 0; i < lines.length; i++) {
                var line = lines[i];
                if(line !== undefined){
                    if (line.startsWith("# ")) {
                        var title = line.substring(2); 
                        items.value.push({
                            message:title,
                            contentHTML:""
                        });
                        
                    } else {
                        var lastItem = items.value[items.value.length-1];
                        if(!lastItem){
                            items.value.push({message:"",contentHTML:""})
                        }
                        if(lastItem){
                            lastItem.contentHTML += "<br>"
                            if (line.trim() !== "") {
                                if (line.startsWith("## ") || line.startsWith("### ") || line.startsWith("### ") || line.startsWith("#### ")) {
                                    lastItem.contentHTML += "<span class=\"heading\">"+line.replace("#", "").replace("#", "").replace("#", "").replace("#", "")+"</span>";
                                } else {
                                    lastItem.contentHTML += line.replace(/\[([^\]]+)\]\(([^\)]+)\)/g, '<a href="$2">$1</a>'); 
                                }
                            }
                        }
                    }
                }
            }
        });
    })
    
    
</script>
<template>
    <div v-if="items.length==0">
        <a href=" + markdownDiv.innerHTML + ">View the original source file here</a><br><a href="https://github.com/PixelGuys/Cubyz-Website/tree/master">The html below doesn't look correct? Make a ticket here!</a>
    </div>
    <li v-for="item in items" style="list-style-type: none">
        <div class="container">
            <p class="title">{{ item.message }}</p>
            <p v-html="item.contentHTML" ></p>
        </div>
    </li>
    <div id="popup" style="display: none;">
        <div id="popup-background"></div>
        <div id="agree-popup">
            <p class="title">Cookie preferences</p>
            <p>
                To use this feature, please allow this webpage to collect cookies. This allows the website to save
                preferences. We do not share information to any company.<br><br>Do you want to enable cookies on this
                page?<br>
                <button onclick="allowCookies()">Yes</button>
                <button onclick="disallowCookies()">No, take me back</button>
                <!-- Change this urself next time pls -->
                <!-- Go to the cookie.js file to change cookie behavour -->
            </p>
        </div>
    </div>
</template>
