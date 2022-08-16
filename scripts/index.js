'use strict';

hexo.config.calendar = Object.assign({
    single: true,
    root: 'calendar/'
}, hexo.config.calendar);

hexo.extend.generator.register('calendar', require('./calendar-generator.js'));