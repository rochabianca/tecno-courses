import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Contato from './views/Contato';
import Cursos from './views/Cursos';
import Curso from './views/Curso';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/contato',
      name: 'Contato',
      component: Contato
    },
    {
      path: '/cursos',
      name: 'Cursos',
      component: Cursos
    },
    {
      path: '/cursos/:curso',
      name: 'curso',
      component: Curso,
      props: true
    }
  ]
});
