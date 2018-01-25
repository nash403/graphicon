import Icon from './Icon'

let _icons = {}

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
    fontSize: {
      type: String,
      default: '1em'
    },
    boxSize: {
      type: String,
      default: '1em'
    },
    tag: {
      type: String,
      default: 'i'
    }
  },

  computed: {
    icon () {
      if (this.rawSvg) return new Icon('', this.rawSvg).toSvg(this.options)
      return this.name in _icons ? _icons[this.name].toSvg(this.options) : ''
    }
  },

  render (h) {
    return h(this.tag, {
      class: {
        'g-icon': true
      },
      style: {
        fontSize: this.fontSize,
        width: this.boxSize,
        height: this.boxSize
      },
      attrs: {
        'aria-hidden': true
      },
      domProps: {
        innerHTML: this.icon
      }
    })
  },

  get icons () {
    return _icons
  },

  setIcons (allIcons = {}) {
    _icons = Object.entries(allIcons)
      .map(
        ([name, iconData]) =>
          new Icon(name, ...(Array.isArray(iconData) ? iconData : [iconData]))
      )
      .reduce((iconsAcc, icon) => {
        iconsAcc[icon.name] = icon
        return iconsAcc
      }, {})
  },

  replaceIcon (name, contents, attrs) {
    if (_icons[name]) {
      _icons[name] = new Icon(name, contents, attrs)
    }
  },

  newIcon: (...args) => new Icon(...args)
}
