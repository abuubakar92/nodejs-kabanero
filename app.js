const app = require('express')()

app.get('/', (req, res) => {
  res.send("Demo App from Appsody! github with Tekton on Openshift");
});
 
module.exports.app = app;
