'use strict';

/**
 * commentator service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::commentator.commentator');
