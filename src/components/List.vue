<template>
<div>
    <h1>List</h1>
    <input v-model = "searchItems">
    <ul>
      <li v-for="item in filteredNames">{{item}}</li>
    </ul>
</div>
</template>

<script>
import mixin from './listMixin.js'
  export default {
      mixins: [mixin]
  }   
    

</script>
