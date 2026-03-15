import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";

const halant = Halant({
  variable: "--font-halant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "OmeChat - Random Video Chat with Strangers Worldwide",
  description: "Connect instantly with people from 190+ countries on OmeChat. Free random video chat platform with advanced filters, HD streaming, and 24/7 moderation for safe global connections.",
  keywords: "random video chat, omegle alternative, video call strangers, global chat platform, free video chat, online connections",
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL("https://omechat.com"),
  alternates: {
    canonical: "https://omechat.com",
  },
  openGraph: {
    title: "OmeChat - Random Video Chat Platform",
    description: "Meet new people worldwide on OmeChat. Instant video chat, advanced filters, and safe community. Join 2M+ daily active users.",
    type: "website",
    siteName: "OmeChat",
    url: "https://omechat.com",
    images: [
      {
        url: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Azm8yfAPJyb1mzjrikJIHhKG1a/a-diverse-young-person-smiling-warmly-at-1773609390102-50d0b667.png",
        alt: "OmeChat - Connect with people worldwide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "OmeChat - Random Video Chat Worldwide",
    description: "Connect with strangers from 190+ countries instantly. Free, safe, and fun video chat platform.",
    images: [
      "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Azm8yfAPJyb1mzjrikJIHhKG1a/a-diverse-young-person-smiling-warmly-at-1773609390102-50d0b667.png",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body
          className={`${halant.variable} ${inter.variable} ${poppins.variable} antialiased`}
        >
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