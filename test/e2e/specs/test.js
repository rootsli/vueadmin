// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'default e2e tests': function (browser) {
    browser
    .url('http://localhost:8080')
      .waitForElementVisible('.ui.middle', 5000)
      .assert.elementPresent('.content')
      // .assert.containsText('div', '登录')
      .assert.elementCount('h2', 1)
      .end()
  }
}
