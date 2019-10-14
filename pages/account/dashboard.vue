<template>
  <div>
    <div class="mb-5">
      <dashboardnav />
    </div>
    <div class="container p-5">
      <div class="mt-5">
        <dashboardprincipal />
        <modalcreatenewsletter @updateTable="updateInfoTable" />
        <modalupdatenewsletter />
      </div>
    </div>
  </div>
</template>
<script>
import dashboardnav from '@/components/dashboard-nav'
import dashboardprincipal from '@/components/dashboard-principal'
import modalcreatenewsletter from '@/components/modalcreatenewsletter'
import modalupdatenewsletter from '@/components/modalupdatenewsletter'
export default {
  middleware: 'loggedin',
  layout: 'dashboard_layout',
  components: {
    dashboardnav,
    dashboardprincipal,
    modalcreatenewsletter,
    modalupdatenewsletter
  },
  methods: {
    updateInfoTable() {
      document.getElementsByTagName('body')[0].classList.remove('modal-open')
      document
        .getElementsByClassName('modal-backdrop fade show')[0]
        .removeAttribute('class')
    }
  }
}
</script>
