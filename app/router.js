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
  router.get('/cookies-page', controller.cookies.set.index);
};
