'use strict';

var dbm;
var type;
var seed;

/**
 * We receive the dbmigrate dependency from dbmigrate initially.
 * This enables us to not have to rely on NODE_PATH.
 */
exports.setup = function (options, seedLink) {
    dbm = options.dbmigrate;
    type = dbm.dataType;
    seed = seedLink;
};

exports.up = function (db, callback) {
    db.createTable('calls', {
        id: {type: 'string', primaryKey: true},
        phoneFrom: {type: 'string', notNull: true, length: 50},
        phoneTo: {type: 'string', notNull: true, length: 50},
        recordLink: {type: 'string', notNull: true},
        userId: {type: 'int', defaultValue: null},
        processed: {type: 'bool', defaultValue: false},
        createdAt: {type: 'datetime', notNull: true, defaultValue: new String('CURRENT_TIMESTAMP')}
    }, callback)
};

exports.down = function (db) {
    db.dropTable('call')
};

exports._meta = {
    "version": 1
};
