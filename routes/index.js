/*
 * @Author: victor
 * @Date:   2016-07-16 17:50:31
 * @Last Modified by:   victor
 * @Last Modified time: 2016-07-17 16:23:51
 */

var express = require('express');
var router = express.Router();

var pagesConfig = require('../config/config-pages');
var views = pagesConfig;


/* GET pages. */

router
    .get('/', function(req, res, next) {
        res.render('page1');
    });

views.forEach(function(view, i) {
    var page = view.page;
    var data = view.data;
    var ejs = view.view || page;
    (function(view) {
        router.get("/" + page + ".html", function(req, res) {
            res.render(ejs, data);
        });
    })(page);
});

module.exports = router;
