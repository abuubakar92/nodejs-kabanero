const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello from Appsody! with Tekton on Openshift");
});
 
module.exports.app = app;
