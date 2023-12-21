require('dotenv').config();
const http = require('http');
const app = require('./app');
const { connectDB } = require('./db');

const server = http.createServer(app);

const port = process.env.PORT || 5000;
const main = async () => {
  try {
    await connectDB();
    server.listen(port, async () => {
      console.log(`⚙️ Server is listening at port: ${port}`);
    });
  } catch (error) {
    console.log('ERROR!!: ', error.message);
    throw Error('Database  Error!!');
  }
};

main();
