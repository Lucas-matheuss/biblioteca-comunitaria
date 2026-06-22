import { Router } from "express";
import loanController from "../controller/loan.controller.js";
import { validate, validateLoanId}  from "../middlewares/validation.middleware.js"
import { loanSchema } from "../schema/loan.schema.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";


const router= Router();

router.get("/", loanController.findAllLoansController)
router.get("/:id", validateLoanId, loanController.findLoanByIdController)

router.use(authMiddleware)
router.post("/",validate(loanSchema), loanController.createLoanController)
router.delete("/:id", validateLoanId, loanController.deleteLoanController)


export default router