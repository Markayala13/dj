# DNA Premium Event Services — Home clone brief

Source: https://dnaeventservices.com/ (built on GoHighLevel/HighLevel funnel builder)
Route: `/` → `src/app/page.tsx`

## Brand / design tokens
- **Black** `#000000` (dark sections), **White** `#FFFFFF` (light sections)
- **Accent yellow** `rgb(255,193,10)` = `#FFC10A` (headline highlights, price, marquee bar)
- **Dark text** `#111111`; **muted body on dark** `#D6D6D9`; eyebrow labels muted gray uppercase
- Fonts: **Archivo Black** (display headings, uppercase) + **Archivo** (body/nav/labels), Google Fonts
- H1 display: Archivo Black, ~100px desktop, line-height 0.9, letter-spacing -2.5px, UPPERCASE, white
- H2 section headings: Archivo Black, ~68px, lh 0.94, ls -1.5px, UPPERCASE, `#111`
- Body p: Archivo 18px, lh 1.55
- Nav links: Archivo 14.5px, weight 800
- Buttons: pill (`rounded-full`); variants = solid white/ dark text, solid black/white text, outline on dark, white w/ arrow

## Section order (top → bottom)
1. **Header** (sticky, white): inverted DNA logo · nav [Home, Pricing, The DJs, Extras, Other Events, Make a Payment] · "SERVING DALLAS–FORT WORTH" · phone (469) 259-7239 · black pill "Check My Date"
2. **Hero** (black, autoplay/loop/muted video bg + dark overlay): ★ 5.0 from 335 Google reviews · "TWO FAMILIES. / TWO CULTURES. / ONE DANCE FLOOR." (last line yellow) · subcopy · buttons "Check my date →" (white) + "See pricing" (outline)
3. **Stats bar** (black): 5.0 GOOGLE RATING · 335 REVIEWS · 8 BILINGUAL DJS · 2019 EST. IN DALLAS · 1 WEDDING PER DATE (numbers yellow)
4. **The Hard Part** (white): eyebrow "THE HARD PART" · "ANYBODY CAN PLAY MUSIC." · paragraph · "WE DON'T JUST PLAY GENRES. / WE READ PEOPLE." (2nd line yellow highlight) · dark pill "Talk to us about your wedding →" | right: numbered list 01-04 (parents cumbias / friends reggaetón / his family country / tío norteñas)
5. **Marquee** (yellow bar, scrolling): BILINGUAL DJS & MCS ★ ONE WEDDING PER DATE ★ DALLAS–FORT WORTH ★ 335 FIVE-STAR REVIEWS ★ ENGLISH & SPANISH ★ SINCE 2019 (repeat)
6. **Midnight** (photo bg `midnight.jpg`, dark overlay): eyebrow "MIDNIGHT" · "NOBODY / HAS SAT DOWN." (2nd line yellow). Tall section.
7. **What's included** (black): eyebrow "WHAT IS INCLUDED" · "MORE THAN JUST / A WEDDING DJ." · 2 columns with yellow checkmarks (EVERY PACKAGE / AND NO SURPRISES, 4 items each) · buttons "Meet the DJs" (white) + "Check my date" (outline)
8. **The Roster** (white): eyebrow "THE ROSTER" · "EIGHT BILINGUAL DJS. / ONE OF THEM IS YOURS." (IS YOURS yellow highlight) · subcopy · big team photo `team.jpg` · caption · dark pill "Meet the DJs →"
9. **Start here** (white): eyebrow "WHERE TO NEXT" · "START HERE." · 3 cards (image + kicker + title + copy + "See … →"): Venues We Know (`venues.jpg`), Extras & Upgrades (`extras.jpg`), Quinces & Events (`quinces.jpg`)
10. **Reviews** (white): eyebrow "335 REVIEWS, FIVE STARS" · "DON'T TAKE / OUR WORD FOR IT." · dark card row of Google review cards w/ pagination (static recreation)
11. **Pricing** (black): eyebrow "AN IDEA OF HOW MUCH WE CHARGE" · "WEDDINGS RUN / $2,799 TO $9,999." (price yellow) · 2 paragraphs · buttons "See every DJ and their exact pricing →" (white) + "How the tiers work" (outline)
12. **FAQ** (white): eyebrow "BEFORE YOU ASK" · "QUESTIONS COUPLES / ACTUALLY ASK." · accordion (6 items, + icon) · "Still have a question? Talk to us" (yellow underline)
13. **Final CTA** (photo bg `finale.jpg` fireworks, dark overlay): eyebrow "FIRST COME, FIRST SERVED" · "LET'S FIND OUT / IF YOUR DATE / IS STILL OPEN." (last line yellow) · buttons "Check my date →" (white) + "See pricing first" (outline)
14. **Footer** (black): "DNA PREMIUM EVENT SERVICES" · links [Home, Pricing, The DJs, Extras, Other Events, Venues, Vendor Family, Make a Payment, Check My Date, (469) 259-7239, Client Login] · service-area legal paragraph

## FAQ Q&A
1. **How much does a wedding DJ cost in Dallas–Fort Worth?** — DNA wedding packages start at $2,799 for up to four hours of bilingual DJ and MC service. The tier you land in depends on which DJ is open on your date, not on what happens that night.
2. **Do you have bilingual DJs who speak Spanish?** — All eight DNA DJs are fully bilingual in English and Spanish, and each one MCs their own room. You are not getting a translated script read off a card.
3. **How far in advance should we book?** — Nine to eighteen months for popular dates. One wedding per DJ per day, so spring and fall Saturdays go first.
4. **Can you play country and regional Mexican at the same wedding?** — That is the wedding we are built for. The job is not knowing both catalogues, it is knowing when to move between them before the floor empties.
5. **Do you provide an MC as well as a DJ?** — Yes, and it is the same person. Your DJ MCs the whole night, so the person reading the room is the person on the mic.
6. **How do we reserve our date?** — A signed agreement plus the deposit holds it. $500 with most of our DJs, or 30% of the total with Nate. The balance is not due until 30 days out.

## Assets (public/sites/dna/)
- `hero.mp4` (hero bg video, transcoded 720p from 4K), `hero-poster.jpg`
- `dna-logo.png` (white-on-black; header uses `filter: invert(1)` → dark on white)
- `team.jpg` (8 DJs), `venues.jpg`, `extras.jpg`, `quinces.jpg`, `midnight.jpg`, `finale.jpg`

## Links (outbound → kept to source where no local route)
- Check my date / Check My Date → `/book`; See pricing → `/pricing`; others (The DJs, Extras, Other Events, Venues, Vendor Family, Make a Payment, Client Login) → external source paths.
Phone: `tel:+14692597239`
