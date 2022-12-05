const {getPosts} = require("./render");

module.exports = {
  async load(asFeed = false) {
    return getPosts("./")
  }
}
