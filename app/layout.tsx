import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host =
    requestHeaders.get("x-forwarded-host") ??
    requestHeaders.get("host") ??
    "tigergardens.com";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? "https";
  const origin = `${protocol}://${host}`;

  return {
    metadataBase: new URL(origin),
    title: "Tiger Gardens | Trinity County Cannabis Cultivation",
    description:
      "Tiger Gardens is a licensed cannabis cultivation company rooted in Trinity County, California.",
    icons: {
      icon: "/favicon.svg",
      shortcut: "/favicon.svg",
    },
    openGraph: {
      title: "Tiger Gardens",
      description: "Cultivated with care in Trinity County, California.",
      type: "website",
      images: [
        {
          url: `${origin}/og.png`,
          width: 1792,
          height: 944,
          alt: "Tiger Gardens cultivation landscape in Trinity County, California",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Tiger Gardens",
      description: "Cultivated with care in Trinity County, California.",
      images: [`${origin}/og.png`],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
