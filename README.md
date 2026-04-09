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



### Compile and Hot-Reload for Development

```sh
npm install
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```
frontEnd/dist will be the frontEnd pages

backEnd is the nodejs backEnd server

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

