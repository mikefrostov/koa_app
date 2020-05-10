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
            text: 'SELECT * FROM $1 ORDER BY id',
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
            text: 'INSERT INTO $1 ( body) VALUES ( $2) RETURNING id',
            values: [listid, post]
        };
        result1 = await database.query(queryConfig).then(c => c.rows[0].id);
	var queryConfig2 = {
	    text: 'SELECT * FROM $1 WHERE $1.id = $2;',   // a question for myself: why select * ???
	    values: [listid, result1]
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
            text: 'UPDATE $3 SET body = $1 WHERE $3.id = $2;',
            values: [post, postid, listid]
        };

        var returnListPosts = {
                text: 'SELECT * FROM $1 ORDER BY id;',
                values: [listid]
            };

        result1 = await database.query(queryConfig);
        result = await database.query(returnListPosts).then(c => c.rows);
        ctx.status = 200;
        ctx.body = result;
});

// delete post
router.del('/posts/:listid', koaBody({ strict: false }), async ctx => {
      listid = ctx.params.listid;
      postid = JSON.stringify(ctx.request.body.id);
      var queryConfig1 = {
      text: 'DELETE FROM $2 WHERE $2.id = $1;',
      values: [postid, listid]
  };
        result1 = await database.query(queryConfig1);

      var queryConfig = {
      text: 'SELECT * FROM $1 ORDER BY id;',
      values: [listid]
  };
        result = await database.query(queryConfig).then(c => c.rows);
        
	ctx.status = 200;
        ctx.body = result;
});

//create new list 
router.post('/lists/:listid', koaBody({ strict: false }), async ctx => {
	listid = ctx.params.listid;
	
	//var queryConfig = {
        //text: 'CREATE TABLE $1 (id SERIAL NOT NULL PRIMARY KEY, body TEXT NOT NULL, createdat TIMESTAMPTZ NOT NULL DEFAULT NOW());',
        //values: [listid] 
	//};
        var queryConfig = `CREATE TABLE ${listid} (id SERIAL NOT NULL PRIMARY KEY, body TEXT NOT NULL, createdat TIMESTAMPTZ NOT NULL DEFAULT NOW());`
//	result = await database.query(queryConfig).then(c => c.rows);
        result = await database.query(queryConfig)
	ctx.status = 200;
        ctx.body = result;
});



module.exports = router
