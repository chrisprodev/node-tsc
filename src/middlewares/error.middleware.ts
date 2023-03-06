import { Request, Response, NextFunction } from 'express';
import HttpException from '@/utils/exeptions/http.exeption';

const errorMiddleware = (
    error: HttpException,
    req: Request,
    res: Response,
    next: NextFunction
): void => {
    const status = error.status || 500;
    const message = error.message || 'Somthing went wrong!';

    res.status(status).send({
        status,
        message,
    });
};

export default errorMiddleware;
