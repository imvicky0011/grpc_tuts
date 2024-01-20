const grpc = require('@grpc/grpc-js');
const { GreetRequest } = require('../proto/greet_pb');
const { GreetServiceClient } = require('../proto/greet_grpc_pb');

function doGreet(client) {
    console.log('doGreet was invoked');
    const req = new GreetRequest()
        .setFirstName('Vicky');

    client.greet(req, (err, res) => {
        if (err) {
            return console.log(err);
        }

        console.log(`Greet: ${res.getResult()}`);
    });
}

function doGreetServerStream(client) {
    console.log("Server stream Greet caling from the client!")
    try {

        const req = new GreetRequest().setFirstName('Vicky')

        const call = client.greetManyTimes(req)
        call.on("data", (res) => {
            console.log(`GreetManyTime: ${res.getResult()}`)
        })
    } catch (err) {
        console.log(err)
    }
}


function doGreetServerStream(client) {
    console.log("Server stream Greet caling from the client!")
    try {

        const req = new GreetRequest().setFirstName('Vicky')

        const call = client.greetManyTimes(req)
        call.on("data", (res) => {
            console.log(`GreetManyTime: ${res.getResult()}`)
        })
    } catch (err) {
        console.log(err)
    }
}


function main() {
    const creds = grpc.ChannelCredentials.createInsecure();

    const client = new GreetServiceClient(
        '0.0.0.0:50051',
        creds,
    );

    // doGreet(client);
    doGreetServerStream(client)
    client.close();
}

main();