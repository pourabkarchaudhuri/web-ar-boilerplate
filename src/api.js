var express = require("express"),
    router = express.Router();


router.get('/health', (req, res) => {
    console.log("Health Hit!");
    res.status(200).json(ResponseBuilder({status: true}, false, null, 200))
})

function ResponseBuilder(payload, isError, message, statusCode){
    return {
        result: payload,
        error: isError,
        message: message,
        statusCode: statusCode
    }
}

module.exports = router;