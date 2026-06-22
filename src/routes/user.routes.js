import { Router } from "express";
import userController from '../controller/user.controllers.js';
import { validate, validateUserId } from "../middlewares/validation.middleware.js";
import { userSchema } from "../schema/user.schema.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const router = Router();

// Public routes
router.post('/', validate(userSchema), userController.createUserController);

router.post('/login', userController.loginUserController);
router.get('/', userController.findAllUsersController);

// Protected routes
router.use(authMiddleware); // Apply authentication middleware to all routes below

router.get('/:id',validateUserId ,userController.findUserByIdController
);
router.patch('/:id', validateUserId, userController.updateUserController
);   
router.delete('/:id', validateUserId, userController.deleteUserController
);                                                

export default router;