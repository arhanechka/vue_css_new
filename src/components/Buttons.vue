<template>
    <div>
        <button 
        :class="{'buttonon': !switched}"
        @click="turnOff(true)">ON</button>
        <button :class="{'buttonoff': switched}"
        @click="turnOff(false)">OFF</button>
</div>
</template>
<script>
export default {
props: ['switched'],
data() {
    return{
isEnabled: false
    }
}, 
methods:{
    turnOff(newValue){
    this.$emit('input', newValue)
    }
  } 
}

</script>
<style>
.buttonon{
    background: green
}
.buttonoff{
    background: red
}
</style>

