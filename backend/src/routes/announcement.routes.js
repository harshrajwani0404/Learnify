import { Router } from "express";
import { createAnnouncement, getAnnouncement,updateAnnouncement } from "../controller/announcement.controller.js";

const router = Router();

router.route('/:subject').get(getAnnouncement);
router.route('/:id/reply/').post(updateAnnouncement);
router.route('/').post(createAnnouncement);
//router.route('/delete').post(deleteAnnouncement);


export default router;