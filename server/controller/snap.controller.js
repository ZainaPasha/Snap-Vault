import mongoose from "mongoose";
import Snap from "../models/snap.model.js";

export const getSnap = async (req, res) => {
  try {
    const snaps = await Snap.find({});
    res.status(200).json({ success: true, data: snaps });
  } catch (error) {
    console.log("Error in fetching the snaps", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

export const createSnap = async (req, res) => {
  const snap = req.body;

  if (!snap.title || !snap.description || !snap.image) {
    return res
      .status(400)
      .json({ success: false, message: "Please provide all the field" });
  }

  const newSnap = new Snap(snap);

  try {
    await newSnap.save();
    res.status(201).json({ success: true, data: newSnap });
  } catch (error) {
    console.error("Error in Create Snap", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

export const updateSnap = async (req, res) => {
  const { id } = req.params;
  const snap = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(404).json({ success: false, message: "Snap id doesn't exist" });
  }

  try {
    const updatedSnap = await Snap.findByIdAndUpdate(id, snap, { new: true });
    res.status(200).json({ success: true, data: updatedSnap });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

export const deleteSnap = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(404).json({ success: false, message: "Snap id doesn't exist" });
  }

  try {
    await Snap.findByIdAndDelete(id);
    res.status(200).json({ success: true, message: "Snap Deleted" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server Error" });
  }
};
