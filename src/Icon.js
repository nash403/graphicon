import DEFAULT_ATTRS from './default-attrs.json'

class Icon {
  constructor (name, contents, attrs = {}) {
    this.name = name
    let { str, attributes } =
      typeof contents === 'string' && contents
        ? removeSVGRootTag(contents, attrs.keepAttrs)
        : { str: '', attributes: {} }
    this.contents = str
    let keepedAttrs = Array.isArray(attrs.keepAttrs)
      ? attrs.keepAttrs.reduce((acc, a) => {
        if (a in attributes) {
          acc[a] = attributes[a]
        }
        return acc
      }, {})
      : attributes
    delete attrs.keepAttrs
    this.attrs = {
      ...DEFAULT_ATTRS,
      ...attrs,
      ...keepedAttrs,
      ...{
        class: classnames(
          `g-icon-svg gi-${name}`,
          attrs.class || '',
          keepedAttrs.class || ''
        )
      }
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

    return this.contents
      ? `<svg ${attrsToString(combinedAttrs)}>${this.contents}</svg>`
      : ''
  }
}

/**
 * Strip an svg string from the surrounding "<svg ...>[content]</svg>"
 * and return [content] as a string
 * @param {string} svgString svg content string
 * @param {boolean} keepAttrs `true` if you want to keep original svg attributes (defaults to `false`)
 * @returns {string}
 */
function removeSVGRootTag (svgString, keepAttrs = false) {
  let svgRoot = new DOMParser().parseFromString(svgString, 'image/svg+xml')
    .firstChild
  return {
    str: svgRoot.innerHTML,
    ...(keepAttrs === true || Array.isArray(keepAttrs)
      ? { attributes: getAttributes(svgRoot) }
      : { attributes: {} })
  }
}

/**
 * Get attributes from an HTML element as a JSON object
 * @param {HTMLElement} el
 * @returns {object} attributes of the element
 */
function getAttributes (el) {
  return Array.from(el.attributes)
    .reduce((acc, attr) => {
      acc[attr.name] = attr.value
      return acc
    }, {})
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
        .filter(s => s)
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
