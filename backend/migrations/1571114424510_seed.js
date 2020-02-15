/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
 pgm.sql ("INSERT INTO lists (name) VALUES ('john');");
	pgm.sql(" INSERT INTO posts (listid, body) VALUES ('1', 'some post about some important subject'); ");
	pgm.sql(" INSERT INTO posts (listid, body) VALUES ('1', 'a post about important topic'); ");
	pgm.sql(" INSERT INTO posts (listid, body) VALUES ('1', 'buy groceries reminder');  ");
	pgm.sql(" INSERT INTO posts (listid, body) VALUES ('1', 'clean your room');  ");
	pgm.sql(" INSERT INTO posts (listid, body) VALUES ('1', 'some random rant post');   ");
	pgm.sql(" INSERT INTO posts (listid, body) VALUES ('1', 'a VERY important task');   ");
	pgm.sql(" INSERT INTO posts (listid, body) VALUES ('1', 'a slightly less important task');   ");
	pgm.sql(" INSERT INTO posts (listid, body) VALUES ('1', 'good day, sir');   ");
 pgm.sql ("INSERT INTO lists (name) VALUES ('jessy');");
 pgm.sql ("INSERT INTO lists (name) VALUES ('Xha12ase');");
 pgm.sql ("INSERT INTO lists (name) VALUES ('KwqErp');");
 pgm.sql ("INSERT INTO lists (name) VALUES ('cxDmqwe');");
 pgm.sql ("INSERT INTO lists (name) VALUES ('PqweoSAd');");
 pgm.sql ("INSERT INTO lists (name) VALUES ('EmqwEw');");
 pgm.sql ("INSERT INTO lists (name) VALUES ('EmSAdw');");
 pgm.sql ("INSERT INTO lists (name) VALUES ('EKlkwq');");
 pgm.sql ("INSERT INTO lists (name) VALUES ('EPowqE');");
 pgm.sql ("INSERT INTO posts (listid, body) VALUES ('2', 'some post about some important subject'); ");
 pgm.sql ("INSERT INTO posts (listid, body) VALUES ('2', 'some post about some important subject'); ");
 pgm.sql ("INSERT INTO posts (listid, body) VALUES ('2', 'some post about some important subject'); "); 
  pgm.sql ("INSERT INTO posts (listid, body) VALUES ('3', 'some post about some important subject'); ");
 pgm.sql ("INSERT INTO posts (listid, body) VALUES ('4', 'some post about some important subject'); ");
 pgm.sql ("INSERT INTO posts (listid, body) VALUES ('5', 'some post about some important subject'); ");
 pgm.sql ("INSERT INTO posts (listid, body) VALUES ('6', 'some post about some important subject'); ");
 pgm.sql ("INSERT INTO posts (listid, body) VALUES ('7', 'some post about some important subject'); ");
 pgm.sql ("INSERT INTO posts (listid, body) VALUES ('8', 'some post about some important subject'); ");
 pgm.sql ("INSERT INTO posts (listid, body) VALUES ('9', 'some post about some important subject'); ");
};

exports.down = (pgm) => {
};
