const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const cors = require("cors");
const logger = require("morgan");
require("dotenv").config();
const { PORT } = process.env;
const rootRouter = require("./routes");

const middleware = [logger("dev"), cors(), express.static("public"), express.urlencoded({ extended: true }), express.json(), cookieParser()];
app.use(middleware);
console.clear();

app.use(rootRouter);

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
