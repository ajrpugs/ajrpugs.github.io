(function () {
  var root = document.documentElement;
  var checkbox = document.getElementById('theme-toggle');

  function setTheme(theme) {
    root.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    if (checkbox) checkbox.checked = (theme === 'dark');
  }

  // The head snippet already set data-theme; sync the checkbox
  var current = root.getAttribute('data-theme') || 'light';
  if (checkbox) checkbox.checked = (current === 'dark');

  // Toggle handler
  if (checkbox) {
    checkbox.addEventListener('change', function () {
      setTheme(checkbox.checked ? 'dark' : 'light');
    });
  }

  // Optional: follow OS changes only if user hasn't chosen manually
  var mql = window.matchMedia('(prefers-color-scheme: dark)');
  if (mql.addEventListener) {
    mql.addEventListener('change', function (e) {
      if (!localStorage.getItem('theme')) setTheme(e.matches ? 'dark' : 'light');
    });
  }
})();