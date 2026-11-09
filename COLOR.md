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
| `line-control`                          | Borders of inputs, checkboxes and other controls that have no other edge |
| `fg`, `fg-muted`, `fg-faint`            | Text, secondary text, placeholders               |
| `fg-reading`                            | Body text on a reading surface                   |
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
4. **Status color means something.** Use one status per element, and pair it with an icon or a word. Color alone fails readers who can't tell hues apart. `danger` is a plain red, because that is what people read as an error, even when the brand sits close to it, as Barro's brick does. Don't move it toward pink to gain distance: it stops meaning error. The icon, the word and the place on the screen do the separating. Favo's warning is its honey on purpose, so there a warning always carries its icon.
5. **Badges are soft:** `<status>-soft` behind, `<status>` for the text, `<status>-line` around. Solid fills are for the rare alert that must interrupt. Don't build a tint from opacity: it lands between two steps, where nothing is checked, and text on it can fall to 4.2:1.
6. **An input is a well.** It is filled with `raised` and outlined with `line`, so it differs from the card or dialog that holds it. [Depth](#depth) has the rule.
7. **Color a number only when its sign is the news.** A balance that went negative is `danger`. Amounts in a long list stay `fg`, and the sign does the talking.
8. **Every surface keeps its place in the stack.** [Depth](#depth) says which is lighter than which.
9. **Links follow the theme:** `primary-fg` in Barro, and `info` in Favo, where honey is kept for the brand and the warning.

## Depth

Surfaces stack in one order, and every screen keeps it. A person learns it in one screen and reads every other by it, so a surface that breaks the order looks wrong before anyone can say why.

| Layer     | Token     | What sits there                                   | Light mode           | Dark mode             |
| --------- | --------- | ------------------------------------------------- | -------------------- | --------------------- |
| Page      | `page`    | Behind everything                                 | One step below the card | The darkest         |
| Surface   | `surface` | Cards, panels, the main content                   | The lightest         | One step above the page |
| Overlay   | `overlay` | Dialogs, menus and popovers, with a shadow        | The lightest         | One step above a card |
| Raised    | `raised`  | Inputs, secondary buttons, hovered rows           | One step below the card | One step above the card |

- **In light mode the card and the dialog are the lightest things,** and everything else is darker. **In dark mode higher is lighter.**
- **An input is `raised`, never `page` or `surface`.** A field is a well in the card or dialog that holds it: a step darker than it in light mode, a step lighter in dark mode. That step is what shows where the field is, with its label and a `line` border.
- **Don't trade the order for a number.** The Chatbot once filled its fields with the page color so a stronger border could reach 3:1. In light mode the fields became lighter than their dialog, in dark mode darker, both the reverse of every other screen, and the dialogs looked wrong at once, in Barro and in Favo. The fill went back.
- **`line-control` is for a control with no fill,** such as a checkbox on a card, where a border is the only edge there is. A filled input doesn't need it.

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
| Body    | `fg-reading`: `fg` and `fg-muted`, mixed 45 to 55 in OKLab | 10.1:1 dark, 8.6:1 light   |
| Bold    | `fg`, weight 700                                           | 15.3:1 dark, 14.4:1 light  |
| Italic  | The parameter color, italic                                | 10.8:1 dark, 5.3:1 light   |
| Details | `fg-muted`: reading time, descriptions, labels             | 6.9:1 dark, 5.3:1 light    |

Set `fg-reading` once on the reading surface's container, for paragraphs, list items and quotes.

A few rules keep this from turning into noise:

- **Only inside the reading surface.** The navigation, buttons and forms around it follow the app rules.
- **Links are the function color here because the brand color is taken by headings.** On app screens, links follow rule 9.
- **Status colors keep their meaning.** Danger is never decoration, and success stays success. A parameter-colored date is fine inside an essay even where that color is also the warning.
- **Code sits on step 1 of the neutral,** in both modes: `page` in dark mode and `surface` in light mode, with a `line-subtle` border. That is the editor's own background, and a theme's light code colors are tuned to it. One step darker, the weakest fall below 4.5:1.

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
| `fg-reading` on `page`, `surface`, `raised`, `hover` and `overlay`        | 7:1      |
| Step 11 of every color on `page`, `surface`, `raised`, `hover`, `overlay` and its own step 3 | 4.5:1 |
| Text on `primary`, `primary-hover` and every solid status                 | 4.5:1    |
| `focus` on `surface`                                                      | 3:1      |
| `line-control` on `page`, `surface` and `raised`                          | 3:1      |
| Any two code colors, in OKLab                                             | 0.10     |

The darkest surface text can sit on decides the colored text, a hovered row in light mode. On a card it has room to spare, about 5:1 or more.

**These numbers are floors to check, not goals to chase.** When meeting one would break something people recognize, a red that means error, a field that is a well in its dialog, a delete button that stays quiet, keep the convention and find another way to meet the number, or accept the gap and say so. Two gaps are accepted today: Barro's `danger` is close to its brand, 0.04 to 0.07 in OKLab where two code colors keep 0.10, and a filled input's `line` border is about 1.7:1.
