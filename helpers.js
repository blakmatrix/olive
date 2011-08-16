function FlashMessage(type, messages) {
  this.type = type;
  this.messages = typeof messages === 'string' ? [messages] : messages;
}

FlashMessage.prototype = {
  get icon() {
    switch (this.type) {
      case 'info':
        return 'ui-icon-info';
      case 'error':
        return 'ui-icon-alert';
    }
  },

  get stateClass() {
    switch (this.type) {
      case 'info':
        return 'ui-state-highlight';
      case 'error':
        return 'ui-state-error';
    }
  },

  toHTML: function() {
    return '<div class="ui-widget flash">' +
           '<div class="' + this.stateClass + ' ui-corner-all">' +
           '<p><span class="ui-icon ' + this.icon + '"></span>' + this.messages.join(', ') + '</p>' +
           '</div>' +
           '</div>';
  }
};

exports.dynamicHelpers = {
    flashMessages: function(req, res) {
        var html = '';
        ['error', 'info'].forEach(function(type) {
          var messages = req.flash(type);
          if (messages.length > 0) {
            html += new FlashMessage(type, messages).toHTML();
          }
        });
        return html;
    },
    myauth: function (req, res) {
        var ma = {}
            , sess = req.session;

            ma.loggedIn =  (sess.username != undefined) ? true : false;
            ma.username = sess.username;

            return ma;
      },

    g_color: function (req, res) {
        return "body{background-color:#"+req.g_color+";}";
    } 
};

