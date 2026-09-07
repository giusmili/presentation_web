import "../css/cube.css";
import "../css/screen.css";
import "../css/responsive.css";

export const metadata = {
  title: "Présentation web",
  manifest: "/favicon/site.webmanifest",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Présentation web",
  url: "https://giusmili.github.io/presentation_web/",
  inLanguage: "fr",
  description:
    "Cours de présentation du web : débuts d'Internet (Arpanet), histoire du World Wide Web et du langage HTML5.",
  publisher: {
    "@type": "Organization",
    name: "LGC - R&D",
  },
};

export default function RootLayout({ children }) {
  const year = new Date().getFullYear();

  return (
    <html lang="fr">
      <head>
        <link
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
          rel="stylesheet"
          integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
          crossOrigin="anonymous"
        />
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
