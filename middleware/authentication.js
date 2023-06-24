exports.userAuthentication = async (req, res, next) => {
	try {
		next();
	} catch (err) {
		next(err);
	}
};

exports.adminAuthentication = async (req, res, next) => {
	try {
		next();
	} catch (err) {
		next(err);
	}
};
