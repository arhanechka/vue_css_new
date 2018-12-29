export default {
    data() {
   return{
     
     names: ['Ann', 'Vanna', 'Rosa'],
     searchItems: ''
 }
    },
    computed: {filteredNames () {
        return this.names.filter(name =>{
        return name.toLowerCase().indexOf(this.searchItems.toLowerCase())!=-1})
    }
    }
    }