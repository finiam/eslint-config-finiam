# eslint-config-finiam

Our own linters base on our Javascript linters. An extension upon the `airbnb` config to re-use across our projects.

## Usage

Just install them with either `npm` or `yarn`.

If only using the base config do:
```
yarn add --dev eslint-config-finiam eslint-config-airbnb-base eslint-config-prettier eslint-plugin-prettier eslint-config-import eslint-plugin-import
```

If you are using the React config do:
```bash
yarn add --dev eslint-config-finiam eslint-config-airbnb eslint-config-prettier eslint-plugin-prettier eslint-config-import eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks
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
