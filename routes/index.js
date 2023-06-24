const router = require("express").Router();

router.all("/", (req, res, next) => {
	try {
		return res.send("Server running");
	} catch (err) {
		next(err);
	}
});

const apiRoutesV1 = require("../api/v1/routes");

// rest api routes
router.use("/api/v1", apiRoutesV1);

// catch 404 and forward to error handler
router.use((req, res, next) => {
	return res.status(404).json({
		issue: {
			message: "404 | Resource not found!",
		},
	});
});

// error handler
router.use((err, req, res, next) => {
	console.error(err);

	if (err.name === "ValidationError") {
		res.status(400).json({ issue: err.errors });
		return;
	}

	const statusCode = err.status || 500;
	const issue = {};

	issue.message = `${err.message}`;
	issue.stack = process.env.NODE_ENV !== "production" ? err.stack : "";

	return res.status(statusCode).json({ issue });
});

module.exports = router;
