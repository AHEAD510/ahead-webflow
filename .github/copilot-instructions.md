# AHEAD Website - AI Agent Instructions

## Project Overview
This is a **Webflow-generated marketing website** for AHEAD Inc., a creative design studio specializing in world-building, information architecture, UI/UX design, and AI creative direction. The site is published and hosted via Webflow (domain: ahead-9eba8a.webflow).

**Key Characteristics:**
- Webflow-managed site (exports to static HTML/CSS/JS)
- Japanese-focused content with bilingual design
- Single-page site with modal overlays for service details
- Heavy emphasis on animations, visual storytelling, and atmosphere
- Published: Tue Jan 20 2026 13:43:53 GMT+0000

## Architecture & Key Components

### File Structure
```
index.html              # Main page (417 lines, fully Webflow-generated)
css/
  ├─ normalize.css      # Webflow standard normalization
  ├─ webflow.css        # Webflow framework styles
  └─ ahead-9eba8a.webflow.css  # Custom styles (946 lines, auto-generated)
js/
  └─ webflow.js         # Webflow interactions & animations
images/                 # Portfolio images (movie posters, corporate sites)
videos/                 # Background videos for hero sections
CNAME                   # Domain configuration
```

### Critical Design Patterns

1. **Modal-Based Service Discovery**
   - `data-w-id` attributes drive Webflow interactions
   - 5 service modals (`.modal-content-is-01` through `.modal-content-is-05`)
   - Modal overlay pattern: `.modal-overlay7` controls visibility
   - Each modal showcases a service tier: PM, Design, IA/UX, AI Creative, Web Production

2. **Hero Section with Full-Height Video**
   - `.hero-section` = 100vh flex container with black background
   - `.background-video` = absolute positioned video element
   - `.hero-logo` = SVG/image (responsive: max-width: 52vw)
   - Typography: `.hero-title` (80px white text, letter-spacing: 0.14em)

3. **Section Rhythm & Spacing**
   - `.section` = standardized container with black background
   - Consistent padding: 32px top/bottom
   - `.container` = max-width 1080px, auto-centered
   - Transition effects: `opacity 0.2s`

4. **Card Portfolio Layout**
   - `.card-wrap` containers for work samples
   - `.card-trigger--work` = hover state handler
   - Tags: `.tag-m` (movies), `.tag-g` (growth hacks), `.tag-g-a c` (corporate)
   - Image optimization: srcset with responsive breakpoints (500w, 800w, 1080w, 1600w, 2000w, 2600w)

### Typography Hierarchy
- **Fonts**: Oswald (headings), Noto Sans JP (body/JP), Barlow (secondary), Barlow Semi Condensed (accent)
- **Classes**:
  - `.h2` = 52px, 80px line-height, bold narratives
  - `.h5` = 30px, 900 weight, section headers (letter-spacing: 0.2em)
  - `.h6` = 24px, section subtitles
  - `.text` = body copy (color: #4e4e4e on light, #fff on dark)

### Interactions & Animations
- Webflow animation library drives all micro-interactions
- Modal transitions use `data-w-id` for state management
- Scroll triggers and entrance animations throughout
- No custom JavaScript required—purely Webflow runtime

## Integration Points

### External Services
- **Google Fonts** (webfont.js loader)
- **Google Tag Manager** (GTM-WQJSQXZ6) for analytics
- **jQuery 3.5.1** (CDN) required by Webflow runtime
- **Webflow CDN** (d3e54v103j8qbb.cloudfront.net) for framework JS

### Metadata & SEO
- `lang="jv-JP"` set on `<html>` (note: unusual language tag—likely intended as `ja-JP`)
- OG image: `cdn.prod.website-files.com/694d5b252f39049e94f3da86/696b91349017f5a0d85f217a_og.png`
- Meta description captures AHEAD's unique value proposition (world-building + IA + web design + AI)
- Data attributes: `data-wf-page` and `data-wf-site` track Webflow project IDs

## Project-Specific Conventions

1. **Webflow Export Philosophy**
   - Do **not** manually edit generated CSS classes (`.w-*`, `.wf-*`)
   - Custom styles live in `ahead-9eba8a.webflow.css` (marked with semantic class names)
   - All production updates should flow through **Webflow editor**, not direct file edits
   - Webflow auto-republishes on export—manual edits will be overwritten

2. **Content & Messaging**
   - 4 core services: PM/Direction, Design/Creative, IA/UX, AI Creative, Web Production
   - Japanese-first language, English secondary (names, technical terms)
   - Emphasis on "world-building" (世界観) as central philosophy
   - Portfolio heavily weighted toward entertainment/film + corporate clients

3. **Modal/Overlay Pattern**
   - Service details use `.modal-overlay7` + numbered `.modal-content-is-*` children
   - Modal state managed entirely by Webflow interactions (click handlers on triggers)
   - Structure: modal-overlay > modal-s01 > modal-content-is-* (contains grid layout)

4. **Image Optimization**
   - All portfolio images use Webflow's responsive image system (srcset + sizes)
   - Lazy loading enabled (`loading="lazy"`)
   - JPG for photos, PNG for branded assets (movie posters, logos)
   - Preserve all `sizes` attributes to prevent Webflow CDN issues

## Common Tasks & Workflows

### Updating Service Descriptions
- Service text lives inside `.modal-body` within each `.modal-content-is-*`
- Edit `<p class="text">` and `<h3 class="h3">` elements
- Content order (top to bottom): description → h3 title → h2 service name
- **Never** rename or move `data-w-id` attributes

### Adding Portfolio Work
- New `.card-wrap` → insert before closing `</div>` of `.work-grid`
- Include: thumbnail (`.card-trigger--work img`), title (`.card-title-jp`), tag (`.tag-*`)
- Use Webflow image optimization if adding new images
- Links: wrap in `<a>` with `class="card-wrap is-link w-inline-block"` for external links

### Fixing Responsive Issues
- Breakpoint adjustments in `ahead-9eba8a.webflow.css` (existing media queries)
- Hero title responsive: change `.hero-title` font-size or `.hero-logo` max-width
- Container max-width: 1080px (adjustable in `.container`)

### Republishing to Webflow
- Direct file edits are **temporary**—always propagate through Webflow editor
- Use Webflow Hosting + Export for live deployment
- Check `<!-- Last Published: ... -->` comment in HTML to verify current version

## Codebase Quirks & Notes

1. **Language Tag Anomaly**: `lang="jv-JP"` is likely a typo; should be `ja-JP` for Japanese
2. **webflow.js Size**: Custom Webflow JS is empty (runtime injected by Webflow editor)—don't add custom scripts here
3. **CNAME File**: Indicates custom domain setup (not tracked in this export)
4. **GTM Implementation**: Analytics piping through Google Tag Manager—check GTM console for tracking config
5. **jQuery Dependency**: Webflow requires jQuery 3.5.1 for some legacy interactions

## AI Agent Best Practices for This Project

- **Always prefer Webflow editor** for content updates; manual HTML edits are fragile
- **Preserve semantic structure**: Don't flatten nested flex containers or change grid layouts
- **Test responsiveness**: Hero section (100vh) and card grids must adapt smoothly
- **Reference data-w-id**: These are Webflow interaction anchors—never remove or duplicate
- **Respect naming conventions**: Mix of Webflow auto-generated + custom semantic classes—don't rename either set
- **Font loading order**: Ensure Google Fonts load before custom CSS to prevent FOUT (Flash of Unstyled Text)
