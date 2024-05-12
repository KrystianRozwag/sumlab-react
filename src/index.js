// Upewnij się, że przeglądarka obsługuje service workery
app.use(express.static(__dirname)); //here is important thing - no static directory, because all static :)

app.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
      navigator.serviceWorker.register('../public/service-worker.js').then(function(registration) {
        // Rejestracja udana
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
      }, function(err) {
        // Rejestracja nieudana :(
        console.log('ServiceWorker registration failed: ', err);
      });
    });
  }