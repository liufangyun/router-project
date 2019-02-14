export default{
  name: 'SideNavigation',
  data () {
    return {
      activeLink: null
    }
  },
  mounted () {
    console.log(this.$route)
    this.activeLink = this.$route.path
  },
  watch: {
    $route (newVat, oldVat) {
      console.log()
    }
  }
}
