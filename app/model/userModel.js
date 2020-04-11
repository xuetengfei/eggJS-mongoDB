/* eslint-disable no-unused-vars */
'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const database = app.mongooseDB.get('user');
  const schema = new Schema(
    {
      address: {
        type: String,
      },
      zip: {
        type: String,
      },
      city: {
        type: String,
      },
    },
    {
      // You should be aware of the outcome after set to false
      versionKey: false,
    }
  );

  return database.model('roster', schema, 'roster');

  /* model syntax
  mongoose.model('xxx', schema,'yyy');
  yyy: 自定义 collection 的名称,不让mongo修改大小写和复数形式
  */
};
