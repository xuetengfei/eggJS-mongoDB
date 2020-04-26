'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const database = app.mongooseDB.get('user');
  const schema = new Schema(
    {
      address: {
        type: String,
        required: true,
      },
      zip: {
        type: String,
      },
      city: {
        type: String,
        required: false,
      },
      gender: {
        type: String,
        required: false,
      },
      province: {
        type: String,
        required: false,
      },
      country: {
        type: String,
        required: false,
      },
      longitude: {
        type: String,
        required: false,
      },
      latitude: {
        type: String,
        required: false,
      },
      email: {
        type: String,
        required: false,
      },
      phone: {
        type: String,
        required: false,
      },
      title: {
        type: String,
        required: false,
      },
      firstName: {
        type: String,
        required: false,
      },
      lastName: {
        type: String,
        required: false,
      },
      picture: {
        type: String,
        required: false,
      },
    },
    {
      versionKey: false,
    }
  );

  return database.model('roster', schema, 'roster');

  /* model syntax
  mongoose.model('xxx', schema,'yyy');
  yyy: 自定义 collection 的名称,不让mongo修改大小写和复数形式
  */
};
