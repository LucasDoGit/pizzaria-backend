import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';
import cors from 'cors';
import path from 'path';
import fileUpload from 'express-fileupload';

import { setupSwagger } from './swagger/setupSwagger';
import { router } from './routes';

const app = express();

app.use(express.json());
app.use(cors())

app.use(fileUpload({
    limits: { fileSize: 50 * 1024 * 1024 } // no maximo 50mb
}))

setupSwagger(app);

app.use(router);

app.use(
    '/files',
    express.static(path.resolve(__dirname, '..', 'tmp'))
);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if(err instanceof Error){
        return res.status(400).json({
            error: err.message
        })
    }

    return res.status(500).json({
        status: 'error',
        message: 'Internal server error.'
    })
})

app.listen(process.env.PORT, () => console.log("Server rodando"))