import { Router } from "express";
import { createUser } from "../Controller/userController.js";
import { updateUser } from "../Controller/userController.js";
import { fetchAllUsers } from "../Controller/userController.js";
import { showUser } from "../Controller/userController.js";
import { deleteUser } from "../Controller/userController.js";

const router = Router()

router.post('/',createUser)
router.put('/:id',updateUser)
router.get('/allusers',fetchAllUsers)
router.get('/getuser/:id',showUser)
router.delete('/deluser/:id',deleteUser)



export default router;