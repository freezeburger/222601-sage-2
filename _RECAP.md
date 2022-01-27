# React

# React Outils

* generate-react-cli
* react-devtools
* redux-devtools
* devtools
* npm

## NPM

* workflow - "scripts"
* "dependencies" - (Livrable)
* "devDependencies" - (outils de production du livrable)

`devDependencies` est utile pour les outils de CI.

**Installation NPM**

`npm i` travaille avec `package.json` et installe les dernières versiosn compatibles
`npm ci ` travaille avec `package-lock.json` et installe les dernières versions EXACTES

## Devtools (More Tolls > Perfomance Monitor)

* DOM Node
* CSS Recacls
* Heap Size
* Event Listener

## React Devtools

* Structure Composant et Props
* Performance de rendu (Commit de React)

## generate-react-cli

> Micro scaffolder de composant react. (apporte la standardisation des pratique notamment grace aux template)

** Installation et utilisation**

`npm i generate-react-cli` 

Première utilisation `npx  generate-react-cli` 
Utilisation `npx  generate-react-cli component NAME --type=TYPE` 

## Lazy Loading

> Chargement à la demande : s'appuie la syntaxe d'import dynamique

**Des Scripts**

```js

import('./path/to/other/scripts.js').then( m => m.doSomething() )
```

**Des Composant**

* Utilisation de `React.lazy`  et `Suspense`

```js
import React, { lazy, Suspense } from 'react';

const LazyFeatureEdition = lazy(() => import('./FeatureEdition'));

const FeatureEdition = props => (
  <Suspense fallback={null}>
    <LazyFeatureEdition {...props} />
  </Suspense>
);

export default FeatureEdition;
```


## React Application

### Organisation de la structure des fichiers

> Utiliser une statégié d'`index.js` pour préserver la maintanabilité du code.

* Découverte simplifier
* Préserver l'encasulation

## React State

### Application State

Ensemble des données commune à l'application. (Fonctionnelles et Technique)

### Component State

Mécanisme REACT de rendu propre à un composant.

*Par Extension* représente les données propre à un composant devant en déclencher un rendu.

### Redux Store

> C'est une FACADE, c-a-d une pattern de séparation entre les COMPOSANT et l'APPLICATION STATE.
> C'est aussi une Observer Pattern de l'application State

### Redux Concept

* Actions - Normalisation de ce qui est possible
* Store 
    * subscribe
    * dipsatch
    * getState - Etat momentané des données