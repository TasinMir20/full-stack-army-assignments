exports.getAdminData = async (req, res, next) => {
	try {
		res.json({ message: "Get Admin Data" });
	} catch (err) {
		next(err);
	}
};

exports.updateAdminData = async (req, res, next) => {
	try {
		res.json({ message: "Update Admin Data" });
	} catch (err) {
		next(err);
	}
};
