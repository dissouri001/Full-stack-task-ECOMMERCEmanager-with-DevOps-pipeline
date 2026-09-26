import { Router } from "express";
import { createOrder, getMyOrders } from "../controllers/orderController.js";
import { requireAuth } from "../middleware/auth.js";

const router = Router();

router.post("/", requireAuth, createOrder);
router.get("/me", requireAuth, getMyOrders);

export default router;
