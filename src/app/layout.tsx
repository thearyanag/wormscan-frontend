import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Provider } from "@/context/Provider";
import { Box } from "@/utils/chakra";
import type { Metadata } from "next";
import { Hanken_Grotesk } from "next/font/google";
import { ReactNode } from "react";
import Head from "next/head";

const haken = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["500"],
});

const APP_NAME = "Wormscan";
const APP_DEFAULT_TITLE = "Wormscan";
const APP_TITLE_TEMPLATE = "";
const APP_DESCRIPTION = "Your friendly cross-chain explorer.";

export const metadata: Metadata = {
  metadataBase: new URL("https://wormscan.co"),
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_DEFAULT_TITLE,
    // startUpImage: [],
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
    images: "./twitter-image.png",
  },
  twitter: {
    card: "summary",
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
    images: "./twitter-image.png",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <Head>
        {/* Google Tag Manager script */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-87TPEFVL82"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-87TPEFVL82');
              `,
          }}
        ></script>
      </Head>
      <body className={haken.className}>
        <Provider>
          <Header />
          <Box minH={"100vh"}>{children}</Box>
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
