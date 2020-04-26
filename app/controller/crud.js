'use strict';

const Service = require('egg').Service;

class CrudService extends Service {
  async index() {
    const { ctx } = this;
    ctx.body = 'crud';
  }

  async creat() {
    const { ctx, service } = this;
    const res = await service.mongo.creat();
    ctx.body = {
      msg: 'news!',
      status: res ? 'success' : 'fail',
      res,
    };
  }
}

module.exports = CrudService;
