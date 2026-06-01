import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Manrope } from "next/font/google";



export const metadata: Metadata = {
  title: 'Elegance Furnishings - Discover Premium Furniture',
  description: 'Explore Elegance Furnishings for high-quality, beautifully designed furniture that elevates your home. Find sofas, dining sets, beds, and more.',
  keywords: ["furniture, home decor, modern furniture, luxury furniture, custom furniture, living room, bedroom, dining room, sofas, beds, tables"],
  openGraph: {
    "title": "Elegance Furnishings - Discover Premium Furniture",
    "description": "Explore Elegance Furnishings for high-quality, beautifully designed furniture that elevates your home. Find sofas, dining sets, beds, and more.",
    "url": "/",
    "siteName": "Elegance Furnishings",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/creative-fengshui-practice-living-room-arrangement_23-2149135762.jpg",
        "alt": "Luxurious living room with modern furniture"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "Elegance Furnishings - Discover Premium Furniture",
    "description": "Explore Elegance Furnishings for high-quality, beautifully designed furniture that elevates your home. Find sofas, dining sets, beds, and more.",
    "images": [
      "http://img.b2bpic.net/free-photo/creative-fengshui-practice-living-room-arrangement_23-2149135762.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${manrope.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
