# Unhandled Promise Rejection in Express.js Async Route Handler

This repository demonstrates a common error in Node.js Express.js applications: unhandled promise rejections due to incomplete error handling in asynchronous route handlers.

## Bug Description
The `bug.js` file contains an Express.js route handler that performs an asynchronous operation.  If the asynchronous operation throws an error, the `catch` block logs the error but doesn't send an appropriate HTTP response to the client. This leads to an unhandled promise rejection, which can cause the server to crash or behave unexpectedly.

## Bug Solution
The `bugSolution.js` file demonstrates the corrected version.  The `catch` block now includes `res.status(500).send('Internal Server Error')` to send a proper error response to the client, preventing unhandled promise rejections.

## How to reproduce the bug
1. Clone this repository.
2. Navigate to the `bug` directory.
3. Run `node bug.js`.
4. Make several requests to `http://localhost:3000`. You will notice some requests might fail silently, while others will succeed.  Examine the server console for error messages.

## How to see the solution
1. Navigate to the `bugSolution` directory.
2. Run `node bugSolution.js`.
3. Make requests to `http://localhost:3000`.  Observe that error responses are now properly handled, and the server console only displays successful requests and any deliberate simulated errors.