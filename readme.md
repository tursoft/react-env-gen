# env-gen-config

This cli command is used to automatically generate .env file to env-config.json that contains input parameters for any Single Page Application framework like react, angular etc.

# Use Case
This command can be used in dockerization of modern js based SPA projects like react or angular.

# How to use
```js
npx react-env-gen
```

# Sample output
```js
// generated by react-eng-gen 
window._env_ = {
"VAR_1":"VAL-1",
"VAR_2":"VAL-2",
"VAR_3":"VAL-3"
}
```

# Team
Muhammet Turşak <tursoft@gmail.com>