import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/home'
import file from '@/components/file'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
    	path: '/home',
    	name: 'Home',
    	component: Home
    },
    {
    	path: '/file',
    	name: 'file',
    	component: file
    }
  ]
})
