import { Router } from "express";
import userRoutes from './user.routes.js';
import bookRouters from "./book.routes.js"
import loanRouters from "./loan.routes.js"

const routers = Router();

routers.use("/users",userRoutes);
routers.use("/books",bookRouters);
routers.use("/loans",loanRouters);

export {routers};