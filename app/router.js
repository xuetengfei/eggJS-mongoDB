'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/news', controller.news.index);
  router.get('/add', controller.news.add);
  router.get('/other', controller.news.other);
  router.get('/crud/index', controller.crud.index);
  router.get('/crud/creat', controller.crud.creat);
  router.get('/cookies-page', controller.cookies.set.index);
};
