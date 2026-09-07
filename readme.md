# Présentation web

Cours interactif retraçant les débuts d'Internet, l'histoire du World Wide Web et l'évolution du HTML5. Initialement écrit en HTML/CSS/jQuery, le projet a été migré vers Next.js (App Router).

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)


## Démarrage

```bash
npm install
npm run dev
```

Puis ouvrir : ```http://localhost:3000```

> Le site original en HTML/CSS/jQuery pur (sans framework) reste disponible dans le dossier voisin `1_a-presentation-web-histoire-original`.

## Structure du projet

```
📁 1_a-presentation-web-histoire/
├── 📁 app/
│   ├── 📁 components/
│   │   ├── 📄 Presentation.js   # nav + gestion des onglets, menu burger
│   │   ├── 📄 Intro.js          # cube 3D
│   │   ├── 📄 CardA.js          # Arpanet 1969
│   │   ├── 📄 CardB.js          # World Wide Web & dates clés
│   │   ├── 📄 CardC.js          # Le html (flip-card)
│   │   └── 📄 Loader.js         # spinner de chargement
│   ├── 📄 layout.js             # head, polices, schema.org
│   ├── 📄 page.js
│   ├── 📄 icon.png              # favicon
│   └── 📄 apple-icon.png
├── 📁 css/
│   ├── 📄 screen.css            # styles globaux
│   ├── 📄 cube.css              # animation 3D du cube
│   └── 📄 responsive.css        # media queries mobile
├── 📁 public/
│   ├── 📁 favicon/
│   └── 📁 images/
├── 📄 next.config.mjs           # export statique + basePath GitHub Pages
├── 📄 package.json
├── 📄 jsconfig.json
├── 📄 eslint.config.mjs
└── 📄 readme.md
```

## Exemples de code (support de cours)

### HTML5 — structure de base

```html
<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Présentation web</title>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
	<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">

	<link rel="stylesheet" href="css/cube.css" media="screen" type="text/css">
	<link rel="stylesheet" href="css/screen.css" media="screen" type="text/css">
	<link rel="stylesheet" href="css/responsive.css" media="screen" type="text/css">
</head>
<body>
    <!-- content -->
</body>
</html>
```

### CSS3 — reset

```css
/* reset css */

html{
    font-size: 62.5%;
}
body{
    font: 1.6rem sans-serif;
    margin: 0;
}
*{
    box-sizing: border-box;
}
h1,h2,h3,ul,ol,p{
    margin: 0;
    list-style: none;
}
:root{
    --color-font-default: rgba(0,0,0,1);
    --color-font-warning: rgba(255,0,0,1);
    --color-font-info: rgba(0,0,200,1);

}
```
