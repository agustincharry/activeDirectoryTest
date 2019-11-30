const activeDirectoryService = require('../services/active-directory.service');

module.exports = () => (req, res, next) => {
	const valid = activeDirectoryService.decodedValidToken(req.headers.authorization);
	if(!valid){
		return res.status(401).json({code: 401, message: 'Unauthorized'});
	}
  return next();
};