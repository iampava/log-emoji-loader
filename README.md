# log-emoji Loader
Webpack loader that prepends "😊" or "😡" in all the console.log/console.error instructions. 

### Example

```js
console.log("Hi!");

console.error("Wut is going on?");
```
changes into
```js
console.log("😊", "Hi!");

console.error("😡", "Wut is going on?");
```

Works with **double-quotes**, **single-quotes** and **back-ticks**!


### Install

```bash
npm install log-emoji-loader --save-dev
```

### Usage

To use this loader just add it to **webpack**'s config and voila!

```js
module.exports = {
	...
    module: {
                rules: [{
                    test: /\.js$/,
                    use: ["log-emoji-loader", "babel-loader"]
                }]
            }
};
```

### Production
<p class="warning">I don't recommend using this loader when building for production unless you really want your users to see emojis in the console. 😂</p>