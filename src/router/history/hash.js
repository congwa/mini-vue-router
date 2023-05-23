export function createWebHashHistory() {
  function bindEvents(fn) {
      window.addEventListener('hashchange', fn)
  }

  function push(path) {
    window.location.hash = path
  }
  return {
      bindEvents,
      url: window.location.hash.slice(1) || '/',
      mode: 'hash',
      push
  }
}
