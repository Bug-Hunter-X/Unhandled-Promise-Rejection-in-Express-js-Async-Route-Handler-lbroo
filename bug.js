const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Asynchronous operation that might throw an error
  someAsyncOperation().then(() => {
    res.send('Hello World!');
  }).catch(err => {
    // Error handling within the asynchronous operation
    console.error('Error:', err);
    // Here, res.status(500).send('Internal Server Error') is missing
  });
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

async function someAsyncOperation() {
  // Simulate an asynchronous operation that might throw an error
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      const random = Math.random();
      if (random < 0.5) {
        reject(new Error('Simulated asynchronous error'));
      } else {
        resolve();
      }
    }, 1000);
  });
}