# Patterns

Solutions that came out of building [irwinarruda.com](https://www.irwinarruda.com) and The Chatbot. Tokens and roles are the ones in [COLOR.md](COLOR.md#tokens), so every pattern works in any theme; type is in [TYPE.md](TYPE.md).

## Masthead and navigation

The wordmark sits at the left, the navigation right after it, and the preferences, language and theme, at the far right.

- **Navigation is tabs, not text links.** A row of plain links next to the preferences reads as more settings, and people miss it. A shape behind the current item is what says "menu".
- **A tab** is Chakra Petch at 15 px and weight 500, 32 px tall with 12 px of side padding and a 6 px radius. The current page is `primary-soft` behind `primary-fg`, and the others are `fg-muted`, with `hover` behind `fg` on hover. Mark the current one with `aria-current="page"`.
- **Labels are capitalized words:** Notes and About, Notas and Sobre.
- **Preferences stay quiet:** small mono text in `fg-muted`, with the active language in `fg`.
- **On phones, the tabs take their own row** under the wordmark, with their text lined up with the logo. The tab background extends past that line.

## Theme

- **Follow the system until the person chooses.** With no saved choice, `prefers-color-scheme` decides; a toggle saves an explicit choice in a cookie.
- **No flash of the wrong theme.** The server renders `data-theme` from the cookie when it can, and a small inline script in `<head>` applies the cookie before the first paint when it can't.
- **One attribute drives dark and light:** `data-theme` on `<html>`. A dark variant in Tailwind matches `[data-theme="dark"]` and the system preference when no `data-theme="light"` overrides it.
- **A second attribute picks the theme,** in a product that offers more than one: `data-palette`, saved in the same cookie. The control that switches it sits with the other preferences. [COLOR.md](COLOR.md#more-than-one-theme) has the rules.

## Focus

One global outline covers every focusable element: 2 px of `focus`, offset 2 px, radius 2 px. Declare it inside `@layer base`. Outside a layer it beats every utility class, so rounded tabs square off when focused and per-element offsets are ignored.

## Chips and tags

- **Inline tags** are `#tag` in JetBrains Mono, in the type color, separated by spaces.
- **Category chips**, such as a profile's primary stack, what it is exploring and its tools, give each group one color: step 3 behind, step 6 around and step 11 for the text. Use the type, constant and parameter colors, in that order: teal, lavender and straw in Barro.
- **Status badges** in apps are `<status>-soft`, `<status>-line` and `<status>`, as in [App screens](COLOR.md#app-screens). Never reuse a status color as a category on an app screen.

## Lists of posts

Each entry has a 2 px rule on its left in `line-subtle`, which turns `fg-faint` on hover. Then come the date in the parameter color, weight 500, with the reading time in `fg-muted`; the title in Chakra Petch, which turns `primary-fg` on hover; the description in `fg-muted`; and the tags in the type color.

## Cards

A card is `raised` at half opacity with a `line-subtle` border, turning `raised` with a `line` border on hover and focus. Its title is Chakra Petch, and a label at the top right, such as the language a project is written in, is in the type color.

## Code

Code blocks sit on step 1 of the neutral with a `line-subtle` border and a 0.5 rem radius. The reason is in [Reading surfaces](COLOR.md#reading-surfaces).

## Words

- Text in Portuguese keeps every accent: navegação, conteúdo, Goiânia. A missing accent reads as a typo to anyone who speaks it.
- Titles are sentence case. Navigation labels are single capitalized words.
