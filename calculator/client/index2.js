const grpc = require('@grpc/grpc-js');
const { calculationRequest } = require('../proto/calculator_pb');
const { calculatorServiceClient } = require('../proto/calculator_grpc_pb');

async function getSum(client, x) {

    console.log('Calculation Request was invoked!');

    const req = new calculationRequest()
        .setFirstNum(x + 1).setSecondNum(x + 2);

    client.sumAPI(req, (err, res) => {
        if (err) {
            return console.log(err);
        }

        console.log(`Greet: ${res.getResult()}`);
    });
}

async function main() {
    const creds = grpc.ChannelCredentials.createInsecure();

    const client = new calculatorServiceClient(
        '0.0.0.0:50051',
        creds,
    );

    await getSum(client, 4);
    await getSum(client, 5);
    await getSum(client, 6);

    client.close();
}

main();