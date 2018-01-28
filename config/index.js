var config = require("./config.json");

module.exports = {
    getDBConnectionString: function() {
        return `mongodb://${config.username}:${config.password}@ds117128.mlab.com:17128/node-todos`;
    }
}