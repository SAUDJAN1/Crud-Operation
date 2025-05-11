import express from "express";
import {
  Create,
  ReadAll,
  Update,
  Delete,
} from "../Controllers/user.controllers.js";
const router = express.Router();
router.route("/create").post(Create);
router.route("/").get(ReadAll);
router.route("/:id").put(Update);
router.route("/:id").delete(Delete);
export default router;
