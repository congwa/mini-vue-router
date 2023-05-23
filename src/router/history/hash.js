export function createWebHashHistory() {
  function bindEvents(fn) {
      window.addEventListener('hashchange', fn)
  }
  return {
      bindEvents,
      url: window.location.hash.slice(1) || '/'
  }
}
