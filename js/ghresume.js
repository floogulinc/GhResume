(function() {
  var user;

  user = new Gh3.User("hit9");

  $(document).ready(function() {
    return user.fetch(function(err, res) {
      var avatar_url;
      document.title = res.login + "'s Resume";
      avatar_url = "https://secure.gravatar.com/avatar/" + res.gravatar_id + "?size=170";
      return $("#avatar").attr("src", avatar_url);
    });
  });

}).call(this);

// Generated by CoffeeScript 1.5.0-pre
