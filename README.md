---

## Pages

//Description//
| Home | index.html | Landing page with welcome message and service overview |
| About | about-us.html | Background and mission of the salon |
| Services | services.html | Full list of nail and hair services with prices |
| Products | products.html | Hair and nail products available in-salon |
| Gallery | gallery.html | Photo gallery of salon work |
| Testimonials | testimonials.html | Client reviews and feedback |
| Blog | blog.html | Beauty tips and salon news |
| Book Appointment | book-appointment.html | Booking form for clients |
| Contact | contact.html | Address, phone, hours, and map |

---

## Technologies Used

- (HTML) — semantic elements (`header`, `nav`, `main`, `section`, `article`, `figure`, `footer`, `form`)
- (CSS3) external stylesheet (`styles.css`)

---

//CSS Features//

### Base Styles
- CSS reset (`* { margin: 0; padding: 0; box-sizing: border-box; }`)
- Default font family, colour scheme, and spacing set on `body`

### Typography
- `font-family`, `font-size`, `font-weight`, `line-height`, and `letter-spacing` applied to all headings (`h1`–`h4`) and body text
- Consistent typographic scale across all pages

### Layout Structure
- **CSS Flexbox** — navigation bar, wrapping nav links
- **CSS Grid** — four grid layouts:
  - `.features-grid` — 3-column home page cards
  - `.services-grid` — 3-column service cards
  - `.gallery-grid` — 4-column photo gallery
  - `.products-grid` — 3-column product display

### Visual Styles
- `color`, `background-color`, `border`, `box-shadow` applied throughout
- Pseudo-classes used:
  - `:hover` — nav links, articles, figures, buttons, form inputs
  - `:focus` — form inputs, nav links, buttons (accessibility)
  - `:active` — links, nav, articles, figures, buttons, form inputs

### Responsive Design

| Breakpoint | Screen Size | Layout Changes |
|---|---|---|
| Desktop | > 1024px | Full grid layouts, horizontal nav |
| Tablet | ≤ 1024px | 2-column grids, smaller nav text |
| Mobile Large | ≤ 768px | Single column, stacked nav links |
| Mobile Small | ≤ 480px | Reduced font sizes, full-width buttons |

- Relative units (`rem`, `%`, `vw`) used throughout for font sizes and spacing
- Navigation wraps to vertical stack on mobile screens

### Responsive Images
- `<picture>` element with `<source media="...">` used on all images
- `srcset` and `sizes` attributes on every `<img>` tag
- `loading="lazy"` applied to all images for performance

---



## Browser Testing

The website has been designed to work across:

- Google Chrome (Desktop, Tablet, Mobile)
- Microsoft Edge (Desktop, Tablet, Mobile)
- Mozilla Firefox (Desktop, Tablet, Mobile)

To test responsive layouts, use browser developer tools:
1. Press `F12` to open DevTools
2. Click the **Toggle Device Toolbar** icon (or press `Ctrl + Shift + M`)
3. Select a device preset (e.g. iPhone, iPad) or set a custom screen width

---

## Contact Information (Salon)

- **Address:** 123 Beauty Lane, Midrand, Gauteng, South Africa
- **Phone:** 012 345 6789
- **Email:** info@karabonailbar.co.za
- **Hours:** Mon–Fri 09:00–18:00 | Sat 08:00–17:00 | Sun & Public Holidays: Closed

---

© 2026 Karabo Nail Bar & Hair Salon. All rights reserved.