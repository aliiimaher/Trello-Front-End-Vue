import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import LogIn from '../views/LogIn.vue'
import SignUp from '../views/SignUp.vue'
import StartPage from '../views/StartPage.vue'
import Workspaces from "../views/Workspaces.vue"
import SingleWorkspace from "../views/SingleWorkspace.vue"

const routes = [
  {
    path: '/',
    name: 'Home',
    component: StartPage
  },
  {
    path: '/login',
    name: 'LogIn',
    component: LogIn
  },
  {
    path: '/sign-up',
    name: 'signup',
    component: SignUp
  },
  {
    path: '/home',
    name: 'home',
    component: Workspaces
  },
  {
    path: '/workspace',
    name: 'singleWorkspace',
    component: SingleWorkspace,
    props:true
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
