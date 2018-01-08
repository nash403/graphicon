# g-icon

> A Vue.js plugin/component to help you manage your icons seamlessly

## Usage

* Install the plugin:

  ```js
  // Declare your icons
  import GIcon from 'v-gicon'

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

  <g-icon name="icon-name" :options="{...}"/>
  <!-- or -->
  <g-icon rawSvg="svg contents here" :options="{...}"/>
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
  "width": 24,
  "height": 24,
  "viewBox": "0 0 24 24",
  "fill": "none",
  "stroke": "currentColor",
  "stroke-width": 2,
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}
```

## Test

run `cd test && npm run dev`
