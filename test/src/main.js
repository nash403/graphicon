import Vue from 'vue'
import App from './App.vue'
import GIcon from '../../src/index'

Vue.use(GIcon, {
  'arrow-left': require('!svg-inline-loader!@/assets/icons/arrow-left.svg'),
  'arrow-right': [
    require('!svg-inline-loader!@/assets/icons/arrow-right.svg'),
    { keepAttrs: ['class'] }
  ],
  'chevron-left': require('!svg-inline-loader!@/assets/icons/chevron-left.svg'),
  'chevron-right': require('!svg-inline-loader!@/assets/icons/chevron-right.svg'),
  'trending-down': require('!svg-inline-loader!@/assets/icons/trending-down.svg'),
  'trending-up': require('!svg-inline-loader!@/assets/icons/trending-up.svg'),
  user: require('!svg-inline-loader!@/assets/icons/user.svg'),
  users: require('!svg-inline-loader!@/assets/icons/users.svg')
})

new Vue({
  el: '#app',
  render: h => h(App)
})
