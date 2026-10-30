# Knowbot AI - UI/UX Design System & Theme Guide

This document serves as the single source of truth for the Knowbot AI design system. Any agent or developer working on building, upgrading, or modifying the UI MUST adhere to the principles, color palettes, animations, and component structures defined here to maintain a cohesive, premium, and modern aesthetic.

---

## 1. Core Philosophy
- **Dark Mode Only**: The platform is exclusively dark mode to provide a sleek, professional, and developer-friendly experience.
- **Monochrome with a Punch**: The UI relies heavily on deep blacks and grays, using a single vibrant accent color ("Knowbot Blue") to draw attention to critical interactive elements.
- **Subtle Depth**: Instead of flat colors, depth is created using subtle borders (`rgba(255, 255, 255, 0.05)`), soft drop shadows, and distinct layered background colors.
- **Dynamic & Alive**: Interactions should feel responsive. Use micro-animations (scale, fade, smooth width transitions) to make the UI feel premium.

---

## 2. Color Palette & Global Variables
The application uses Tailwind CSS. The core theme is defined in `globals.css` using the following CSS variables. 

### Backgrounds & Surfaces
- **Main Background**: `#0e0e0e` (Deepest black/gray, used for the `body` and outermost containers).
- **Cards & Panels**: `#18181b` (Slightly lighter dark gray, used for floating cards, sidebars, and main content containers). Tailwind: `bg-card` or `bg-[#18181b]`.
- **Inputs & Sub-panels**: `#121214` (Used for input fields, inner nested cards, or alternate table rows).
- **Borders**: `rgba(255, 255, 255, 0.05)` or `border-white/5` (Used to separate dark elements cleanly without high contrast).

### Accents & Typography
- **Primary Accent (Knowbot Blue)**: `#2962ff`. This is the signature brand color. Used for progress bars, active icons, specific borders, and primary text inside white buttons.
- **Primary Text**: `#ffffff` (Pure white for headings and main paragraph text). Tailwind: `text-foreground` or `text-white`.
- **Secondary Text**: `#9ca3af` (Gray-400) or `#6b7280` (Gray-500). Used for descriptions, subtitles, and less important information.

---

## 3. Typography & Icons
- **Font Family**: Uses `geist-sans` or `Inter` as the primary sans-serif. 
- **Headings**: Use `tracking-tight` (negative letter spacing) for a modern, bold look on large headers (e.g., `text-3xl font-bold tracking-tight text-white`).
- **Icons**: Exclusively use **Lucide React** (`lucide-react`). Standard icon sizes are `size={16}` for inline/buttons and `size={20}` to `size={24}` for decorative card headers.

---

## 4. UI Components

### Buttons
Buttons should feel tactile and prominent.
1. **Primary Call-to-Action (CTA)**:
   - Shape: Pill-shaped (`rounded-full`).
   - Style: Bright white background with the Knowbot Blue text.
   - Classes: `px-6 py-2.5 bg-white text-[#2962ff] hover:bg-gray-100 rounded-full font-medium transition-colors shadow-sm`
2. **Secondary/Ghost Action**:
   - Shape: Pill-shaped (`rounded-full`).
   - Style: Dark gray background with light text.
   - Classes: `px-6 py-2.5 bg-[#25252a] text-gray-300 hover:bg-[#2a2a30] rounded-full font-medium transition-colors border border-border`
3. **Destructive/Danger**:
   - Style: Deep red background with bright red text.
   - Classes: `bg-[#4a1515] text-red-300 border border-[#6b1e1e] hover:bg-[#5a1a1a]`

### Cards & Containers
- Standard Card: `bg-card rounded-2xl border border-border p-6 shadow-sm`
- To group an icon and a title at the top of a card:
  ```tsx
  <div className="flex items-center gap-4 mb-6">
      <div className="size-10 rounded-full bg-[#2a2a35] flex items-center justify-center">
          <Icon size={20} className="text-white" />
      </div>
      <div>
          <h2 className="text-lg font-bold text-white">Card Title</h2>
          <p className="text-gray-500 text-sm">Subtitle description here.</p>
      </div>
  </div>
  ```

### Inputs & Forms
- Style: Dark background, light text, with a Knowbot Blue focus ring.
- Classes: `w-full px-4 py-2.5 rounded-lg border border-border bg-[#121214] text-white focus:ring-1 focus:ring-[#2962ff]/50 focus:border-[#2962ff] outline-none transition-all text-sm`

### Progress Bars
- Background track: `bg-white/5`
- Fill: `bg-[#2962ff]`
- Classes:
  ```tsx
  <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
      <div className="h-full bg-[#2962ff] rounded-full transition-all duration-1000" style={{ width: '45%' }} />
  </div>
  ```

---

## 5. Layout & Navigation Patterns
- **Global Scrollbar**: Hidden globally via `globals.css` (`::-webkit-scrollbar { display: none; }`).
- **Sidebar Tabs**: Active states should use a left border indicator to signify selection.
  - Active: `bg-card border-l-[3px] border-[#2962ff] text-white`
  - Inactive: `hover:bg-card/50 border-l-[3px] border-transparent text-gray-400`
- **Documentation/Showcase Layouts**: Use a 2-column alternating grid (`grid lg:grid-cols-2`) where text is horizontally aligned next to beautiful image assets inside heavily rounded (`rounded-2xl`) bordered containers.

---

## 6. Animations & Micro-Interactions
The UI must feel alive. Use the following animation classes:
- **Fade In**: Use the custom `animate-fadeIn` class (defined in `globals.css`) for cards or sections rendering on the screen for the first time.
- **Hover Scale**: For interactive images, dashboard cards, or previews, use `transform transition-transform duration-500 hover:scale-[1.02]`.
- **Value Transitions**: For progress bars or loading states, always use `transition-all duration-1000` to allow the bar to slide into place smoothly upon data load.
- **Shake**: Use the custom `animate-shake` class for errors (e.g., failed form submission or invalid login).

## 7. Execution Rules for AI Agents
If you are an AI Agent tasked with upgrading or building a new page:
1. DO NOT use generic Tailwind colors like `blue-500` or `red-500` unless specifying explicit error/success states. Use the defined Hex codes or CSS variables (`bg-primary`, `bg-[#18181b]`).
2. DO NOT use white mode or light themes. 
3. ENSURE buttons match the pill shape (`rounded-full`) unless they are part of a tight grid.
4. ALWAYS add Lucide React icons to headings or cards to improve visual hierarchy. 
5. ALWAYS extract variables directly from the `bot` context if building dashboard settings pages (e.g., `bot?.avg_response_time`), ensuring UI components are strictly functional.
