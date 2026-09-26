import { Router } from "express";
import { createCheckoutSession } from "../controllers/paymentController.js";
import { requireAuth } from "../middleware/auth.js";

const router = Router();

router.post("/checkout", requireAuth, createCheckoutSession);

export default router;
