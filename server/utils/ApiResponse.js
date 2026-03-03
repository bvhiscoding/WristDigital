class ApiResponse {
  constructor(statusCode, data = null, message = "Success") {
    this.success = statusCode < 400;
    this.statusCode = statusCode;
    this.data = data;
    this.message = message;
  }
  send(res) {
    return res.status(this.statusCode).json({
      success: this.success,
      message: this.message,
      data: this.data
    });
  } 
}
module.exports = ApiResponse;
