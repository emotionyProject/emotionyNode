import Router from 'express';
import findEmotion from '../controllers/findEmotion';

const router = Router();

router.get('/Emotionies', findEmotion);

export default router;