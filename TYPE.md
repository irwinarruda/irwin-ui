# Type

Four families, each with one job. The marks in [BRAND.md](BRAND.md) are drawn by hand, so type is chosen to sit next to them, not the other way around. Type is the same in every theme: switching from Barro to Favo changes colors, never fonts.

| Family                                                         | Job                                                          | Weights            | Used in                                         |
| -------------------------------------------------------------- | ------------------------------------------------------------ | ------------------ | ----------------------------------------------- |
| [Chakra Petch](https://fonts.google.com/specimen/Chakra+Petch) | Titles and headings from 20 px up, and navigation tabs       | 500 tabs, 600 titles | irwinarruda.com, The Chatbot's page titles   |
| [JetBrains Mono](https://www.jetbrains.com/lp/mono/)           | Details: dates, tags, reading time, labels and code          | 400, 500           | Everywhere                                      |
| Georgia                                                        | Long reading: essay paragraphs, lists and quotes             | 400, 700 for bold  | irwinarruda.com                                 |
| [IBM Plex Sans](https://www.ibm.com/plex/)                     | Interface text in apps: buttons, inputs, lists, chat replies | 400, 500, 600      | The Chatbot                                     |

Chakra Petch, JetBrains Mono and IBM Plex Sans are under the SIL Open Font License. Georgia ships with macOS, Windows and iOS; elsewhere it falls back to Times New Roman, which keeps the same role.

## Why Chakra Petch

The wordmarks are drawn on a hexagonal grid: the bowls of `a`, `b`, `c` and `d` are cut at 60° instead of curved. Chakra Petch is the one common typeface whose round letters are cut at the corners the same way, so "Arruda" set in it reads as a sibling of the drawn `arruda`.

These were compared on the real pages and rejected:

| Family         | Why not                                                                         |
| -------------- | ------------------------------------------------------------------------------- |
| Georgia        | Bookish and high-contrast next to monoline lettering; it stays for reading only |
| JetBrains Mono | The old terminal look, and long titles wrap early                               |
| Space Grotesk  | The runner-up: technical, but round where the marks are cut                     |
| Oxanium        | Also cut at the corners, but leans science fiction                              |
| Geist          | Clean and neutral, with no relation to the marks                                |
| IBM Plex Sans  | Right for interface text, too plain for titles                                  |

Swapping the title font is one line wherever `--font-display` is defined, so this choice can be revisited.

## Rules

1. **Sentence case for titles.** Never set Chakra Petch in capitals or at 700: heavy or uppercase, it starts to read like a game.
2. **Chakra Petch from 20 px up.** Below that, use the interface sans or the mono. Navigation tabs are the one exception, at 15 px and weight 500, because they act as headings for the page.
3. **The hand-drawn lettering is not a font.** It has about eleven lowercase letters and exists only for marks.
4. **Hierarchy comes from size and weight; color marks the kind of text.** See [Reading surfaces](COLOR.md#reading-surfaces).

## Sizes

irwinarruda.com, in pixels:

| Element                                   | Family          | Phone | Desktop |
| ----------------------------------------- | --------------- | ----- | ------- |
| Page title, such as Notes                 | Chakra Petch    | 26    | 38      |
| Essay title and the About name            | Chakra Petch    | 32    | 38      |
| Section heading in an essay               | Chakra Petch    | 26    | 26      |
| Subheading in an essay                    | Chakra Petch    | 22    | 22      |
| Post title in a list                      | Chakra Petch    | 22    | 26      |
| Navigation tabs                           | Chakra Petch    | 15    | 15      |
| Essay text                                | Georgia         | 20    | 20      |
| Dates, tags, descriptions                 | JetBrains Mono  | 14    | 16      |

**Change the font, not the hierarchy.** Chakra Petch is narrower and lighter than JetBrains Mono or Georgia, so at the same size it looks about 5 to 10% smaller. When it replaced them, every title kept its old size plus 2 px. Doubling down on bigger titles broke the hierarchy instead of fixing the font.

## Loading

With Next.js, load each family once at the root and expose it as a CSS variable:

```ts
import { Chakra_Petch, JetBrains_Mono } from "next/font/google";

const chakraPetch = Chakra_Petch({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-chakra-petch",
});
```

```css
@theme {
  --font-display: var(--font-chakra-petch), system-ui, sans-serif;
}
```

- **Preload only what you use.** `subsets` and `weight` decide which files every page preloads; an unused weight or subset is a wasted request on every visit.
- **The `latin` subset covers Portuguese.** `ã`, `ç`, `é` and `ô` are all in it.
- **Self-hosting works the same way:** one `woff2` per weight in the `latin` range, declared with `@font-face`, and the same `--font-display` variable.
