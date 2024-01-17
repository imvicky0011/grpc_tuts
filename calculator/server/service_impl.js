const pb = require('../proto/calculator_pb');

exports.sumAPI = (call, callback) => {
    console.log('Sum was invoked');
    const res = new pb.calculationResponse()
        .setResult(
            call.request.getFirstNum() + call.request.getSecondNum(),
        );

    callback(null, res);
};