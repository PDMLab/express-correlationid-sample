# Node.js express correlation id sample

This sample shows the usage of `express-correlation-id` package with `express` controllers having dependencies being called sync or async including error handling.

## Running the sample

`npm start`:

```
server listening on port 3000
```

`http get localhost:3000/api1/hello`:

```
API 1 controller correlation id: 03b37b23-6451-4c57-8722-cef475d0c914
API 1 handler correlation id: 03b37b23-6451-4c57-8722-cef475d0c914
API 1 sync dependency correlation id: 03b37b23-6451-4c57-8722-cef475d0c914
API 1 async dependency correlation id: 03b37b23-6451-4c57-8722-cef475d0c914
```

`http get localhost:3000/api1/hellofail`:

```
API 1 controller fail correlation id: a13b0f70-5bdb-4ede-90b3-cc1de33efdd9
API 1 fail handler correlation id: a13b0f70-5bdb-4ede-90b3-cc1de33efdd9
API 1 sync dependency correlation id: a13b0f70-5bdb-4ede-90b3-cc1de33efdd9
API 1 async dependency correlation id: a13b0f70-5bdb-4ede-90b3-cc1de33efdd9
API 1 fail handler catch correlation id: a13b0f70-5bdb-4ede-90b3-cc1de33efdd9
```

