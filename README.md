# webpack v5 demo

## webpack-cli

### Reproduce

```shell
yarn
yarn workspace webpack-cli-bug start
```

### Fix

1. Add `packageExtensions` to `.yarnrc.yml`.
2. Run `yarn` to reinstall.
3. Run `yarn workspace webpack-cli-bug start`.
