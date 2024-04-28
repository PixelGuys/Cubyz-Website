# A website for Cubyz

## Design Language

There are a few important design rules that can't be ignored.
- The website needs to look like the UI in Cubyz, even smaller changes like text height will be the same
- Textures used need to be Cubyz related or made yourself (Fonts ignore this rule)

## 🎨 Markdown to HTML Converter 🎨

The file found in ```scripts/markdown_to_html_turner.js``` will transform any markdown file into a html version.
You can use this by putting this in your html file including your markdown url. You also need the script mentioned above.
```html
<main id="turn_this_markdown_to_html_pretty_please">
    https://raw.githubusercontent.com/PixelGuys/Cubyz/master/README.md
</main>
```