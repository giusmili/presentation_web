import { Montserrat } from "next/font/google";
import "../css/cube.css";
import "../css/screen.css";
import "../css/responsive.css";
import { basePath } from "./basePath";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

const SITE_URL = "https://giusmili.github.io/presentation_web/";
const SITE_DESCRIPTION =
  "Cours de présentation du web : débuts d'Internet (Arpanet), histoire du World Wide Web et du langage HTML5.";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Présentation web",
  description: SITE_DESCRIPTION,
  manifest: `${basePath}/favicon/site.webmanifest`,
  openGraph: {
    title: "Présentation web",
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: "Présentation web",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: `${SITE_URL}images/cosmos_cover.jpg`,
        width: 1920,
        height: 1281,
        alt: "Présentation web",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Présentation web",
    description: SITE_DESCRIPTION,
    images: [`${SITE_URL}images/cosmos_cover.jpg`],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}#website`,
      name: "Présentation web",
      url: SITE_URL,
      inLanguage: "fr",
      description: SITE_DESCRIPTION,
      image: `${SITE_URL}images/cosmos_cover.jpg`,
      datePublished: "2021-07-07",
      dateModified: "2026-09-07",
      publisher: { "@id": `${SITE_URL}#organization` },
      author: { "@id": `${SITE_URL}#author` },
      mainEntity: { "@id": `${SITE_URL}#course` },
    },
    {
      "@type": "Organization",
      "@id": `${SITE_URL}#organization`,
      name: "LGC - R&D",
    },
    {
      "@type": "Person",
      "@id": `${SITE_URL}#author`,
      name: "giusmili",
      url: "https://github.com/giusmili",
    },
    {
      "@type": "LearningResource",
      "@id": `${SITE_URL}#course`,
      name: "Histoire du web et du HTML5",
      description:
        "Support de cours interactif retraçant les débuts d'Internet, l'histoire du World Wide Web et l'évolution du HTML5.",
      inLanguage: "fr",
      learningResourceType: "Présentation interactive",
      educationalLevel: "Débutant",
      provider: { "@id": `${SITE_URL}#organization` },
      about: [
        { "@type": "Thing", name: "Arpanet" },
        { "@type": "Thing", name: "World Wide Web" },
        { "@type": "Thing", name: "HTML5" },
      ],
      keywords: "HTML5, CSS3, Arpanet, World Wide Web, histoire d'Internet",
      hasPart: [
        { "@type": "CreativeWork", name: "Intro" },
        {
          "@type": "CreativeWork",
          name: "Débuts du web",
          about: "Arpanet 1969",
        },
        {
          "@type": "CreativeWork",
          name: "Histoire du web",
          about: "World Wide Web et HTML5",
        },
        { "@type": "CreativeWork", name: "Le html" },
      ],
    },
  ],
};

export default function RootLayout({ children }) {
  const year = new Date().getFullYear();

  return (
    <html
      lang="fr"
      className={montserrat.variable}
      style={{ "--bg-image": `url(${basePath}/images/cosmos_cover.jpg)` }}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {children}
        <footer className="site-footer">© LGC - R&amp;D - {year}</footer>
      </body>
    </html>
  );
}
