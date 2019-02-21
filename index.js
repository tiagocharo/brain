const brain = require('brain.js');
const net = new brain.recurrent.LSTM();

const data = [
    { input: 'Linguagem de programação que o Tiago mais gosta ', output: 'Javascript' },
    { input: 'Tiago gosta de ', output: 'Javascript' },
    { input: 'Tiago programa em ', output: 'Javascript' },
    { input: 'Tiago programa todo dia em ', output: 'Javascript' },
    { input: 'Tiago não programa em ', output: 'Java' },
    { input: 'Tiago não gosta de ', output: 'Java' },
]

const config = {
    iterations: 1000,
    errorThresh: 0.005,
    log: true,
    logPeriod: 100,
    learningRate: 0.3,
    momentum: 0.1,
    callback: null,
    callbackPeriod: 10,
    timeout: Infinity
}

net.train(data, config);

const output = net.run('Tiago não gosta de programar em');

console.log('output: ', output)