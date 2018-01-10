import GIcon from './gicon'

const install = function (Vue, options) {
  if (options) GIcon.setIcons(options)
  Vue.component('g-icon', GIcon)
  Vue.prototype.$setIcons = GIcon.setIcons
  Vue.prototype.$icons = GIcon.icons
}

GIcon.install = install

if (typeof window !== 'undefined') {
  window.GIcon = GIcon
}

export { default as Icon } from './Icon'

export default GIcon
