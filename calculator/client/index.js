const grpc = require('@grpc/grpc-js');
const { calculationRequest, singleNumberRequest } = require('../proto/calculator_pb');
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

async function getPrimes(client, num) {
    console.log(`Get Primes has been invoked from the client side, num: ${num}`)
    try {
        const req = new singleNumberRequest().setFirstNum(num)

        const call = client.fetchPrime(req)
        call.on("data", (res) => {
            console.log(`GreetManyTime: ${res.getResult()}`)
            sum += res.getResult()
        })
    } catch (err) {
        console.log(err)
    }

}

async function sendArray(client) {
    console.log("arraySum was invoked by the client side!");

    const call = client.arraySum((err, res) => {
        if (err) {
            console.log(err)
        }
        console.log(`LongGret: ${res.getResult()}`)
    })

    for (let i = 1; i <= 10; i++) {
        const req = new singleNumberRequest().setFirstNum(i)
        call.write(req)
    }

    call.end()
}

async function main() {
    const creds = grpc.ChannelCredentials.createInsecure();

    const client = new calculatorServiceClient(
        '0.0.0.0:50051',
        creds,
    );

    // await getSum(client, 1)

    // getPrimes(client, 120)

    sendArray(client)

    client.close();
}

main();