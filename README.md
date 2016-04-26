# Typed js-sha256
The type definition for [`js-sha256`](https://github.com/emn178/js-sha256)

## Warning

The module does some basic sniffing to detect Node.js (`typeof(module) != 'undefined'`).
If it detects Node.js it exposes an ES6 compliant interface, otherwise it registers itself to the parent context.
This definition only exposes the ES6 module interface, the real way the module exposes itself is:

````typescript
sha256.sha256 = sha256;
sha256.sha224 = sha224;
module.exports = sha256;
````typescript

This definition does not expose the cyclic nature of sha256.sha256 and the "module as a function" export nature.

## LICENSE
MIT

## Contributing

```sh
# Fork this repo
npm install

npm run watch

# add tests, make changes, pass tests ... then [ctrl+c]
npm run publish
```

## Updating
Update `typings.json/version` to match the source version you are typing against.
e.g. if you are creating typings for `chai@3.5.0`, then:
```js
// typings.json
{
  "version": "3.5.0"
  // ...
}
```
