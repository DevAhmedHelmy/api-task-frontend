import Router from 'vue-router';
import Login from './pages/login/Login.vue';
import Logout from './pages/login/Logout.vue';
import Signup from './pages/login/Signup.vue';
import Customers from './pages/Customers.vue';
import HomePage from './pages/HomePage.vue';
import AboutPage from './pages/AboutPage.vue';
import ExamplePage from './pages/ExamplePage.vue';


// import messagesRoutes from '@/modules/messages/router';
// import peopleRoutes from '@/modules/people/router';

const baseRoutes = [
  {
    path: '/home',
    name: 'home',
    component: HomePage,
  },
  {
    path: '/about',
    name: 'about',
    component: AboutPage,
  },
  {
    path: '/examples',
    name: 'examples',
    component: ExamplePage,
  },


  {
      path: '/login',
      name:'login',
      component: Login
  },
  {
      path: '/logout',
      name:'logout',
      component: Logout
  },
  {
      path: '/signup',
      name:'signup',
      component: Signup
  },
  {
    path: '/customers',
    name:'customers',
    component: Customers
},
  {
    path: '*',
    redirect: {
      name: 'home',
    },
  },
];

// const routes = baseRoutes.concat(messagesRoutes, peopleRoutes);
const routes = baseRoutes;
export default new Router({
  mode: 'history',
  routes,
});
