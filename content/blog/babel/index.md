---
title: Babel Allows the Latest and Greatest JS Syntax for Any Browser
date: 2020-04-14
---

I was reviewing my coworkers PR, and in there, I saw that he was validating properties in a nested objected to see if it existed, like so:

```
const src = asset.data && asset.data.asset && asset.data.asset.src;
const mainImage = {
  url: src && src.url,
  width: src && src.width,
  height: src && src.height,
  mime: src && src.mimeType
};
```

I mentioned in his PR that he could use the new [optional chaining](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining) feature javascript has but that it wasn't a big deal. He responded how there is a version of Microsoft Edge that does not support optional chaining and because we want to support the app in that version of Microsoft Edge, that doing optional chaining is not the way to go. What he did not know is that there are transpilers that take whatever standard or version of Javascript you use, and it will transpile or create the equivalent of your newer javascript syntax and transform it to its older form so all browsers can support it.

One of the popular transpilers used is called [babel](https://babeljs.io/). If you're using a popular bundler like Webpack or Parcel, they provide a babel config which targets modern JavaScript or anything that has shipped with valid JavaScript. _Side Note: Normally you don't want to ship to production experimental Javascript of Javascript, but if you keep up with [TC39](https://tc39.es/) and you know your JS code will land in the definition of Javascript, then in most cases it will be fine._

First thing you want to do is install the plugin in your terminal or shell like this:

```
babel --plugins @babel/plugin-proposal-optional-chaining script.js
```

Then in your babel config (.babelrc) add this:

```
{
  "plugins": ["@babel/plugin-proposal-optional-chaining"]
}
```

This means we don't have to write the older form of Javascript to support browsers who currently don't support new features of javascript. It means we write the new standard version of Javascript, and add a transpiler to transpile the newer syntax to older syntax that all browsers can interpret and execute.
