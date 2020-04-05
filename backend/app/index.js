const Koa = require('koa');
const router = require('routing');
const db = require('database');
const cors = require('@koa/cors');
const app = new Koa();

app.use(cors());
app.use(router.routes())

exports.start = async function () {
  try {
    await db.start();
    console.log('Database connected');
    this.server = await app.listen(3002);
    console.log('Server listening on port 3002');
  } catch (error) {
    console.log(error);
  };
};

exports.close = async function () {
  await this.server.close();
  await db.close();
};
