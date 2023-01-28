import express from 'express';
import * as dotenv from 'dotenv';
import path from 'path';
import router from './routes';
import mongoose from 'mongoose';
import helmet from 'helmet';

const app = express();

dotenv.config();

if (!process.env.PORT) {
    console.log(`Error to get ports`); process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

app.use(helmet());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'public')));

app.use('/api/praan', router);


const dbUrl = 'mongodb://localhost:27017/praan';

mongoose.connect(dbUrl).then(() => {
    console.log('Connected TO DB');
}).catch((err) => {
    console.log(err);
});
 

app.listen(PORT, () =>
    console.log(`Server started on port ${PORT}`)
);