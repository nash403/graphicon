import DEFAULT_ATTRS from './default-attrs.json'

class Icon {
  constructor (name, contents) {
    this.name = name
    this.contents =
      typeof contents === 'string' && contents ? removeSVGRootTag(contents) : ''
    this.attrs = {
      ...DEFAULT_ATTRS,
      ...{ class: `g-icon-svg gi-${name}` }
    }
  }

  /**
   * Create an SVG string.
   * @param {Object} attrs
   * @returns {string}
   */
  toSvg (attrs = {}) {
    const combinedAttrs = {
      ...this.attrs,
      ...attrs,
      ...{ class: classnames(this.attrs.class, attrs.class) }
    }

    return `<svg ${attrsToString(combinedAttrs)}>${this.contents}</svg>`
  }
}

/**
 * Strip an svg string from the surrounding "<svg ...>*</svg> "
 * and return * as a string
 * @param {string} svgString
 * @returns {string}
 */
function removeSVGRootTag (svgString) {
  return new DOMParser().parseFromString(svgString, 'image/svg+xml').firstChild
    .innerHTML
}

/**
 * Return a string with unique class names from arguments
 * @param {array} classes
 * @returns {string}
 */
function classnames (...classes) {
  return Array.from(
    new Set(
      classes
        .join(' ')
        .split(' ')
        .filter(s => !!s)
    )
  ).join(' ')
}

/**
 * Convert attributes object to string of HTML attributes.
 * @param {Object} attrs
 * @returns {string}
 */
function attrsToString (attrs) {
  return Object.entries(attrs)
    .map(([key, value]) => `${key}="${value}"`)
    .join(' ')
}

export default Icon
