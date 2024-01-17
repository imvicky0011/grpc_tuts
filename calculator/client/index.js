const grpc = require('@grpc/grpc-js');
const { calculationRequest } = require('../proto/calculator_pb');
const { calculatorServiceClient } = require('../proto/calculator_grpc_pb');

function getSum(client) {

    console.log('Calculation Request was invoked!');

    const req = new calculationRequest()
        .setFirstNum(1).setSecondNum(2);

    client.sumAPI(req, (err, res) => {
        if (err) {
            return console.log(err);
        }

        console.log(`Greet: ${res.getResult()}`);
    });
}

function main() {
    const creds = grpc.ChannelCredentials.createInsecure();

    const client = new calculatorServiceClient(
        '0.0.0.0:50051',
        creds,
    );

    getSum(client);
    client.close();
}

main();