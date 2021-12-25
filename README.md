# React & htm & styled-components , without build

## React esm
React not support es modules yet, so used https://github.com/lgh06/es-react ,  
a fork of https://github.com/lukejacksonn/es-react and then update react to version 17.0.2 .  

## htm  
JSX like syntax, no build step needed.  
Support esm offically, and no other dependencies.
https://www.npmjs.com/package/htm  

## styled-components  
Write CSS in JS easier.  
self write a simple rollup configuration file, then bundle all js files from its official esm version.  
[Official website](https://github.com/styled-components/styled-components)  
[file used](https://cdn.jsdelivr.net/npm/styled-components@5.3.3/dist/styled-components.js)  

## Finally  
they worked.

## Install & See a demo 
```
npm install  
npx serve .  
start http://localhost:3000/  (windows)
open http://localhost:3000/ (Mac)
```
