/**
 * @see https://web.dev/customize-install/
 */
const isStandalone = () => {
  return navigator.standalone ?? window.matchMedia('(display-mode: standalone)').matches
}

if (isStandalone()) {
  location.href = 'https://chat.openai.com/'
}
