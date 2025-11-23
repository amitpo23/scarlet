# Scarlet Hotel Tel Aviv - Official Website

![License](https://img.shields.io/badge/license-Proprietary-red.svg)
![Node](https://img.shields.io/badge/node-%3E%3D18.0.0-brightgreen.svg)
![React](https://img.shields.io/badge/react-19.0.0-61dafb.svg)
![TypeScript](https://img.shields.io/badge/typescript-5.x-blue.svg)
![Tailwind](https://img.shields.io/badge/tailwind-4.x-38bdf8.svg)
![pnpm](https://img.shields.io/badge/pnpm-8.x-orange.svg)

A modern, fully-featured boutique hotel website built with React 19, TypeScript, and Tailwind CSS 4. Features bilingual support (Hebrew/English), interactive booking system, AI chatbot, and comprehensive hotel information.

![Scarlet Hotel](client/public/logo-clean.png)

## 🌟 Features

### Core Functionality
- **Bilingual Support**: Full Hebrew and English localization with RTL/LTR text direction switching
- **Interactive Booking System**: Date picker, guest selection, room type selection, and price calculation
- **AI Chatbot**: 24/7 automated FAQ responses with intelligent question detection
- **Weather Widget**: Real-time Tel Aviv weather with 5-day forecast
- **Google Maps Integration**: Interactive map with 8 nearby attractions and detailed information
- **Professional Photo Gallery**: 12 high-quality images with category filtering and lightbox view
- **Guest Reviews**: Testimonials with star ratings from Booking.com, Google, and TripAdvisor
- **Special Offers**: 6 promotional packages with discount badges and validity dates
- **FAQ Section**: 10 common questions with accordion interface
- **Instagram Feed**: Social media integration with Facebook and Twitter links
- **WhatsApp Widget**: Direct messaging for instant guest communication

### Legal & Accessibility
- **Accessibility Statement**: Compliant with Israeli Standard 5568
- **Privacy Policy**: Aligned with Privacy Protection Law 1981
- **Terms of Service**: Comprehensive booking terms and cancellation policies
- **WCAG 2.1 Compliance**: ARIA labels, semantic HTML, keyboard navigation support

### Design & UX
- **Modern Boutique Aesthetic**: Scarlet red theme with warm tones and elegant typography
- **Responsive Design**: Optimized for mobile, tablet, and desktop
- **Smooth Animations**: Hover effects, transitions, and auto-rotating hero images
- **Professional Typography**: Playfair Display for headings, Inter for body text

## 🛠️ Technology Stack

### Frontend
- **React 19**: Latest React with hooks and modern patterns
- **TypeScript**: Type-safe development
- **Vite**: Fast build tool and dev server
- **Tailwind CSS 4**: Utility-first CSS framework
- **Wouter**: Lightweight client-side routing
- **shadcn/ui**: High-quality UI components
- **Lucide React**: Beautiful icon library
- **React Day Picker**: Date selection for booking system

### APIs & Services
- **Open-Meteo API**: Free weather data (no API key required)
- **Google Maps API**: Interactive maps with Manus proxy authentication
- **Instagram**: Social media integration

### Development Tools
- **ESLint**: Code linting
- **PostCSS**: CSS processing
- **pnpm**: Fast, disk-efficient package manager

## 📁 Project Structure

```
scarlet-hotel/
├── client/                    # Frontend application
│   ├── public/               # Static assets
│   │   ├── images/          # Hotel photos
│   │   └── logo-clean.png   # Hotel logo
│   ├── src/
│   │   ├── components/      # Reusable React components
│   │   │   ├── ui/         # shadcn/ui components
│   │   │   ├── AIChatbot.tsx
│   │   │   ├── AttractionsMap.tsx
│   │   │   ├── BookingModal.tsx
│   │   │   ├── FAQ.tsx
│   │   │   ├── GuestReviews.tsx
│   │   │   ├── InstagramFeed.tsx
│   │   │   ├── Map.tsx
│   │   │   ├── PhotoGallery.tsx
│   │   │   ├── SpecialOffers.tsx
│   │   │   ├── WeatherWidget.tsx
│   │   │   └── WhatsAppWidget.tsx
│   │   ├── contexts/        # React contexts
│   │   │   ├── LanguageContext.tsx
│   │   │   └── ThemeContext.tsx
│   │   ├── pages/          # Page components
│   │   │   ├── Home.tsx
│   │   │   ├── Accessibility.tsx
│   │   │   ├── Privacy.tsx
│   │   │   ├── Terms.tsx
│   │   │   └── NotFound.tsx
│   │   ├── App.tsx         # Main app component with routes
│   │   ├── main.tsx        # React entry point
│   │   └── index.css       # Global styles
│   └── index.html          # HTML template
├── shared/                  # Shared types and constants
│   └── const.ts            # App configuration
├── package.json            # Dependencies and scripts
├── tsconfig.json           # TypeScript configuration
├── tailwind.config.ts      # Tailwind CSS configuration
├── vite.config.ts          # Vite configuration
└── README.md              # This file
```

## 🚀 Getting Started

### Prerequisites

- **Node.js**: v18.0.0 or higher
- **pnpm**: v8.0.0 or higher (or npm/yarn)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/amitpo23/scarlet.git
   cd scarlet
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Start development server**
   ```bash
   pnpm dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

### Build for Production

```bash
# Build the project
pnpm build

# Preview production build
pnpm preview
```

## ⚙️ Configuration

### Environment Variables

The project uses built-in Manus environment variables for API authentication. No additional API keys required for:
- Google Maps (authenticated via Manus proxy)
- Weather API (Open-Meteo is free)

### Customization

#### Update Hotel Information
Edit `shared/const.ts`:
```typescript
export const APP_TITLE = "Scarlet Hotel Tel Aviv";
export const APP_LOGO = "/logo-clean.png";
```

#### Update Social Media Links
Edit `client/src/components/InstagramFeed.tsx`:
```typescript
href="https://www.instagram.com/scarlet_hoteltlv/"
href="https://facebook.com/scarlethoteltelaviv"
href="https://twitter.com/scarlethotel_tlv"
```

#### Update WhatsApp Number
Edit `client/src/components/WhatsAppWidget.tsx`:
```typescript
const phoneNumber = "972501234567"; // Replace with actual number
```

#### Update Hotel Location
Edit `client/src/components/AttractionsMap.tsx`:
```typescript
const hotelLocation = { lat: 32.0853, lng: 34.7818 };
```

## 🎨 Design System

### Colors
- **Primary (Scarlet Red)**: `#DC143C`
- **Secondary (Warm Peach)**: `#FFE4E1`
- **Accent (Dark Green)**: `#2C5F2D`
- **Background**: White/Dark based on theme

### Typography
- **Headings**: Playfair Display (serif, elegant)
- **Body**: Inter (sans-serif, modern)

### Breakpoints
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🌐 Internationalization (i18n)

The website supports Hebrew and English with automatic RTL/LTR text direction switching.

### Adding New Translations

Edit `client/src/contexts/LanguageContext.tsx` and use the `t()` function:

```typescript
const { t } = useLanguage();

<h1>{t("כותרת בעברית", "English Heading")}</h1>
```

## 🤖 AI Chatbot

The chatbot automatically detects and responds to questions about:
- Check-in/check-out times
- Parking availability and pricing
- Breakfast service
- WiFi access
- Pet policy
- Cancellation terms
- Beach proximity
- Airport transportation
- Room pricing
- Hotel amenities

### Extending Chatbot Responses

Edit `client/src/components/AIChatbot.tsx` in the `getFAQResponse()` function.

## 📱 Social Media Integration

### Instagram Feed
Displays 6 recent posts with likes and comments. Update the `posts` array in `InstagramFeed.tsx` with actual Instagram data.

### WhatsApp Integration
Floating widget with pre-filled message template. Update phone number in `WhatsAppWidget.tsx`.

## 🗺️ Google Maps Integration

The project uses Manus proxy for Google Maps authentication. All Maps JavaScript API features work automatically:
- Markers and info windows
- Directions and routes
- Places and geocoding
- Drawing and visualization

No API key configuration needed!

## 📊 Analytics & Tracking

To add analytics:

1. **Google Analytics 4**
   - Add GA4 tracking code to `client/index.html`
   - Track booking conversions and user behavior

2. **Facebook Pixel**
   - Add pixel code to `client/index.html`
   - Track ad campaign performance

## 🧪 Testing

```bash
# Run tests (if configured)
pnpm test

# Type checking
pnpm type-check

# Linting
pnpm lint
```

## 📦 Deployment

### Manus Platform (Recommended)
1. Save checkpoint in development environment
2. Click "Publish" button in management UI
3. Configure custom domain in Settings → Domains

### Other Platforms
The project can be deployed to:
- **Vercel**: `vercel --prod`
- **Netlify**: `netlify deploy --prod`
- **GitHub Pages**: Build and deploy `dist/` folder

## 🔒 Security & Privacy

- All forms include CSRF protection
- Sensitive data encrypted in transit (HTTPS)
- Privacy policy compliant with Israeli law
- Cookie consent (to be implemented)
- No user data stored without consent

## 🐛 Known Issues

- WhatsApp phone number is placeholder (needs update)
- Social media links point to example profiles (needs update)
- Instagram feed uses mock data (integrate real API)

## 📝 TODO

See `todo.md` for complete feature checklist and future improvements.

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📄 License

This project is proprietary and confidential. All rights reserved by Scarlet Hotel Tel Aviv.

## 👥 Authors

- **Development**: Built with Manus AI
- **Design**: Scarlet Hotel Brand Guidelines
- **Content**: Scarlet Hotel Management

## 📞 Support

For technical support or questions:
- **Email**: support@scarlethotel.com (placeholder)
- **WhatsApp**: +972-50-123-4567 (placeholder)
- **Website**: https://scarlethotel.com (placeholder)

## 🙏 Acknowledgments

- [React](https://react.dev/) - UI framework
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [shadcn/ui](https://ui.shadcn.com/) - UI components
- [Lucide](https://lucide.dev/) - Icons
- [Open-Meteo](https://open-meteo.com/) - Weather data
- [Google Maps](https://developers.google.com/maps) - Maps integration

---

**Built with ❤️ for Scarlet Hotel Tel Aviv**
