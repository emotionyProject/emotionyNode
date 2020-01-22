import {emotionJson} from '../emotionJson/emotionJson';

const findEmotion = async (req,res,next) => {
    res.send(emotionJson);
}

export default findEmotion;