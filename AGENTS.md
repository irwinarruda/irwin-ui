# irwin-ui

irwin-ui is Irwin Arruda's design system: the standards his sites, apps and tools follow, and the marks of Favo, Barro, The Chatbot and Irwin Arruda. It holds no palette. Themes do that: [barro-theme](https://github.com/irwinarruda/barro-theme) and [favo-theme](https://github.com/irwinarruda/favo-theme) are products of their own, and each stays complete without this repository.

## Commands

Use Bun `1.3.14`. There are no dependencies.

- `bun run build` writes every SVG in `brand/` and `assets/` from `src/brand.ts`.
- `bun run check` fails when a generated file is stale, when a PNG or ICO is missing, or when the spacing table stops setting Favo's logo as it was drawn by hand. CI runs it on every push and pull request.
- `bun run render` redraws every PNG and ICO in `brand/` from its SVG. It needs macOS and Google Chrome, and is run by hand after a mark changes.

## Where things live

- `COLOR.md`, `TYPE.md`, `BRAND.md` and `PATTERNS.md` are the standards. They are written in roles and tokens, never in one theme's colors, so they hold for any theme.
- `src/brand.ts` draws every mark. `Glyphs` holds the letters, `Gaps`, `Lead` and each shape's `after` and `before` hold the spacing, and `BRAND.md` explains the table.
- `brand/` and `assets/family-*.svg` are generated. Never edit or redraw a file there.
- `src/render.ts` lists every PNG and ICO and the SVG it comes from.

## What belongs here

- A rule a product has to follow whatever theme it uses: how color is used, type, the marks, patterns.
- Not a theme's own material. A palette, an editor port, a theme's spec and its guide to its own colors stay in the theme's repository.
- When a site changes a rule, change the document here in the same pass. The documents have to stay true to irwinarruda.com and The Chatbot.

## Changing a mark

1. Change `src/brand.ts`.
2. Run `bun run build`, `bun run render` and `bun run check`, and look at `assets/family-dark.svg` and `assets/family-light.svg`.
3. Commit the generated files with the change.
4. Copy the changed files into every project `BRAND.md` lists under "Changing a mark". A mark is not done until the projects that show it have it.

## Working agreements

- Commits follow Conventional Commits.
- No merge commits. Bring a branch up to date with `git rebase`.
- Favo's logo was set by hand and is the reference for spacing. A change to the table that moves a Favo letter is a change to Favo's logo, and `bun run check` fails on it. Change the check only when that is the intent.
- The marks never follow a theme. Their colors are constants in `src/brand.ts`.
- Mark files in other repositories are copies. Fix a mark here, then copy it.
- Do not say a mark works until you have looked at it rendered, at its real sizes, in dark and in light.
- A contrast or distance number is a floor to check, not a goal to chase. When meeting one would break a convention people recognize, such as a plain red for errors, inputs that are wells in their dialog, or a quiet delete button, keep the convention and say which gap is accepted. `COLOR.md` ("Depth", "Contrast") and `PATTERNS.md` ("Buttons") record the cases that taught this. Show a changed look in the real screens before shipping it.
