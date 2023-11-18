const createError = (err,message) =>{
    const error = new Error()
    error.status = err,
    error.message = message

    return error;
}

module.exports = createError;