# g-icon

> A Vue.js plugin/component to help you manage your icons seamlessly

## Installation

`npm install v-gicon` or `yarn add v-gicon`

Directly include it in html:

```html
<!-- Browsers with ES module support load this file. -->
<script type="module" src="node_modules/v-gicon/dist/g-icon.js"></script>

<!-- Older browsers load this file (and module-supporting -->
<!-- browsers know when *not* to load this file). -->
<script nomodule src="node_modules/v-gicon/dist/g-icon-legacy.js"></script>
```

## Usage

* Install the plugin:

  ```js
  // Declare your icons
  import GIcon from 'v-gicon' // or use `window.GIcon` in browsers

  // Here I use the svg-inline-loader for webpack to load contents of svg files
  // but you could any method that suits you
  // This will call `Vue.component('g-icon', GIcon)` internally
  Vue.use(GIcon, {
    'arrow-left': require('!svg-inline-loader!@/assets/icons/arrow-left.svg'),
    'arrow-right': require('!svg-inline-loader!@/assets/icons/arrow-right.svg'),
    ...
  })

  // Or just call at some point
  GIcon.setIcons({ ...your icons... })
  ```

* Then use `g-icon` in your components:

  ```html
  <!-- the g-icon component will render as `<i class="g-icon" v-html="icon content"></i>` -->

  <!-- call with icon name -->
  <g-icon name="icon-name" :options="{...}"/>

  <!-- or with raw svg string -->
  <g-icon rawSvg="svg contents here" :options="{...}"/>

  <!-- or if you use font-awesome for example you can just pass classes down to g-icon -->
  <g-icon :class="fa-icon-name fa-..." />

  <!-- Since v1.1.0 you can control sizes with more ease.
  box-size & font-size will set the width, the height and the font-size of the <i>.
  See also options section below. -->
  <g-icon name="icon-name" box-size="2em" font-size="2em" />
  ```

  If you didn't install the plugin with Vue.use you'll have to declare the GIcon component first:

  ```js
  import GIcon from 'v-gicon'

  {
    ...
    components: {
      GIcon
    },
    ...
  }
  ```

## Options

The `options` props of `g-icon` is an object containing attributes that will be merged to default attributes and passed to the root svg element of icons. The defaults attributes are the following:

```json
{
  "xmlns": "http://www.w3.org/2000/svg",
  "width": "1em",
  "height": "1em",
  "viewBox": "0 0 24 24",
  "fill": "none",
  "stroke": "currentColor",
  "stroke-width": 2,
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}
```

## Example

1. `git clone` the repo
2. run `cd g-icon/test && npm run dev` and it will open your browser at localhost:8080
3. See the result
