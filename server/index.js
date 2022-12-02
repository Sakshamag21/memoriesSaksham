
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';

const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use('/posts', postRoutes);

// const CONNECTION_URL = 'mongodb+srv://Sakshamag21:saksham9927@cluster0.ycn9fsj.mongodb.net/?retryWrites=true&w=majority';
const CONNECTION_URL ="mongodb+srv://Sakshamag21:saksham9927@cluster0.pw6yg63.mongodb.net/mernstack?retryWrites=true&w=majority"
// const CONNECTION_URL=process.env.DATABASE;
const PORT = process.env.PORT|| 5000;
console.log("sdgkjh;")

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));
console.log(";;;;;")
mongoose.set('useFindAndModify', false);