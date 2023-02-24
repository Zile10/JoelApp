<template lang="">
  <h2>User CRUD Table</h2>
  <div class="container">
    <table class="table table-dark table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Handle</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td></td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td colspan="1">Larry the Bird</td>
          <td>@twitter</td>
          <td></td>
        </tr>
      </tbody>
      {{users}}
    </table>

  </div>
</template>
<script>
export default {
  computed: {
    users() {
      return this.$store.users
    }
  }
}
</script>
<style lang="">
  
</style>

<!-- http://192.168.9.72:8081/ -->