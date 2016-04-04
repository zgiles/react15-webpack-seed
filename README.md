react15-webpack-seed
---

This is yet another react example project.. but this one is my example project that I will use for most of my react projects.  
The goal here is to use the latest React (15-rc2, and 15.0.0 when it comes out), and not include any other strange dependencies like express or another few small utilities, or gulp, etc. I want everything to be through a module and transpiled through some common tool (webpack in this case), and also to support ES6/ES2015/ES7/whatever.  Yet, I wanted modern features such as hot-loading for dev work (I'm tired of spending so much time setting up a dev server just to start working on code.. let's just code.), but I also want to be able to compile out a release version (or mostly-release) directly from this repo.  
Notice also that the app is in the folder "app", thus, you can just pull this repo, replace the "app" part and you should be good to compile. This is more of a build-shell than an example app.  
There are perhaps some more complicated ways to do things than what I'm doing, but I'd rather not. I know the `webpack.**.js` files have non-DRY code, but I'd rather do that and have a really functional build system than making a slice-and-dice build script.  

## How to use
```
npm install
npm run ( dev | build )
```

Modify the `webpack.**.js` as needed to include more loaders, etc.

## App Folder
Again, the point here is to be a seed, not demo React. The app is useless, but it can demonstrate hot loading and entry point into the app.  
The entry point is the `index.html` template (yes, template.. just so you can put your root element, no templating engine, don't worry.), and the `index.jsx` file which is what should actually do your `ReactDOM.render`.  
There are some folders in the app folder that I'm going to try and keep my differnet parts within, rather than just one mess in an `src` folder. It's not necessary though.

## Errata
* `react-hot-api` will complain that it cant work with the latest version of React, yes, it's probably true, but seems to work anyway.. In the release version it wouldn't be used regardless, so in the worst case, we wont get hot until 15.0.0 comes out.

## Related work
This example is based on several other examples, in part, many of whom did a really swell job and I admire, but wanted to merge:
* github.com/gaearon/react-hot-boilerplate  
* github.com/alicoding/react-webpack-babel  
* github.com/jamesknelson/webpack-black-triangle  
* github.com/fc-io/react-tape  
and lots of documentation, etc ...  
All the above related works are either MIT license or unspecified. I also did not copy directly any of their work, but based this on it.  I will present this repo under an MIT License as well. 

## LICENSE
License:
MIT LICENSE
Please see LICENSE file.
This license applies to all files in this project unless otherwise noted.
