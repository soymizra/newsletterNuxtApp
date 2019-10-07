<template>
  <div>
    <dashboardnav />
  </div>
</template>
<script>
import dashboardnav from '@/components/dashboard-nav'
export default {
  middleware: 'loggedin',
  layout: 'dashboard_layout',
  components: {
    dashboardnav
  }
}
</script>
