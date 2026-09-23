import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { ThemeProvider } from "next-themes";
import ScrollToTop from '@/components/ScrollToTop';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Toaster } from 'react-hot-toast';
import Aoscompo from "@/utils/aos";
import NextTopLoader from 'nextjs-toploader';
import { Metadata } from "next";

const dmsans = DM_Sans({ subsets: ["latin"], variable: "--font-body" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-heading" });

const siteUrl = "https://anwarbridalstudio.com";
const siteTitle = "Anwar's Bridal Studio | Where Beauty Meets Perfection";
const siteDescription = "Anwar's Bridal Studio offers bridal makeup, hair styling, mehendi, saree draping and nail art in Prayagraj — where beauty meets perfection.";
const ogImage = "/images/logo/anwars-logo.webp";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s | Anwar's Bridal Studio",
  },
  description: siteDescription,
  keywords: [
    "bridal makeup Prayagraj",
    "bridal studio Prayagraj",
    "makeup artist Prayagraj",
    "hair specialist Prayagraj",
    "mehendi design Prayagraj",
    "Anwar's Bridal Studio",
    "Anwar Bridal Studio",
    "party makeup Prayagraj",
    "saree draping",
  ],
  authors: [{ name: "Anwar's Bridal Studio" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "Anwar's Bridal Studio",
    title: siteTitle,
    description: siteDescription,
    images: [{ url: ogImage, width: 225, height: 225, alt: "Anwar's Bridal Studio" }],
  },
  twitter: {
    card: "summary",
    title: siteTitle,
    description: siteDescription,
    images: [ogImage],
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  name: "Anwar's Bridal Studio",
  image: `${siteUrl}${ogImage}`,
  url: siteUrl,
  telephone: "+91-70815-00010",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Tashkent Marg, Civil Lines",
    addressLocality: "Prayagraj",
    addressRegion: "Uttar Pradesh",
    postalCode: "211001",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 25.4555501,
    longitude: 81.833386,
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.7",
    reviewCount: "1146",
  },
  sameAs: [
    "https://www.instagram.com/anwars_bridal_studio00/",
    "https://www.facebook.com/anwarsthepersonalitymaker/",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${dmsans.className} ${playfair.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <ThemeProvider
          attribute="class"
          enableSystem={true}
          defaultTheme="dark"
        >
          <Aoscompo>
            <Header />
            <NextTopLoader color="#C9A227" />
            {children}
            <Footer />
          </Aoscompo>
          <ScrollToTop />
          <WhatsAppButton />
          <Toaster position="top-center" />
        </ThemeProvider>
      </body>
    </html>
  );
}
