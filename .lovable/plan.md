

# 🐾 MANIRAGUHA Daniel — Veterinary Portfolio Website

A bold, modern portfolio website with a full admin panel for managing all content dynamically.

---

## 🎨 Design Direction
- **Bold & Modern** dark theme with strong accent colors (deep teal/emerald green paired with dark backgrounds)
- High-contrast typography, striking hero images
- Animal-themed visual accents and smooth animations
- Fully responsive (mobile, tablet, desktop)

---

## 📄 Public Pages

### 1. **Home / Hero**
- Full-screen hero section with Dr. MANIRAGUHA Daniel's photo and tagline
- Quick intro, call-to-action buttons (Book Appointment, View Services)
- Highlights section: years of experience, specialties, animals treated

### 2. **About Me**
- Biography, education, certifications
- Professional experience timeline
- Skills section with visual indicators
- Working hours display

### 3. **Services**
- Dynamic list of veterinary services (surgery, prevention, treatment, etc.)
- Each service with icon, description, and optional image
- Filterable or categorized layout

### 4. **Gallery / Portfolio**
- Photo gallery of domestic animals, treatment processes, surgeries
- Medicine and equipment showcase
- Lightbox view for full-size images
- Category filters (Surgery, Treatment, Prevention, Animals)

### 5. **Blog / Articles**
- Veterinary tips, articles, and news
- Individual article pages with rich content
- Categories and date-based organization

### 6. **Testimonials**
- Client reviews displayed in a carousel or card grid
- Star ratings, client names, and feedback

### 7. **Contact**
- Contact form (name, email, message)
- Phone number, email, location/map
- Social media links

### 8. **Appointments**
- Online appointment request form
- Date/time selection, reason for visit, animal type
- Confirmation feedback

---

## 🔐 Admin Panel

A secure, login-protected admin dashboard where Dr. Daniel can manage all website content:

### Admin Features:
- **Dashboard** — Overview of content (total services, blog posts, gallery items, appointments)
- **Page Content Editor** — Edit text and images on Home, About, Contact pages
- **Services Manager** — Add, edit, delete services with images and descriptions
- **Gallery Manager** — Upload, organize, and delete portfolio photos with categories
- **Blog Manager** — Create, edit, publish, and delete articles
- **Testimonials Manager** — Add, edit, and remove client testimonials
- **Appointment Requests** — View and manage incoming appointment requests

---

## ⚙️ Backend (Supabase via Lovable Cloud)

Since Lovable uses Supabase (not MongoDB/Node.js), the backend will include:
- **Database tables** for services, gallery, blog posts, testimonials, appointments, page content
- **Authentication** for admin login
- **Storage buckets** for image uploads (gallery, services, blog)
- **Role-based access** — Admin role for content management
- **Row-Level Security** — Public read access, admin-only write access

---

## 🚀 Implementation Approach

1. **Phase 1** — Set up the design system, layout, and all public-facing pages with placeholder content
2. **Phase 2** — Set up Supabase backend (database, auth, storage)
3. **Phase 3** — Build admin panel with full CRUD for all content types
4. **Phase 4** — Connect public pages to dynamic data from the database
5. **Phase 5** — Polish animations, responsive design, and final touches

