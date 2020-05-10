const Router = require('koa-router')
const database = require('database')
const HttpStatus = require('http-status');
const koaBody = require('koa-body');
const router = Router()

// --------------------------- posts

//  get posts
router.get('/posts/:listid', async ctx => {
        listid = ctx.params.listid;
        var queryConfig = `SELECT * FROM ${listid} ORDER BY id;`
	result = await database.query(queryConfig).then(c => c.rows);
        ctx.status = 200;
        ctx.body = result;
});

// create post
router.post('/posts/:listid', koaBody(), async ctx => {
        post = JSON.parse(JSON.stringify(ctx.request.body.post));
	listid = ctx.params.listid;
        var queryConfig = `INSERT INTO ${listid} ( body ) VALUES ( '${post}' ) RETURNING id;`
	result1 = await database.query(queryConfig).then(c => c.rows[0].id);
	var queryConfig2 = `SELECT * FROM ${listid} WHERE ${listid}.id = ${result1};`
	result = await database.query(queryConfig2).then(c => c.rows);
	ctx.status = 200;
	ctx.body = result1;
});

// update post
router.put('/posts/:listid', koaBody(), async ctx => {
        listid = ctx.params.listid;
        postid = JSON.stringify(ctx.request.body.id);
        post = JSON.parse(JSON.stringify(ctx.request.body.post));
        var queryConfig = `UPDATE ${listid} SET body = '${post}' WHERE ${listid}.id = '${postid}';` 
        var returnListPosts = `SELECT * FROM ${listid} ORDER BY id;`
        result1 = await database.query(queryConfig);
        result = await database.query(returnListPosts).then(c => c.rows);
        ctx.status = 200;
        ctx.body = result;
});

// delete post
router.del('/posts/:listid', koaBody({ strict: false }), async ctx => {
      listid = ctx.params.listid;
      postid = JSON.stringify(ctx.request.body.id);
        var queryConfig1 = `DELETE FROM ${listid} WHERE ${listid}.id = '${postid}';`
	result1 = await database.query(queryConfig1);
        var queryConfig = `SELECT * FROM ${listid} ORDER BY id;`
	result = await database.query(queryConfig).then(c => c.rows);
	ctx.status = 200;
        ctx.body = result;
});

//create new list 
router.post('/lists/:listid', koaBody({ strict: false }), async ctx => {
	listid = ctx.params.listid;
	
        var queryConfig = `CREATE TABLE ${listid} (id SERIAL NOT NULL PRIMARY KEY, body TEXT NOT NULL, createdat TIMESTAMPTZ NOT NULL DEFAULT NOW());`
//	result = await database.query(queryConfig).then(c => c.rows);
        result = await database.query(queryConfig)
	ctx.status = 200;
        ctx.body = result;
});



module.exports = router
