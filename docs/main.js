/**
 * @see https://web.dev/customize-install/
 * @returns {boolean} whether page has activated in standalone mode
 */
const isStandalone = () => {
  return window.navigator.standalone ?? window.matchMedia('(display-mode: standalone)').matches
}

if (isStandalone()) {
  window.location.href = 'https://chat.openai.com/'
}
