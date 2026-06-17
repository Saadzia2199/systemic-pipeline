Place the self-hosted Reckless Neue font files in THIS folder:

  RecklessNeue-Book.woff2      (weight 350)
  RecklessNeue-Regular.woff2   (weight 400)
  RecklessNeue-Medium.woff2    (weight 500)
  RecklessNeue-Italic.woff2    (weight 400, italic)

Reckless Neue is a commercial typeface from Displaay Type Foundry
(https://displaay.net). Purchase a web license, export the .woff2 files at
the weights above, and drop them here. The filenames must match exactly —
they are referenced by the @font-face rules injected from
components/SystemicPipelineLanding.jsx (the BrandStyles component).

Until these files are present, the display typography falls back gracefully
to a refined serif stack (Georgia / Times New Roman). The page will look good,
but not pixel-identical to the intended premium editorial treatment.

Geist and JetBrains Mono are loaded automatically from Google Fonts at
runtime — no action needed for those.
