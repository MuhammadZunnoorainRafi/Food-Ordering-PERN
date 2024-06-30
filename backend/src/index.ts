import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import userRouter from '../routes/userRoute';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get('/', async (req, res) => {
  res.json({ message: 'Hello zunnoorain' });
});

app.use('/api/user', userRouter);

app.listen(4000, () => console.log(`Server is running on PORT: ${4000}`));
