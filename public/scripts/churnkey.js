!(function () {
  if (!window.churnkey || !window.churnkey.created) {
    window.churnkey = { created: true };
    const a = document.createElement("script");
    a.src = "https://assets.churnkey.co/js/app.js?appId=vupg9mh6t";
    a.async = true;
    const b = document.getElementsByTagName("script")[0];
    b.parentNode.insertBefore(a, b);
  }
})();
