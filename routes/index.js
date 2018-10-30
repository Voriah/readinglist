module.exports = function(app) {
  require('./bookRoutes')(app);
  require('./htmlRoutes')(app);
}
