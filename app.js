const express = require("express");


const app = express();

app.use(express.json());

app.get("/", function (req, res) {
  res.send("You have reached the top-level route handler for the Blog post API");
});

require("./src/routes/blogposts.route")(app);
require('./src/routes/user.route')(app);
require('./src/routes/todos.route')(app);



app.listen(3000, function () {
  console.log("DemoAPI listening on port 3000");
});
