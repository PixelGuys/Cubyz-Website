// This is a custom script that turns markdown into html code with css.

// just create a div with the id "turn_this_markdown_to_html_pretty_please" and put the markdown link in there and include this js file!

document.addEventListener("DOMContentLoaded", function () {
    var markdownDiv = document.getElementById("turn_this_markdown_to_html_pretty_please");
    var markdownUrl = markdownDiv.innerText.trim();

    markdownDiv.innerHTML = "<a href=" + markdownDiv.innerHTML + ">View the original source file here</a><br><a href=\"https://github.com/PixelGuys/Cubyz-Website/tree/master\">The html below doesn't look correct? Make a ticket here!</a>";

    fetch(markdownUrl)
        .then(response => response.text())
        .then(markdown => {
            var lines = markdown.split('\n');
            var containerDiv;
            for (var i = 0; i < lines.length; i++) {
                if (lines[i].startsWith("# ")) {
                    containerDiv = document.createElement("div");
                    containerDiv.classList.add("container");
                    var title = document.createElement("p");
                    title.classList.add("title")
                    title.textContent = lines[i].substring(2); 
                    containerDiv.appendChild(title);
                    var bananaDiv = document.createElement("p");
                    containerDiv.appendChild(bananaDiv);
                    markdownDiv.appendChild(containerDiv);
                } else {
                    if (!containerDiv) {
                        containerDiv = document.createElement("div");
                        markdownDiv.appendChild(containerDiv);
                    }
                    var bananaDivs = containerDiv.querySelectorAll("p");
                    var bananaDiv = bananaDivs[bananaDivs.length - 1];
                    bananaDiv.innerHTML += "<br>";
                    if (lines[i].trim() === "") {
                        bananaDiv.innerHTML += "";
                    } else {
                        if (lines[i].startsWith("## ") || lines[i].startsWith("### ") || lines[i].startsWith("### ") || lines[i].startsWith("#### ")) {
                            bananaDiv.innerHTML += "<span class=\"heading\">"+lines[i].replace("#", "").replace("#", "").replace("#", "").replace("#", "")+"</span>";
                        } else {
                            bananaDiv.innerHTML += lines[i].replace(/\[([^\]]+)\]\(([^\)]+)\)/g, '<a href="$2">$1</a>'); 
                        }
                    }
                }
                if (i + 1 < lines.length && lines[i + 1].startsWith("# ")) {
                    containerDiv = null;
                }
            }
        })
        .catch(error => console.error('Error fetching Markdown:', error));
});
