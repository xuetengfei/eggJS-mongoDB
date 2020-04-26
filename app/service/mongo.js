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

  async getRandomuser() {
    const api = this.config.userDataInterface;
    //  Services call each other
    const data = await this.ctx.curl(api, {
      dataType: 'json',
    });
    return data || {};
  }
  async add() {
    const getRandomuser = await this.service.mongo.getRandomuser();
    const rUser = getRandomuser.data.results[0];
    console.log('rUser: ', rUser);

    const user = new this.ctx.model.UserModel({
      address: Random.county(true),
      zip: Random.zip(),
      gender: rUser.gender,
      country: rUser.location.country,
      longitude: rUser.location.coordinates.longitude,
      latitude: rUser.location.coordinates.latitude,
      email: rUser.email,
      phone: rUser.phone,
      title: rUser.name.title,
      firstName: rUser.name.first,
      lastName: rUser.name.last,
      picture: rUser.picture.large,
    });

    try {
      const res = await user.save();
      if (res && res._id) {
        return {
          newuser: res,
          randomuser: rUser,
        };
      }
      return [];
    } catch (error) {
      return [];
    }
  }

  async creat() {
    const user = new this.ctx.model.UserModel(
      Mock.mock({
        'gender|1': ['male', 'female'],
        address: '@county(true)',
        zip: '@zip()',
        email: '@email',
        province: '@province',
        latitude: '@string("number", 5)',
        longitude: '@string("number", 5)',
        phone: 'number|1-100',
        title: '@title(2)',
        firstName: '@first',
        lastName: '@last()',
        picture: '@url()',
      })
    );
    try {
      const res = await user.save();
      console.log('user.save: ', res);
      if (res && res._id) {
        return res;
      }
      return null;
    } catch (error) {
      return null;
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
      const f_miss_picture = { picture: null };

      const f_or = { $or: [f_accurate, f_accurate2] };

      const o_removeObjectId = { _id: 0 };
      const o_removeVersionNum = { __v: 0 };

      const filter = f_miss_picture;

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
