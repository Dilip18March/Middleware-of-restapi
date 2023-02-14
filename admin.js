import { User } from "../models"
import { CustomErrorHandler } from "../services"

const admin = async(req, res, next) => {
	
	try {

		const user = await User.findOne({ _id: req.user._id })

	
		
		if (user.role === 'admin') {

			next()
			

		}

		else {

			return next(CustomErrorHandler.unAuthorized('user is not admin'))
			
		}
		
	} catch (err) {

		return next(CustomErrorHandler.serverError('Internal server error'));
		
	}

	
		
}
	
export default admin;
	
