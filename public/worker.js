let counter = 0;

// do stuff here
// right now it increases count every 1 ms
setInterval(() => {
  self.postMessage(counter++);
}, 1);