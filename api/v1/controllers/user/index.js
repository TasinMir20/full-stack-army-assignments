exports.getUserData = async (req, res, next) => {
	try {
		res.json({ message: "Get User Data" });
	} catch (err) {
		next(err);
	}
};

exports.updateUserData = async (req, res, next) => {
	try {
		res.json({ message: "Update User Data" });
	} catch (err) {
		next(err);
	}
};
