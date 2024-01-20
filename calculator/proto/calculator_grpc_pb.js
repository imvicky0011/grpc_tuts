// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var calculator_pb = require('./calculator_pb.js');

function serialize_calculator_calculationRequest(arg) {
  if (!(arg instanceof calculator_pb.calculationRequest)) {
    throw new Error('Expected argument of type calculator.calculationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_calculator_calculationRequest(buffer_arg) {
  return calculator_pb.calculationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_calculator_calculationResponse(arg) {
  if (!(arg instanceof calculator_pb.calculationResponse)) {
    throw new Error('Expected argument of type calculator.calculationResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_calculator_calculationResponse(buffer_arg) {
  return calculator_pb.calculationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_calculator_singleNumberRequest(arg) {
  if (!(arg instanceof calculator_pb.singleNumberRequest)) {
    throw new Error('Expected argument of type calculator.singleNumberRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_calculator_singleNumberRequest(buffer_arg) {
  return calculator_pb.singleNumberRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var calculatorServiceService = exports.calculatorServiceService = {
  sumAPI: {
    path: '/calculator.calculatorService/sumAPI',
    requestStream: false,
    responseStream: false,
    requestType: calculator_pb.calculationRequest,
    responseType: calculator_pb.calculationResponse,
    requestSerialize: serialize_calculator_calculationRequest,
    requestDeserialize: deserialize_calculator_calculationRequest,
    responseSerialize: serialize_calculator_calculationResponse,
    responseDeserialize: deserialize_calculator_calculationResponse,
  },
  fetchPrime: {
    path: '/calculator.calculatorService/fetchPrime',
    requestStream: false,
    responseStream: true,
    requestType: calculator_pb.singleNumberRequest,
    responseType: calculator_pb.calculationResponse,
    requestSerialize: serialize_calculator_singleNumberRequest,
    requestDeserialize: deserialize_calculator_singleNumberRequest,
    responseSerialize: serialize_calculator_calculationResponse,
    responseDeserialize: deserialize_calculator_calculationResponse,
  },
  arraySum: {
    path: '/calculator.calculatorService/arraySum',
    requestStream: true,
    responseStream: false,
    requestType: calculator_pb.singleNumberRequest,
    responseType: calculator_pb.calculationResponse,
    requestSerialize: serialize_calculator_singleNumberRequest,
    requestDeserialize: deserialize_calculator_singleNumberRequest,
    responseSerialize: serialize_calculator_calculationResponse,
    responseDeserialize: deserialize_calculator_calculationResponse,
  },
};

exports.calculatorServiceClient = grpc.makeGenericClientConstructor(calculatorServiceService);
