import GIcon from './gicon'

const install = function (Vue, options) {
  if (options) GIcon.initGIcons(options)
  Vue.component('g-icon', GIcon)
  Vue.prototype.$initGIcons = GIcon.initGIcons
  Vue.prototype.$GIcons = GIcon.GIcons
}

GIcon.install = install

if (typeof window !== 'undefined') {
  window.GIcon = GIcon
}

export { default as Icon } from './icon'

export default GIcon
