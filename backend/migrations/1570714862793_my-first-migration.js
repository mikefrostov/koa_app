/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
pgm.createTable('qwerasdffff', {
    id: {type: 'serial', notNull: true, primaryKey: true},
    body: { type: 'text', notNull: true },
    createdAt: {
      type: 'timestamp',
      notNull: true,
      default: pgm.func('current_timestamp')
    }
  });

pgm.createTable('sdqwe12', {
    id: {type: 'serial', notNull: true, primaryKey: true},
    body: { type: 'text', notNull: true },
    createdAt: {
      type: 'timestamp',
      notNull: true,
      default: pgm.func('current_timestamp')
    }
  });
};

exports.down = (pgm) => {

};
