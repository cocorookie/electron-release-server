/**
 * Version.js
 *
 * @description :: Represents a release version, which contains assets and is a member of a channel
 * @docs        :: http://sailsjs.org/#!documentation/models
 */
var uuid = require('node-uuid');

module.exports = {

  attributes: {
    id:{
      type: 'text',
      primaryKey: true,
      unique: true,
      defaultsTo: function() {
        return uuid.v4();
      }
    },
    product:{//产品
      type: 'string',
      required:true
    },
    product_name:{//产品名称
      type: 'string',
      required:true
    },
    name: {//版本号
      type: 'string',
      // primaryKey: true,
      // unique: true,
      required: true
    },

    assets: {
      collection: 'asset',
      via: 'version_id'
    },

    channel: {
      model: 'channel',
      required: true
    },

    notes: {
      type: 'string'
    }
  },
  autoPK: false

};
