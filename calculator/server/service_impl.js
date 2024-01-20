const pb = require('../proto/calculator_pb');

exports.sumAPI = async(call, callback) => {
    console.log('Sum was invoked');

    const res = new pb.calculationResponse()
        .setResult(
            call.request.getFirstNum() + call.request.getSecondNum(),
        );
    console.log(res.getResult());
    callback(null, res);
};


exports.fetchPrime = async(call, _) => {
    console.log("Prime fetch api was invoked!")

    let num = call.request.getFirstNum()

    const res = new pb.calculationResponse()
    let st = 2;

    while (num > 1 && st <= num) {
        console.log(num)
        if (num % st == 0) {
            res.setResult(st);
            call.write(res)
            num = num / st;
        } else st++;
    }
    call.end()
};