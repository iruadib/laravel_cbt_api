<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" translate="no">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta property="og:title" content="React App">
  <meta property="og:type" content="storage" />
  <meta property="og:image" content="http://127.0.0.1:8000/favicon.ico">
  <meta property="og:url" content="http://127.0.0.1:8000/">
  <meta name="twitter:card" content="summary_large_image">
  
  <title>React App</title>
  <link rel="shortcut icon" href="{{ asset('/favicon.ico') }}" type="image/x-icon">
  
  <script>
    !function (e) { function r(r) { for (var n, l, f = r[0], i = r[1], a = r[2], c = 0, s = []; c < f.length; c++) { l = f[c], Object.prototype.hasOwnProperty.call(o, l) && o[l] && s.push(o[l[0]]), o[l] = 0; }}};
  </script>
  <script src="{{ asset('/js/app.js') }}" defer></script>
  <link rel="stylesheet" href="{{ asset('/css/app.css') }}">
</head>
<body>
  <div id="app">
    <noscript>
      <link rel="stylesheet" href="{{ asset('/css/noscript.css') }}">
      <div class="backdrop">
        <div class="modal">
          <div class="cont">
            <h1>Sorry, our site doesn't work without Javascript.</h1>
            <p>Our site needs javascript to work properly.</p>
            
            <p><span>Need to know how to enable it?</span> <a href="https://enable-javascript.com" target="_blank" rel="noopener noreferrer">Go here</a>.</p>
          </div>
        </div>
      </div>
    </noscript>
  </div>
</body>
</html>
