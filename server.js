const mongoose = require("mongoose");
const app = require("./app");

mongoose.Promise = global.Promise;

const { MONGODB_CONNECTION_STRING } = process.env;

const PORT = process.env.PORT || 3001;

mongoose
  .connect(MONGODB_CONNECTION_STRING)
  .then(() => {
    console.log("Database connection successful");

    app.listen(PORT, () =>
      console.log(`Server running. Use our API on port: ${PORT}`)
    );
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
