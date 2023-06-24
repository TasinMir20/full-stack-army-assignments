exports.login = async (req, res, next) => {
	try {
		res.json({ message: "Login route" });
	} catch (err) {
		next(err);
	}
};

exports.register = async (req, res, next) => {
	try {
		res.json({ message: "Register route" });
	} catch (err) {
		next(err);
	}
};

exports.logOut = async (req, res, next) => {
	try {
		res.json({ message: "Logout" });
	} catch (err) {
		next(err);
	}
};
