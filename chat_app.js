const EventEmitter = require("events");

const emitter = new EventEmitter();

emitter.on("message", (name, message) => console.log(`${name}:${message}`));
function sendMessage(name, message, emitter) {
  emitter.emit("message", name, message);
}

sendMessage("Alice", "bye", emitter);
sendMessage("Georg", "hello", emitter);
