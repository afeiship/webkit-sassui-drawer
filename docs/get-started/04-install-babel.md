# install babel7

> Babel

## shell

```shell
npm install --save-dev @babel/core @babel/preset-env @babel/preset-react @babel/register babel-loader
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
