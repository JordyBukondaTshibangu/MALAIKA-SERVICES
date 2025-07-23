# 🌍 Malaika Services Website

This is the official multilingual website for **Malaika Services**, a professional firm offering tax, accounting, payroll, auditing, and outsourcing services. The site is designed to be modern, responsive, and accessible to a global audience with language selection features and interactive components.

---

## 🚀 Tech Stack

- **Next.js 13+ (App Router)**
- **TypeScript**
- **Tailwind CSS**
- **next-intl** for i18n support
- **Lucide-react** for icons
- **React Leaflet & Leaflet** for maps
- **Email.js / SMTP** (planned) for contact form integration

---

## 🌐 Features

- 🌍 **Multilingual support** (EN / FR)
- 📩 **Contact form** with planned email integration
- 🧭 **Interactive navigation bar** with language dropdown
- 🗺️ **Dynamic client-side map** using Leaflet & React-Leaflet
- ✅ **Dynamic service list** using localized content
- 📱 Fully responsive and mobile-friendly
- 💻 SEO-ready with metadata structure

---

## 📂 Project Structure (Important Folders)
├── app/
│ ├── [locale]/
│ │ ├── contact/page.tsx
│ │ └── ...
├── components/
│ ├── molecules/
│ │ ├── ms-map.tsx // Client-side Leaflet Map
│ ├── atoms/
│ │ └── language-switcher.tsx
├── messages/
│ ├── en.json
│ ├── fr.json
├── public/
│ └── leaflet/ // Custom leaflet icons

📦 Deployment
Deployed on Vercel (Recommended) or your own server.

npm install
npm run build
npm start

🧪 Development

npm install
npm run dev

👤 Author
Jordy Tshibangu
🇨🇩 Kinshasa, DRC
Contact: contact@malaikaservices.com