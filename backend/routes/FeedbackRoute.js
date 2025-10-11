import express from 'express';
import { AddFeedback } from '../controller/FeedbackController.js';

const FeedbackRoute = express.Router();

FeedbackRoute.post("/addFeedback", AddFeedback);

export default FeedbackRoute;