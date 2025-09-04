import { ca, tr } from "zod/locales";
import userService  from "../service/user.services.js";
import { loginService } from "../service/auth.sevice.js";

async function createUserController(req, res) {
  const newUser = req.body;
  try {
    const token = await userService.createUserService(newUser);
    res.status(201).send({ token })
  } catch (error) {
    return res.status(400).send(error.message);
  }
}

async function loginUserController(req, res) {
  const {email, password} = req.body;

  try {
    const token = await loginService(email, password);
    res.send({ token })
  } catch (error) {
    return res.status(400).send(error.message);
  }
}

async function findAllUsersController(req, res) {
  try {
    const users = await userService.findAllUsersService();
    res.send({ users });
  } catch (error) {
    return res.status(400).send(error.message);
  }
}

async function findUserByIdController(req, res) {
  const { id } = req.params;
  try {
    const user = await userService.findUserByIdService(id);
    res.send({ user });
  } catch (error) {
    return res.status(400).send(error.message);
  }
}

async function updateUserController(req, res) {
  const { id } = req.params;
  const newUser = req.body;
  try {
    const userUpdated = await userService.updateUserService(newUser, id);
    res.send({ userUpdated });
  } catch (error) {
    return res.status(400).send(error.message);
  }

}

async function deleteUserController(req, res) {
  const { id} = req.params;

  try {
    const message = await userService.deleteUserService(id);
    res.send({ message });
  } catch (e) {
    res.status(400).send(e.message);
  }
}

export default {
  createUserController,
  findAllUsersController,
  findUserByIdController,
  updateUserController,
  deleteUserController,
  loginUserController
}