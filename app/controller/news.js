/* eslint-disable no-unused-vars */
/* eslint-disable quotes */
'use strict';

const mockjs = require('mockjs');
const Controller = require('egg').Controller;

class NewsController extends Controller {
  async index() {
    const { ctx, service } = this;
    const roster = await service.mongo.obtain();
    const r = {
      msg: 'news!',
      list: roster,
    };
    ctx.body = `${JSON.stringify(r, null, 2)}`;
  }
  async add() {
    const { ctx, service } = this;
    const roster = await service.mongo.add();
    ctx.body = {
      msg: 'news!',
      list: roster,
    };
  }
  async other() {
    const { ctx, service } = this;
    const list = await service.mongo.other();
    ctx.body = {
      msg: 'success!',
      len: list.length,
      list,
    };
  }
}

module.exports = NewsController;

// curl -s http://localhost:7001/news | fx '.'
