import template from '../dist/index.html';

/**
 * Check if is modern browser
 * @returns {boolean}
 */
const isModern = () => {
  try {
    // eslint-disable-next-line no-new-func
    Function('() => {};');
    return true;
  } catch (e) {
    return false;
  }
};

/**
 * Load instana tracking
 */
const loadInstana = () => {
  (function (s, t, a, n) {
    // eslint-disable-next-line no-unused-expressions
    s[t] ||
      // eslint-disable-next-line no-sequences
      ((s[t] = a),
      (n = s[a] =
        function () {
          n.q.push(arguments);
        }),
      (n.q = []),
      (n.v = 2),
      (n.l = 1 * new Date()));
  })(window, 'InstanaEumObject', 'ineum');

  window.ineum('reportingUrl', 'https://eum-green-saas.instana.io');
  // window.ineum('key', 'zYpoCyHcRjyf9ztFizSHvw');
  window.ineum('key', '0NVjp__cScSJSaGWEYu56A');
  window.ineum('meta', 'oldBrowser', true);
  window.ineum('trackSessions');

  const script = document.createElement('script');
  script.src = 'https://eum.instana.io/eum.min.js';
  script.defer = true;
  script.crossorigin = true;

  document.head.appendChild(script);

  window.ineum('reportEvent', 'error.oldBrowser');
};

if (!isModern()) {
  setTimeout(() => {
    document.write(template);
    loadInstana();
  }, 1);
}
