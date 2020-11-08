# webpack v5 demo

## [ts-loader bug](https://github.com/TypeStrong/ts-loader/pull/1209)

### Reproduce

```shell
yarn
yarn workspace ts-loader-bug build
```

### Fix

1. Add `packageExtensions` to `.yarnrc.yml`.
2. Run `yarn` to reinstall.
3. Run `yarn workspace ts-loader-bug build`.

## [webpack-cli bug](https://github.com/webpack/webpack-cli/pull/1941)

### Reproduce

```shell
yarn
yarn workspace webpack-cli-bug start
```

### Fix

1. Add `packageExtensions` to `.yarnrc.yml`.
2. Run `yarn` to reinstall.
3. Run `yarn workspace webpack-cli-bug start`.
