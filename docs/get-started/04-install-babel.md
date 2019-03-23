# install babel7

> Babel

## shell

```shell
npm install --save-dev @babel/core babel-loader @babel/preset-env @babel/preset-react @babel/plugin-proposal-decorators @babel/plugin-proposal-object-rest-spread @babel/register
```

## .babelrc

```json
{
  "presets": ["@babel/preset-env", "@babel/react"],
  "plugins": [
    [
      "@babel/plugin-proposal-decorators",
      {
        "legacy": true
      }
    ]
  ]
}
```
