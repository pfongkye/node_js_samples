function greet(fn){
    fn();
}

greet(()=>{console.log('Hello world')})

const greeter = require('./greet');
greeter.greet();
greeter.greeting = 'Module is cached!';

const greeter2 = require('./greet');
greeter.greet();

const Emitter = require('./event');

const eventEmitter = new Emitter();

eventEmitter.on('greet', ()=>{console.log('Greet happened somewhere.')});

console.log('Hello before emitting greets.');

eventEmitter.on('greet', ()=>{console.log('Listening to greets.')});

console.log('calling the emitter...');
eventEmitter.emit('greet');
eventEmitter.emit('nothing');