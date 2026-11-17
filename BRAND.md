# Brand

Five marks, one family: Favo, Barro, The Chatbot, Lila and Irwin Arruda. They share one lettering and one spacing table, and every file is generated from [`src/brand.ts`](src/brand.ts) into [`brand/`](brand), so a mark can be rebuilt, never redrawn.

<p align="center">
  <img src="assets/family-dark.svg#gh-dark-mode-only" alt="The marks of Favo, Barro, The Chatbot, Lila and Irwin Arruda, with their small marks and icons" width="860">
  <img src="assets/family-light.svg#gh-light-mode-only" alt="The marks of Favo, Barro, The Chatbot, Lila and Irwin Arruda, with their small marks and icons" width="860">
</p>

The marks identify Irwin Arruda and his projects. The MIT license of this repository covers the code and the documents, not the marks.

## The lettering

The marks are not set in a font. Each letter is drawn from straight strokes on one grid:

- **x-height 100 units, ascenders to 152.** Strokes are 20 units wide, with round ends and round joins.
- **Bowls are half hexagons.** The round parts of `a`, `b`, `c` and `d` turn at 60°, 28.87 units across and 50 up, so even round letters have corners. This is what [Chakra Petch](TYPE.md#why-chakra-petch) echoes.
- **The prompt chevron, `>`, leads product marks.** It is 26 units wide, a little heavier than the letters.
- **`l` ends in a foot.** Its stem turns at 60° at the bottom, the turn of `t`'s foot without the bar. Three plain stems in `lil` read as a fence; the foot tells `l` from `i` and keeps the gap after it close.

The drawn letters so far are `a b c d f h i ı l n r t u v w`. `ı` is a stem without a dot: it is the stem of an `a` whose bowl is a shape, as in Lila's second logo. A new word needs its missing letters drawn on the same grid and added to `Glyphs` in `brand.ts`.

## Spacing

Every mark is spaced by the same rule, so a new word comes out right without tuning. The gap between two letters depends on the shapes that face each other, because a pointed or open side leaves white space of its own. Each letter declares its two sides, and `brand.ts` looks the gap up. Gaps are measured between stroke centers, in units.

| Side    | What it looks like                | Letters                                             |
| ------- | --------------------------------- | --------------------------------------------------- |
| `stem`  | A straight vertical stroke        | Left of `b h i ı l n r u`, right of `a d h i ı n u` |
| `point` | A bowl's corner, at mid height    | Left of `a c d`, right of `b`                       |
| `bar`   | The tip of a crossbar             | Left of `f t`                                       |
| `arm`   | A stroke at the top, empty below  | Right of `f r`                                      |
| `open`  | Arms at the top and the bottom    | Right of `c t`                                      |
| `diag`  | A diagonal stroke                 | Both sides of `v w`                                 |
| `foot`  | A turn at the bottom, empty above | Right of `l`                                        |

| Left letter ends in | Then `stem` | Then `point` | Then `bar` | Then `diag` |
| ------------------- | ----------- | ------------ | ---------- | ----------- |
| `stem`              | 38          | 34           | 32         | 36          |
| `point`             | 34          | 30           | 30         | 32          |
| `arm`               | 34          | 18           | 30         | 34          |
| `open`              | 34          | 30           | 30         | 32          |
| `diag`              | 36          | 28           | 30         | 30          |
| `foot`              | 30          | 22           | 28         | 26          |

- **Two straight strokes sit 38 apart.** Everything else is tighter, by how much white the shapes already leave.
- **A point tucks under an arm,** which is why `fa` is only 18.
- **A foot fills the bottom of the gap, not the top,** so the next letter sits closer than after an arm: a stem starts 30 after the foot's tip, which puts `l` and `i` 50 apart, and `lil` reads as evenly spaced as `il` at 38.
- **After the chevron,** a `stem` starts 84 from its tip, a `point` or a `bar` 69, and a `diag` 72. In a mark, the shape starts 48.82 from the tip.
- **Around a shape,** each shape lists its own gaps in `brand.ts`: the hexagon tucks into `v` at 5.59, the block sits 25.76 after `r`, the bubble sits 22 after `b` and 24 before `t`, and the flower sits 18 after `l`'s foot. The flower's lobes leave more white than the bubble's full circle and less than the hexagon's corners, so its gaps fall between theirs: 24 from a stem on either side, 20 from a point.
- **A space between words is 46,** on top of the letter gap.

Favo's logo was set by hand and is the reference: the table reproduces it exactly, and Barro, The Chatbot, Lila and Irwin Arruda follow it.

## Two families of marks

**Products** are the chevron, the name, and a last `o` replaced by a solid shape that says what the product is. Lila has no `o`, so its shape replaces the last letter, the `a`. A product's `i` keeps an ink dot, so the shape stays the only color in the mark:

| Product     | The shape                                | Where                                                                                           |
| ----------- | ---------------------------------------- | ----------------------------------------------------------------------------------------------- |
| Favo        | A honeycomb cell                         | [`brand/favo/`](brand/favo)                                                                     |
| Barro       | A brick block                            | [`brand/barro/`](brand/barro)                                                                   |
| The Chatbot | A round speech bubble with a 60° tail    | [`brand/chatbot/`](brand/chatbot)                                                               |
| Lila        | A lilac floret: four lobes and a hole    | [`brand/lila/`](brand/lila)                                                                     |

Each shape is as tall as a letter with its stroke, 120 units. The block is 112, because a rectangle looks bigger than a round shape of the same height. The flower is 124, because the notches between its lobes leave white that a circle would fill. The bubble stays a full circle so it still reads as an `o`, and its tail is cut at 60° like the letters.

**Irwin Arruda**, the personal mark, has no chevron. Its dots are squares, and they carry the brick. It comes in two variants:

- **One dot,** the default: the dot of the first `i` is brick and the second is ink, so the mark has a single brick, its signature.
- **Two dots,** the `-duo` files: every dot is a brick. It was tried in the masthead of irwinarruda.com and set aside: one brick reads as a signature, and two read as decoration. The files stay for a place that wants them.

## Color

- **A mark has one color, its family's.** Favo's cell is honey: `#F5A623`, and `#B8720A` on light backgrounds. Lila's flower is lilac: `#9F86F0` on dark backgrounds, and `#7A58CE` on light and unknown ones. Every other mark uses the brick, `#B64D3F`, in both modes. It fills the shape or the dots.
- **The rest is ink.** A `-dark` file has light ink for dark backgrounds, a `-light` file has dark ink, and a file with no suffix has a mid tone for a background that is unknown. The brick marks use `#E6EAEF`, `#21272D` and `#7E848A`; Favo uses `#F3E7CF`, `#33291A` and its dark honey; Lila uses `#EDEBF3`, `#22202B` and `#7F7A8F`.
- **A mark never follows the theme.** A product that switches from Barro to Favo keeps its logo as it is: the brick in The Chatbot's bubble and in Irwin Arruda's dots stays brick.
- **Icons are slate tiles:** `#111418` with white ink and the brick. A brick-filled tile was tried for The Chatbot and rejected: in a browser tab it read as a red blob, and a dark tile matches the `ia` icon beside it.
- **Mark colors are constants in `brand.ts`,** not read from a theme's palette, so tuning a theme never recolors a logo by accident.

## Favo and Barro

Each has the same six files, in [`brand/favo/`](brand/favo) and [`brand/barro/`](brand/barro).

| File                                          | What it is                    | Used in                                                         |
| --------------------------------------------- | ----------------------------- | --------------------------------------------------------------- |
| `logo.svg`, `logo-dark.svg`, `logo-light.svg` | The wordmark, `>favo` or `>barro` | The README of the theme, and of favo-cli                    |
| `mark.svg`, `mark-dark.svg`, `mark-light.svg` | The `>o` mark                 | `mark.svg`, rendered at 512 px, is the theme's icon in VS Code |

## Lila

Lila is the lilac theme, and its flower takes the place of the last `a`. Its files are in [`brand/lila/`](brand/lila).

| File                                                | What it is                                                    | Used in                                                   |
| --------------------------------------------------- | ------------------------------------------------------------- | --------------------------------------------------------- |
| `logo.svg`, `logo-dark.svg`, `logo-light.svg`       | The wordmark, `>lil` and the flower                           | The default. Nothing yet: lila-theme and Pro Cris to come |
| `logo-a.svg`, `logo-a-dark.svg`, `logo-a-light.svg` | The same with the flower as the bowl of an `a`, its stem kept | Nothing, kept as an alternative that keeps the `a`        |
| `mark.svg`, `mark-dark.svg`, `mark-light.svg`       | The `>` and the flower                                        | Nothing yet: the theme's icon to come                     |

The default reads as a word that ends in a flower; out of context it can read as `lilo`. The `-a` logo keeps the `a`: the flower there is 106 units, the height of a bowl, and the `a`'s stem starts 10 after it so they touch. At 24 px and below, the stem starts to read as a stroke of its own.

## Irwin Arruda

| File                                                                  | What it is                        | Used in                                       |
| --------------------------------------------------------------------- | --------------------------------- | --------------------------------------------- |
| `irwin-arruda.svg`, `irwin-arruda-dark.svg`, `irwin-arruda-light.svg` | The wordmark, with one brick dot  | The masthead of irwinarruda.com, 22 px tall on desktop and 20 on phones, and its README |
| `irwin-arruda-duo.svg`, `irwin-arruda-duo-dark.svg`, `irwin-arruda-duo-light.svg` | The wordmark, with two brick dots | Nothing, kept as an alternative               |
| `irwin.svg`, `irwin-dark.svg`, `irwin-light.svg`, and the same three with `-duo` | The short form, `irwin` | Nothing yet. It hides the `a` the favicon needs |
| `ia.svg`, `ia-dark.svg`, `ia-light.svg`                               | The `ia` monogram                 | Nothing yet                                   |
| `i.svg`, `i-dark.svg`, `i-light.svg`                                  | The `i` monogram                  | Nothing yet                                   |
| `icon-ia.svg`, `icon-ia.ico`, `icon-ia-512.png`                       | `ia` on a rounded slate tile      | The favicon and the social image              |
| `icon-ia-square.svg`, `icon-ia-180.png`                               | The same tile, square             | The iPhone and iPad home screen               |
| `icon-i.svg`, `icon-i.ico`, `icon-i-180.png`, `icon-i-512.png`        | `i` on a slate tile               | Nothing yet                                   |

## The Chatbot

| File                                          | What it is                                      | Used in                                         |
| --------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| `logo.svg`, `logo-dark.svg`, `logo-light.svg` | The `>chatbot` wordmark                         | The app's title bar and its README              |
| `mark.svg`, `mark-dark.svg`, `mark-light.svg` | The `>o` mark                                   | Places that set the mark on their own background |
| `icon.svg`, `favicon.ico`, `icon-512.png`     | `>o` on a rounded slate tile                    | The favicon and app icon                        |
| `icon-square.svg`, `apple-touch-icon.png`     | The same tile, square                           | The iPhone and iPad home screen                 |
| `avatar.svg`, `avatar-{1024,640,512,256,120}.png` | `>o` on a full slate square                 | WhatsApp (640), Google sign-in (120) and other profile pictures |

## Rules for icons and avatars

- **Tiles are 512 units with a corner radius of 112,** about 22%, and the mark fills about three quarters of the width, so it still reads at 16 px.
- **Touch icons are square.** iOS rounds the corners itself, and transparent corners turn black.
- **Avatars are full squares** with the mark at about half the width, so a circle crop never touches it.
- **Favicons carry 16, 32 and 48 px** in one `.ico`, beside the SVG icon.

## Changing a mark

1. Change `src/brand.ts`, never the files in `brand/`.
2. Run `bun run build` to write the SVGs, and `bun run check`. It fails while a generated file is stale, and when the spacing table stops setting Favo's logo the way it was drawn by hand.
3. Run `bun run render` to redraw every PNG and `.ico` from those SVGs. It needs macOS and Google Chrome (set `CHROME` for another path).
4. Copy the files into every project that uses them. Each project keeps its own copy, and never edits it.

| Mark         | Copied to                                                                                              |
| ------------ | ------------------------------------------------------------------------------------------------------ |
| Favo         | [favo-theme](https://github.com/irwinarruda/favo-theme) `assets/`, and [favo-cli](https://github.com/irwinarruda/favo-cli) `docs/assets/` |
| Barro        | [barro-theme](https://github.com/irwinarruda/barro-theme) `assets/`                                    |
| Lila         | lila-theme `assets/`, once the repository exists, and Pro Cris later                                   |
| The Chatbot  | [the-chatbot-v2](https://github.com/irwinarruda/the-chatbot-v2) `public/brand/`, with `favicon.ico` at `public/` |
| Irwin Arruda | [irwin-notes](https://github.com/irwinarruda/irwin-notes) `public/brand/`, with `icon-ia.ico` as `public/favicon.ico` |

When a theme's mark changes shape, render its `mark.svg` at 512 px into that theme's `vscode/icon.png` too.
