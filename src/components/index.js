import Header from './Header.vue'
import Footer from './Footer.vue'
import Social from './Social.vue'
import Link from './Link.vue'
import Page from './Page.vue'
import Tag from './Tag.vue'
const components = [
  Header,
  Footer,
  Social,
  Link,
  Page,
  Tag
]

const install = function (Vue, options) {
  components.map(component => {
    Vue.component('P' + component.name, component)
  })
}

export default {
  install
}