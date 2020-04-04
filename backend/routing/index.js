const Router = require('koa-router')
const database = require('database')
const HttpStatus = require('http-status');
const koaBody = require('koa-body');
const router = Router()

// --------------------------- posts

//  get posts
router.get('/posts/:listid', async ctx => {
        listid = ctx.params.listid;
        var queryConfig = {
            text: 'SELECT * FROM posts WHERE posts.listid = $1 ORDER BY id',
            values: [listid]
        };
        result = await database.query(queryConfig).then(c => c.rows);
        ctx.status = 200;
        ctx.body = result;
});

// create post
router.post('/posts/:listid', koaBody(), async ctx => {
        post = JSON.parse(JSON.stringify(ctx.request.body.post));
        listid = ctx.params.listid;
        var queryConfig = {
            text: 'INSERT INTO posts (listid, body) VALUES ($1, $2) RETURNING id',
            values: [listid, post]
        };
        result1 = await database.query(queryConfig).then(c => c.rows[0].id);
	var queryConfig2 = {
	    text: 'SELECT * FROM posts WHERE posts.id = $1;',   // a question for myself: why select * ???
	    values: [result1]
	};
        result = await database.query(queryConfig2).then(c => c.rows);
        ctx.status = 200;
        ctx.body = result;
});

// update post
router.put('/posts/:listid', koaBody(), async ctx => {
        listid = ctx.params.listid;
        postid = JSON.stringify(ctx.request.body.id);
        post = JSON.parse(JSON.stringify(ctx.request.body.post));
	var queryConfig = {
            text: 'UPDATE posts SET body = $1 WHERE posts.id = $2;',
            values: [post, postid]
        };
        result1 = await database.query(queryConfig);
        result = await database.query('SELECT * FROM posts ORDER BY id;').then(c => c.rows);
        ctx.status = 200;
        ctx.body = result;
});

// delete post
router.del('/posts/:listid', koaBody({ strict: false }), async ctx => {
      listid = ctx.params.listid;
      postid = JSON.stringify(ctx.request.body.id);
      var queryConfig = {
      text: 'DELETE FROM posts WHERE posts.id = $1;',
      values: [postid]
  };
        result1 = await database.query(queryConfig);
        result = await database.query('SELECT * FROM posts ORDER BY id;').then(c => c.rows);
        ctx.status = 200;
        ctx.body = result;
});

module.exports = router
