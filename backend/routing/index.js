const Router = require('koa-router')
const database = require('database')

const router = Router()
router.get('/', async ctx => { ctx.status = 200 })

router.get('/test', async ctx => {
  ctx.body = await database.query('SELECT 1+1 AS result')
    .then(c => c.rows[0].result)
});

router.get('/query', async ctx => {
  ctx.body = await database.query('SELECT * FROM users')
    .then(c => c.rows[0].name)
});

router.get('/posts', async ctx => {
  ctx.body = await database.query('SELECT * FROM posts')
    .then(c => c.rows[0].body)
});

router.get('/manyposts', async ctx => {
   result = await database.query('SELECT * FROM posts').then(c => c.rows); //.then(c => c.rows[0]);
   ctx.body = result
});


//  console.log('name: %s and id: %d', resultobject.rows[0].name, resultobject.rows[0].id);
module.exports = router
