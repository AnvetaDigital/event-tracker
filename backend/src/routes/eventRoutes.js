import express from 'express';
import { createEvent, getEvents } from '../controllers/eventController.js';
import auth from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post("/create", auth, createEvent);
router.get("/list", auth, getEvents);

export default router;