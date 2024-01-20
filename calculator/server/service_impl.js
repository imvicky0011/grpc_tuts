const pb = require('../proto/calculator_pb');

exports.sumAPI = async(call, callback) => {
    console.log('Sum was invoked');

    async function doSomething() {
        for (let i = 0; i < 10000000; i++) {

        }
    }

    await doSomething()
    console.log("Did Something");

    const res = new pb.calculationResponse()
        .setResult(
            call.request.getFirstNum() + call.request.getSecondNum(),
        );
    console.log(res.getResult());
    callback(null, res);
};