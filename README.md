# GraphIcon

> A Vue.js plugin/component to help you manage your icons seamlessly

## Installation

`npm install graphicon` or `yarn add graphicon`

## Usage

* Install the plugin:

  ```js
  // Declare your icons
  import GIcon from 'graphicon' // or use `window.GIcon` in browsers

  // Here I use the svg-inline-loader for webpack to load contents of svg files
  // but you could any method that suits you
  // This will call `Vue.component('GIcon', GIcon)` internally
  Vue.use(GIcon, {
    'arrow-left': require('!svg-inline-loader!@/assets/icons/arrow-left.svg'),
    'arrow-right': [require('!svg-inline-loader!@/assets/icons/arrow-right.svg'), {...defaultSvgAttributes...}],
    // You can pass a `keepAttrs` key to keep attributes from the original svg tag.
    // The value can be either `true` to keep all attributes, or an array of keys to be kept.
    ...
  })

  // Or just call at some point
  GIcon.setIcons({ ...your icons... })
  ```

* Then use `GIcon` in your components:

  ```html
  <!-- the GIcon component will render as `<i class="GIcon" v-html="[icon content]"></i>` -->

  <!-- call with icon name -->
  <GIcon name="icon-name" :options="{...}"/>

  <!-- or with raw svg string -->
  <GIcon rawSvg="svg contents here" :options="{...}"/>

  <!-- or if you use font-awesome for example you can just pass classes down to GIcon -->
  <GIcon :class="fa-icon-name fa-..." />

  <!-- Since v1.1.0 you can control sizes with more ease.
  box-size & font-size will set the width, the height and the font-size of the <i>.
  See also options section below. -->
  <GIcon name="icon-name" box-size="2em" font-size="2em" />
  ```

  If you didn't install the plugin with Vue.use you'll have to declare the GIcon component first:

  ```js
  import GIcon from 'graphicon'

  {
    ...
    components: {
      GIcon
    },
    ...
  }
  ```

## Options

The `options` props of `GIcon` is an object containing attributes that will be merged to default attributes and passed to the root svg element of icons. The defaults attributes are the following:

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
2. run `cd graphicon/test && vue serve src/main.js` and it will serve an example app at localhost:8080 (require `@vue/cli` to be installed)
3. Enjoy :tada:

## Licence

MIT License

Copyright (c) 2018 Honoré Nintunze

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

> Icons are from [Feather icons](https://feathericons.com/).
