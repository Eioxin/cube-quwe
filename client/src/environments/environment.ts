// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  api: 'http://localhost:9000/cube-quwe/us-central1',
  firebase: {
    apiKey: 'AIzaSyDZ0_cPKIN1LWlKHbFRSjEqH7MNYSOxVz8',
    authDomain: 'cube-quwe.firebaseapp.com',
    databaseURL: 'https://cube-quwe.firebaseio.com',
    projectId: 'cube-quwe',
    storageBucket: 'cube-quwe.appspot.com',
    messagingSenderId: '1052131879923'
  }
};
