import Icon from './icon'

let _icons = {}
window.totoIcons = _icons
export default {
  props: {
    name: {
      type: String,
      default: ''
    },
    rawSvg: {
      type: String,
      default: ''
    },
    options: {
      type: Object,
      default: () => ({})
    },
    iconStyle: {
      type: Object,
      default: () => ({
        display: 'inline-flex',
        'justify-content': 'center',
        'align-items': 'center'
      })
    },
    iconClasses: {
      type: [String, Array, Object],
      default: ''
    }
  },

  computed: {
    icon () {
      if (this.rawSvg) return this.rawSvg
      return this.name in _icons ? _icons[this.name].toSvg(this.options) : ''
    }
  },

  template: `<i class="g-icon" :class="iconClasses" :style="iconStyle" v-html="icon"></i>`,

  get GIcons () {
    return _icons
  },

  initGIcons (allIcons = {}) {
    _icons = Object.entries(allIcons)
      .map(
        ([name, iconData]) =>
          new Icon(
            name,
            typeof iconData === 'string' ? { contents: iconData } : iconData
          )
      )
      .reduce((icons, icon) => {
        icons[icon.name] = icon
        return icons
      }, {})
  }
}
