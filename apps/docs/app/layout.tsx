import { Footer, Layout, Navbar } from "nextra-theme-docs";
import { Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import "nextra-theme-docs/style.css";
import Image from "next/image";
import "./globals.css";

import logo from "./logo.svg";

export const metadata = {
  title: {
    default: "Nuvra-UI | Docs",
    template: `%s - Nuvra-UI`,
  },
  keywords: ["Nuvra-UI", "React", "Component-Libary"],
  // For more information on metadata API, see: https://nextjs.org/docs/app/building-your-application/optimizing/metadata
};

const navbar = (
  <Navbar
    logo={
      <span className="flex gap-2">
        <Image src={logo} alt="Nuvra-UI Logo" width={24} height={24} />
        <h1 className="font-semibold">Nuvra-UI</h1>
      </span>
    }
  />
);
const footer = <Footer>MIT {new Date().getFullYear()} © Nuvra-UI.</Footer>;

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      // Not required, but good for SEO
      lang="en"
      // Required to be set
      dir="ltr"
      // Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
      suppressHydrationWarning
    >
      <Head
      // ... Your additional head options
      >
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <body>
        <Layout
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/nuvra-ui/nuvra-ui/tree/main/apps/docs"
          footer={footer}
          darkMode={false}
          nextThemes={{ defaultTheme: "light" }}
          sidebar={{ defaultOpen: true, toggleButton: false }}
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
