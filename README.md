# Basic testing challenges in NodeJS

Your goal is to write tests for all the files in the `src` folder without changing them in any way.

## Preparing your environment

You can skip steps 1 and 2 if your development environment already has NodeJS 15 set up. Check the [`.tool-versions`](.tool-versions) file to know the specific NodeJS version this repo requires.

1. Install [asdf](https://asdf-vm.com/)
2. Add the NodeJS plugin to asdf with `asdf plugin add nodejs`
3. Fork this repo, clone it somewhere in your computer, and run `asdf install` and `npm install` where you cloned it.

   Example:

   ```shell_session
   ~ git clone git@github.com:<YOUR GITHUB USERNAME>/nodejs-testing-basics.git
   Cloning into 'nodejs-testing-basics'...
   remote: Enumerating objects: 5, done.
   remote: Counting objects: 100% (5/5), done.
   remote: Compressing objects: 100% (5/5), done.
   remote: Total 5 (delta 0), reused 0 (delta 0), pack-reused 0
   Receiving objects: 100% (5/5), 5.33 KiB | 2.67 MiB/s, done.
   ~ cd nodejs-testing-basics
   ~/nodejs-testing-basics asdf install
     % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                    Dload  Upload   Total   Spent    Left  Speed
   100  3490    0  3490    0     0   8574      0 --:--:-- --:--:-- --:--:--  8553
     % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                    Dload  Upload   Total   Spent    Left  Speed
   100 29.1M  100 29.1M    0     0  8835k      0  0:00:03  0:00:03 --:--:-- 8835k
   node-v15.14.0-darwin-x64.tar.gz: OK
   ~/nodejs-string-calculator $ npm install
   npm WARN deprecated request-promise-native@1.0.9: request-promise-native has been deprecated because it extends the now deprecated request package, see https://github.com/request/request/issues/3142
   npm WARN deprecated urix@0.1.0: Please see https://github.com/lydell/urix#deprecated
   npm WARN deprecated har-validator@5.1.5: this library is no longer supported
   npm WARN deprecated resolve-url@0.2.1: https://github.com/lydell/resolve-url#deprecated
   npm WARN deprecated request@2.88.2: request has been deprecated, see https://github.com/request/request/issues/3142
   
   added 537 packages, and audited 538 packages in 3s
   
   24 packages are looking for funding
     run `npm fund` for details
   
   found 0 vulnerabilities
   ```

4. Test your environment by running the tests with `npm run test`

   Example:

   ```shell_session
   
   > nodejs-string-calculator@1.0.0 test
   > node --experimental-vm-modules node_modules/.bin/jest
   
   (node:57454) ExperimentalWarning: VM Modules is an experimental feature. This feature could change at any time
   (Use `node --trace-warnings ...` to show where the warning was created)
    FAIL  test/foo_test.js
     ✕ adds 1 + 2 to equal 3 (5 ms)
   
     ● adds 1 + 2 to equal 3
   
       expect(received).toBe(expected) // Object.is equality
   
       Expected: 5
       Received: 3
   
         2 |
         3 | test('adds 1 + 2 to equal 3', () => {
       > 4 |     expect(sum(1, 2)).toBe(5);
           |                       ^
         5 | });
   
         at Object.<anonymous> (test/foo_test.js:4:23)
   
   Test Suites: 1 failed, 1 total
   Tests:       1 failed, 1 total
   Snapshots:   0 total
   Time:        0.689 s, estimated 1 s
   Ran all test suites.   
   ```
