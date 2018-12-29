import Router from 'vue-router'
import bg from './themeName.js'

  let Comp = resolve => {
    require.ensure([`./components/${bg.color}.vue`], ()=>{
        resolve(
            require(`./components/${bg.color}.vue`)
        )
    })
  }

//   let Comp = resolve => {
//     require.ensure([`./components/Light.vue`], ()=>{
//         resolve(
//             require(`./components/Light.vue`)
//         )
//     })
//   }

  export default new Router({
    routes: [
        {
            path: '',
            component: Comp
        }
    ]
})