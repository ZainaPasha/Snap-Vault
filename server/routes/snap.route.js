import express from "express";
import {
  createSnap,
  deleteSnap,
  getSnap,
  updateSnap,
} from "../controller/snap.controller.js";

const router = express.Router();

router.get("/", getSnap);
router.post("/", createSnap);
router.put("/:id", updateSnap);
router.delete("/:id", deleteSnap);

export default router;
