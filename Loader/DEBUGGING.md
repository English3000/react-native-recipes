1. If `react-native run-android` has a build error...
  * Don't debug. Just start anew.
    > i.e. If it doesn't have to do w/ my code, it's not my problem.

2. If simulator complains about `@babel/regenerator-runtime`...
  * Remove `node_modules` & any `lock` files. `npm i`
    > #setup

3. If simulator has a `500` error...
  * Close it. Kill the terminal server. Re-`run`
    > happened when I updated `node_modules`