'use strict';

const Controller = require('egg').Controller;

class CookiesSetController extends Controller {
  async index() {
    const { ctx } = this;
    let count = ctx.cookies.get('count');
    count = count ? Number(count) : 0;
    console.log('count: ', count);
    ctx.cookies.set('count', ++count);
    ctx.body = 'hi, cookies page';
  }
}

module.exports = CookiesSetController;
