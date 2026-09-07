import "../css/cube.css";
import "../css/screen.css";
import "../css/responsive.css";

export const metadata = {
  title: "Présentation web",
  manifest: "/favicon/site.webmanifest",
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
      </head>
      <body>
        {children}
        <footer className="site-footer">© LGC - R&amp;D - {year}</footer>
      </body>
    </html>
  );
}
