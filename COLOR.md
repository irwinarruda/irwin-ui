# Color

irwin-ui does not own a palette. A **theme** does. [Barro](https://github.com/irwinarruda/barro-theme) is brick on cool slate, and [Favo](https://github.com/irwinarruda/favo-theme) is honey on warm gray. Each is a product of its own, with editor themes, a spec and an app palette, and each is complete without this repository.

This page is what they share: the shape every theme has, and the rules for using any of them in a site or an app. Today [irwinarruda.com](https://www.irwinarruda.com) uses Barro, and The Chatbot ships both and lets the person choose.

## What a theme provides

| Piece                 | What it is                                                                                     | Barro                         | Favo                         |
| --------------------- | ---------------------------------------------------------------------------------------------- | ----------------------------- | ---------------------------- |
| Editor themes         | A dark and a light variant, with a spec that says which color goes where                        | Slate and Kaolin              | Honey, Wax, Smoke and Veil   |
| Neutral               | Twelve steps that carry backgrounds, borders and text                                           | `slate`                       | `gray`, and `sand`           |
| Color scales          | Twelve steps for each code role                                                                 | Eight                         | Seven                        |
| Tokens                | CSS variables with one job each, `--<theme>-<token>`, with the same names in every theme         | `--barro-*`                   | `--favo-*`                   |
| Files                 | `app/<theme>.css`, `app/tailwind.css` and `app/tokens.json`                                     | [`app/`](https://github.com/irwinarruda/barro-theme/tree/main/app) | [`app/`](https://github.com/irwinarruda/favo-theme/tree/main/app) |
| A contrast check      | `bun run check` fails when a rule in [Contrast](#contrast) breaks                               | Yes                           | Yes                          |

Each theme's own `APPS.md` has its values and its quick start. This page never names a hex color.

### Roles

A theme gives each role in code one color. Everything below is written in roles, so it holds for any theme.

| Role                   | Barro      | Favo       |
| ---------------------- | ---------- | ---------- |
| Keyword, and the brand | `clay`     | `honey`    |
| Function               | `sky`      | `sky`      |
| Type                   | `teal`     | `mint`     |
| String                 | `sage`     | `meadow`   |
| Constant               | `lavender` | `lavender` |
| Parameter              | `straw`    | `rose`     |
| Regex                  | `rose`     | `coral`    |
| Danger                 | `red`      | `coral`    |

### Twelve steps

Every scale has the same twelve steps, and each step has the same job in dark and light.

| Step | The neutral                                      | A color                                      |
| ---- | ------------------------------------------------ | -------------------------------------------- |
| 1    | Dark page, light card                            | Tinted page                                  |
| 2    | Dark card; light page, controls and hovered rows | Tinted card                                  |
| 3    | Dark controls and hovered rows; light hover      | Soft background: badges, selected navigation |
| 4    | Dark hover; light pressed                        | Soft hover, light selection                  |
| 5    | Dark pressed                                     | Soft pressed, dark selection                 |
| 6    | Separators                                       | Subtle border                                |
| 7    | Borders of cards and inputs                      | Border                                       |
| 8    | Strong borders                                   | Strong border                                |
| 9    | Placeholders and disabled text                   | Solid fill: buttons, chips                   |
| 10   | Solid neutral, hovered                           | Solid fill, hovered                          |
| 11   | Secondary text                                   | Colored text and icons                       |
| 12   | Text                                             | High-contrast colored text                   |

Step 11 of a color is its code color, so the type color in an app is the type color in the editor.

### Tokens

Style with tokens, and use a raw step only when no token fits.

| Token                                   | Use                                              |
| --------------------------------------- | ------------------------------------------------ |
| `page`                                  | Behind everything                                |
| `surface`                               | Cards, panels and the main content               |
| `raised`                                | Inputs, secondary buttons, hovered rows          |
| `hover`, `pressed`                      | Hovered and pressed controls, selected rows      |
| `overlay`                               | Menus, popovers and dialogs, with a shadow       |
| `line-subtle`, `line`, `line-strong`    | Separators, borders, strong dividers             |
| `fg`, `fg-muted`, `fg-faint`            | Text, secondary text, placeholders               |
| `primary`, `primary-hover`, `on-primary` | Primary buttons and the text on them            |
| `primary-soft`, `primary-fg`            | The current navigation item, and brand-colored text |
| `focus`, `selection`                    | Focus rings and selected text                    |
| `<status>`, `<status>-soft`, `<status>-line`, `<status>-solid`, `on-<status>` | `success`, `warning`, `danger` and `info`: text, badge background, badge border, solid alert and the text on it |

## Two kinds of screens

A product has two kinds of screens, and color works differently on each.

- **App screens** are controls and status: lists, forms, dashboards, settings. Color is rare and means one thing.
- **Reading surfaces** are text someone reads top to bottom: an essay, a chat reply, a note. Color marks what kind of thing each piece of text is, the way it does in code.

## App screens

1. **The neutral carries the screen.** Most of what people see should be `page`, `surface`, `fg` and `fg-muted`. If a screen looks the color of the brand, too much of it is.
2. **Keep the brand color to one thing per view:** the primary action, or where the reader is. Headings, bullets and decorative icons stay neutral.
3. **Primary buttons are `primary` with `on-primary`, in both modes.** That is brick with white text in Barro and honey with near-black text in Favo. Hover goes to `primary-hover`, never lighter than the text can take.
4. **Status color means something.** Use one status per element, and pair it with an icon or a word. Color alone fails readers who can't tell hues apart, and in both themes one status sits close to the brand: red to brick in Barro, the honey warning to honey in Favo.
5. **Badges are soft:** `<status>-soft` behind, `<status>` for the text, `<status>-line` around. Solid fills are for the rare alert that must interrupt. Don't build a tint from opacity: it lands between two steps, where nothing is checked.
6. **Color a number only when its sign is the news.** A balance that went negative is `danger`. Amounts in a long list stay `fg`, and the sign does the talking.
7. **Higher is lighter in dark mode.** In light mode the card is the lightest thing, and the page sits one step below it.
8. **Links follow the theme:** `primary-fg` in Barro, and `info` in Favo, where honey is kept for the brand and the warning.

## Reading surfaces

On a reading surface, color says what kind of thing a piece of text is, so a reader can scan it the way they scan code. The jobs are the code roles:

| Role in code | On a reading surface                        | Barro         | Favo          |
| ------------ | ------------------------------------------- | ------------- | ------------- |
| Keyword      | Section headings, the current page          | `primary-fg`  | `primary-fg`  |
| Function     | Links                                       | `sky-11`      | `sky-11`      |
| Type         | Tags, subheadings, the first group of chips | `teal-11`     | `mint-11`     |
| Parameter    | Dates and italics                           | `straw-11`    | `rose-11`     |
| Constant     | A second group of chips                     | `lavender-11` | `lavender-11` |

Color marks the kind; size and weight mark importance. Keep one color per kind on every page, so a date always looks like a date.

**Three text tones, not one.** Body text sits a step below `fg`, so bold has somewhere to go. When paragraphs are already `fg`, bold barely shows and the page reads flat.

| Tone    | Value                                                      | In Barro, on `surface`     |
| ------- | ---------------------------------------------------------- | -------------------------- |
| Body    | `fg` and `fg-muted`, mixed 45 to 55 in OKLab               | 10.1:1 dark, 8.6:1 light   |
| Bold    | `fg`, weight 700                                           | 15.3:1 dark, 14.4:1 light  |
| Italic  | The parameter color, italic                                | 10.8:1 dark, 5.3:1 light   |
| Details | `fg-muted`: reading time, descriptions, labels             | 6.9:1 dark, 5.3:1 light    |

Define the body tone once on the reading surface's container, for paragraphs, list items and quotes:

```css
.reading-surface {
  --reading-text: color-mix(in oklab, var(--barro-fg) 45%, var(--barro-fg-muted));
}
```

A few rules keep this from turning into noise:

- **Only inside the reading surface.** The navigation, buttons and forms around it follow the app rules.
- **Links are the function color here because the brand color is taken by headings.** On app screens, links follow rule 8.
- **Status colors keep their meaning.** Danger is never decoration, and success stays success. A parameter-colored date is fine inside an essay even where that color is also the warning.
- **Code sits on step 1 of the neutral,** in both modes: `page` in dark mode and `surface` in light mode, with a `line-subtle` border. That is the editor's own background, and a theme's light code colors are tuned to it. One step darker, the weakest of Barro's fall to 4.25:1.

Live examples: [irwinarruda.com](https://www.irwinarruda.com) for essays, and The Chatbot's replies and notes.

## More than one theme

- **`data-theme` on `<html>` is dark or light.** Leave it out to follow the system. [PATTERNS.md](PATTERNS.md#theme) covers the switch. Favo also takes `data-neutral`, `gray` or `sand`.
- **`data-palette` picks the theme,** in a product that offers more than one. The Chatbot sets `barro` or `favo` there, keeps both choices in a cookie, and renders the right one on the server.
- **Components never name a theme.** Map the product's own variables to the theme's tokens once, per palette, and style with those.
- **The marks never follow the theme.** A logo is the brand, so the brick in The Chatbot's bubble and in Irwin Arruda's dot stays brick on Favo. [BRAND.md](BRAND.md#color) has the rule.
- **A new theme** has to fill every role and every token, and pass every rule below, before a product can offer it.

## Contrast

Every theme checks these in both modes, and its `bun run check` fails if one breaks.

| Rule                                                                      | At least |
| ------------------------------------------------------------------------- | -------- |
| `fg` on `page`, `surface`, `raised`, `hover`, `pressed` and `overlay`     | 7:1      |
| `fg-muted` on `page`, `surface`, `raised`, `hover` and `overlay`          | 4.5:1    |
| `fg-faint` on `surface`                                                   | 3:1      |
| `primary-fg` and each status on `page`, `surface` and its soft background | 4.5:1    |
| Text on `primary`, `primary-hover` and every solid status                 | 4.5:1    |
| `focus` on `surface`                                                      | 3:1      |
| Reading body, bold and italic on `surface`                                | 4.5:1    |
| Any two code colors, in OKLab                                             | 0.10     |

## Open

Known gaps, measured in November 2026 and not fixed yet:

- **Barro's danger sits close to its brand.** Brand text and danger text are 0.04 apart in light mode and 0.07 in dark, where two code colors must be 0.10 apart. Rule 4 covers it for now: an error always carries an icon or a word.
- **Light mode has no margin.** Barro's colored text passes at exactly 4.5:1, so it drops to 4.45:1 on a hovered row and to about 4.2:1 on an opacity tint. A target of 5:1 would leave room.
- **The reading body tone is a mix, not a token,** so no script checks the last-but-one row of the table above.
- **Borders are quiet.** `line` is about 1.7:1 against `surface`. An input that relies on its border alone would need 3:1.
