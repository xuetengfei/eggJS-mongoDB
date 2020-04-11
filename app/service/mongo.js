/* eslint-disable no-unused-vars */
'use strict';

const Service = require('egg').Service;
const Mock = require('mockjs');
const Random = Mock.Random;

function initUserData(roster) {}
class MongoService extends Service {
  async obtain() {
    try {
      const result = await this.ctx.model.UserModel.find();
      return result;
    } catch (error) {
      return [];
    }
  }
  async add() {
    const user = new this.ctx.model.UserModel({
      address: Random.county(true),
      zip: Random.zip(),
    });

    try {
      const res = await user.save();
      if (res && res._id) {
        return res;
      }
      return [];
    } catch (error) {
      return [];
    }
  }

  async other() {
    const arr = this.ctx.model.UserModel;
    try {
      // eg: 查询100000 <= x <=300000范围
      const f_range = { zip: { $lte: 300000, $gte: 100000 } };
      const f_accurate = { zip: '906148' };
      const f_accurate2 = { num: '906148' };
      const f_enum = { zip: { $in: ['906148', 276451, 668561] } };
      const f_nin_enum = { zip: { $nin: ['906148', 276451, 668561] } };

      const f_or = { $or: [f_accurate, f_accurate2] };

      const o_removeObjectId = { _id: 0 };
      const o_removeVersionNum = { __v: 0 };

      const filter = f_or;

      const options = {} || {
        ...o_removeObjectId,
        ...o_removeVersionNum,
      };

      const res = await arr.find(filter, options);
      return res || [];
    } catch (error) {
      return [];
    }
  }
}

module.exports = MongoService;
