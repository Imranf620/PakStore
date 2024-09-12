import ErrorHandler from "../utils/errorHandler.js";
export default (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.message = err.message || 'Something went wrong';
    if (err.name === 'CastError') {
        const message = `Resources not found: ${err.path}`;
        err = new ErrorHandler(message, 404);
    }
    err.status(err.statusCode).json({
        success: false,
        message: err.message
    });
};
