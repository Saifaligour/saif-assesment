function serviceResponse(body) {
    this.status = body.status;
    this.res = body.result ? body.result : null;
    this.err = body.error ? body.error.message : null;
    this.version = '1.0'
};

module.exports = serviceResponse;
