// This is a custom script that turns markdown into html code with css.

// just create a div with the id "turn_this_markdown_to_html_pretty_please" and put the markdown link in there and include this js file!

document.addEventListener("DOMContentLoaded", function () {
    var markdownDiv = document.getElementById("turn_this_markdown_to_html_pretty_please");
    var markdownUrl = markdownDiv.innerText.trim();

    markdownDiv.innerHTML = "<a href=" + markdownDiv.innerHTML + ">View the original source file here</a><br><a href=\"https://github.com/PixelGuys/Cubyz-Website/tree/master\">The html below doesn't look correct? Make a ticket here!</a>";

    // Fetch the Markdown file
    fetch(markdownUrl)
        .then(response => response.text())
        .then(markdown => {
            // Split Markdown into lines
            var lines = markdown.split('\n');
            var containerDiv;

            // Process each line individually
            for (var i = 0; i < lines.length; i++) {
                if (lines[i].startsWith("# ")) {
                    // If line starts with "# ", create a new container div
                    containerDiv = document.createElement("div");
                    containerDiv.classList.add("container");
                    // Create a new h1 element for the title
                    var title = document.createElement("p");
                    title.classList.add("title")
                    title.textContent = lines[i].substring(2); // Remove the "# " prefix
                    containerDiv.appendChild(title);
                    // Create a banana div
                    var bananaDiv = document.createElement("p");
                    containerDiv.appendChild(bananaDiv);
                    markdownDiv.appendChild(containerDiv);
                } else {
                    // If no container div exists, create a new container div
                    if (!containerDiv) {
                        containerDiv = document.createElement("div");
                        markdownDiv.appendChild(containerDiv);
                    }

                    var bananaDivs = containerDiv.querySelectorAll("p");
                    var bananaDiv = bananaDivs[bananaDivs.length - 1];

                    // Check if line is empty
                    bananaDiv.innerHTML += "<br>";
                    if (lines[i].trim() === "") {
                        // If line is empty, add <br> tag
                        bananaDiv.innerHTML += "";
                    } else {
                        // If line is not empty, add text inside banana div
                        if (lines[i].startsWith("## ") || lines[i].startsWith("### ") || lines[i].startsWith("### ")) {
                            bananaDiv.innerHTML += "<span class=\"heading\">"+lines[i]+"</span>";
                        } else {
                            bananaDiv.innerHTML += lines[i].replace(/\[([^\]]+)\]\(([^\)]+)\)/g, '<a href="$2">$1</a>'); // Add new line
                        }
                    }
                }

                // Check if the next line starts with "# "
                // If it does, nullify the container div so that a new one can be created
                if (i + 1 < lines.length && lines[i + 1].startsWith("# ")) {
                    containerDiv = null;
                }
            }
        })
        .catch(error => console.error('Error fetching Markdown:', error));
});
