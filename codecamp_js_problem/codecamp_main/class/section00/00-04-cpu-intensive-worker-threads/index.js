const { Worker } = require("worker_threads");

const start = () => {
  let total = 0;
  for (let i = 0; i < 9; i++) {
    const worker = new Worker("./worker.js");
    worker.postMessage(1000000000);
    worker.on("message", (result) => {
      total += result;
      console.log(`${i}번째 일꾼: 현재까지 총합: ${total}`);
    });
  }
};

start();
