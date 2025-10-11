import express from 'express';``
import serverless from 'serverless-http';
import cors from 'cors';
import FeedbackRoute from '../../routes/FeedbackRoute';

const app = express();

app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", FeedbackRoute);

app.get('/api/test', (req, res) => {
    res.json({ message: 'API is working!' });
});

exports.handler = serverless(app);