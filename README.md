<p align="center">
  <img src="brand/irwin/irwin-arruda-dark.svg#gh-dark-mode-only" alt="Irwin Arruda" width="360">
  <img src="brand/irwin/irwin-arruda-light.svg#gh-light-mode-only" alt="Irwin Arruda" width="360">
</p>

<h3 align="center">The design system behind Irwin Arruda's sites, apps and tools.</h3>

<p align="center">
  <a href="COLOR.md">Color</a> ·
  <a href="TYPE.md">Type</a> ·
  <a href="BRAND.md">Brand</a> ·
  <a href="PATTERNS.md">Patterns</a>
</p>

<p align="center">
  <img src="assets/family-dark.svg#gh-dark-mode-only" alt="The marks of Favo, Barro, The Chatbot and Irwin Arruda, with their small marks and icons" width="860">
  <img src="assets/family-light.svg#gh-light-mode-only" alt="The marks of Favo, Barro, The Chatbot and Irwin Arruda, with their small marks and icons" width="860">
</p>

irwin-ui is the set of rules that [irwinarruda.com](https://www.irwinarruda.com), The Chatbot, favo-cli and the two themes follow, so they look like they come from the same hands. It holds the standards and the marks. It does not hold a palette: a theme does that.

## What is here

| Document                   | What it covers                                                                                   |
| -------------------------- | ------------------------------------------------------------------------------------------------ |
| [COLOR.md](COLOR.md)       | What every theme provides, how color works on app screens and reading surfaces, and the contrast every theme has to pass |
| [TYPE.md](TYPE.md)         | Chakra Petch, JetBrains Mono, Georgia and IBM Plex Sans: what each is for, sizes and loading     |
| [BRAND.md](BRAND.md)       | The hand-drawn lettering, its spacing table, and the marks of Favo, Barro, The Chatbot and Irwin Arruda |
| [PATTERNS.md](PATTERNS.md) | Navigation, theme switching, focus, chips, lists and cards                                       |
| [`brand/`](brand)          | Every mark, icon and avatar, as SVG, PNG and ICO                                                 |

## Themes

A theme is a palette with editor ports: it decides the colors, and irwin-ui decides how they are used. Themes are products of their own. Each has its spec, its app palette and its guide, and each works without this repository.

| Theme                                                   | Looks like              | Variants                   |
| ------------------------------------------------------- | ----------------------- | -------------------------- |
| [Barro](https://github.com/irwinarruda/barro-theme)     | A brick on cool slate   | Slate and Kaolin           |
| [Favo](https://github.com/irwinarruda/favo-theme)       | Honey on warm gray      | Honey, Wax, Smoke and Veil |

Every theme fills the same roles and the same tokens, so a product can use one, offer several, or get a new one later without changing its components. [COLOR.md](COLOR.md#what-a-theme-provides) says what a theme has to provide.

## Who follows it

| Product                                                           | Theme                          | Mark                           |
| ----------------------------------------------------------------- | ------------------------------ | ------------------------------ |
| [irwinarruda.com](https://www.irwinarruda.com)                    | Barro                          | Irwin Arruda                   |
| [The Chatbot](https://github.com/irwinarruda/the-chatbot-v2)      | Barro, with Favo as an option  | The Chatbot                    |
| [favo-cli](https://github.com/irwinarruda/favo-cli)               | Favo, in the terminal          | Favo                           |
| [favo-theme](https://github.com/irwinarruda/favo-theme)           | It is one                      | Favo                           |
| [barro-theme](https://github.com/irwinarruda/barro-theme)         | It is one                      | Barro                          |

## Using it

There is no package yet. A project follows the documents, and copies what it needs:

- **Colors** come from the theme: copy `app/<theme>.css`, and `app/tailwind.css` with Tailwind v4, from the theme's repository.
- **Marks** come from [`brand/`](brand): copy the files, and never edit or redraw them. [BRAND.md](BRAND.md#changing-a-mark) lists where each mark is copied to.
- **Fonts** are loaded by the project, as in [TYPE.md](TYPE.md#loading).

## Working on it

Use Bun `1.3.14`. There are no dependencies to install.

- `bun run build` writes every SVG in `brand/` and `assets/` from `src/brand.ts`.
- `bun run check` fails when a generated file is stale, when a PNG or ICO is missing, or when the spacing table stops setting Favo's logo the way it was drawn by hand. CI runs it on every push.
- `bun run render` redraws every PNG and ICO from its SVG. It needs macOS and Google Chrome.

## Next

- A React component library on top of [shadcn/ui](https://ui.shadcn.com), built from these documents.
- The tokens and the marks as a package, so projects stop copying files.

## License

[MIT](LICENSE) for the code and the documents. The marks in `brand/` identify Irwin Arruda and his projects, and are not covered by it.
