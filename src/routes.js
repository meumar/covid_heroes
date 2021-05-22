import res from './components/reg.vue';
import login from './components/login.vue';
import police from './components/police.vue';
import worker from './components/worker.vue';
import doctors from './components/doctors.vue';
import MainPage from './components/MainPage.vue';



const routes = [
    {path: '/register', component: res},
    {path: '/login', component: login},
    {path: '/police', component: police},
    {path: '/worker', component: worker},
    {path: '/doctors', component: doctors},
    {path: '/MainPage', component: MainPage}

];

export default routes;