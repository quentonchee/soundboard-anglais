# Soundboard

Un soundboard simple, qui tourne dans le navigateur (ordinateur, tablette ou téléphone).

## Ajouter un son

1. Copie ton fichier audio (`.mp3`, `.wav` ou `.ogg`) dans le dossier `sounds/`.
2. Ouvre `sounds.js` et ajoute une ligne dans la liste `SOUNDS` :

```js
const SOUNDS = [
  { name: "Eye-Tee", file: "sounds/Eye-Tee.mp3" },
  { name: "Mon nouveau son", file: "sounds/mon-son.mp3" },
];
```

3. Enregistre, puis publie les changements (voir ci-dessous) : le bouton apparaît.

## Utiliser sur tablette

Le site est publié sur GitHub Pages. Ouvre simplement l'adresse dans le navigateur de la tablette
(et ajoute-la à l'écran d'accueil si tu veux un raccourci).

## Lancer en local

Les sons ne se chargent pas si tu ouvres `index.html` directement depuis l'explorateur de fichiers.
Lance un petit serveur local depuis le dossier du projet :

```bash
python3 -m http.server 8000
```

Puis ouvre <http://localhost:8000>.

## Publier une modification

```bash
git add .
git commit -m "Ajout d'un son"
git push
```

Le site se met à jour automatiquement quelques instants après le `push`.

## Remarque

Le dépôt est public : n'y mets que des sons que tu as le droit de diffuser.
