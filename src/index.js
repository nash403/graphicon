import GIcon from './graphicon'

const install = function install (Vue, icons, componentName = '') {
  if (icons) GIcon.setIcons(icons)
  Vue.component(componentName || 'GIcon', GIcon)
  Vue.prototype.$setIcons = GIcon.setIcons
  Vue.prototype.$icons = GIcon.icons
}

GIcon.install = install

if (typeof window !== 'undefined') {
  window.GraphIcon = GIcon
}

export { default as Icon } from './Icon'

export default GIcon
