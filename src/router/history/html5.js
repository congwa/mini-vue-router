export function createWebHistory() {
  function bindEvents(fn) {
    window.addEventListener('popstate', function() {
      fn()
    })
  }

  function push(path) {
      window.history.pushState({}, '', path)
      var popStateEvent = new PopStateEvent('popstate', { state: {} });
      dispatchEvent(popStateEvent);
  }
  return {
      bindEvents,
      url: window.location.pathname || '/',
      mode: 'html5',
      push
  }
}
