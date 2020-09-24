# eslint-config-finiam

Our own linters base on our Javascript linters. An extension upon the `airbnb` config to re-use across our projects.

## Usage

Just install them with either `npm` or `yarn`.

```bash
yarn add --dev eslint-config-finiam
```

To use them simply extend their configs on your `ESLint` config.

To use with regular Javascript:
```json
{
  "extends": "finiam"
}
```

To use with React:
```json
{
  "extends": "finiam/react"
}
```
