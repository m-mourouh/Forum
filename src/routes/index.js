import { createRouter, createWebHistory} from "vue-router"
import HomePage from "../pages/Home"
import ThreadShow from "../pages/ThreadShow"
import Forum from "../pages/Forum"
import NotFound from "../pages/NotFound"
import Category from "../pages/Category" 
const routes = [
    { path: '/', component: HomePage, name: "Home"},
    { path: '/forum/:id', component: Forum, name: "Forum", props: true},
    { path: '/category/:id', component: Category, name: "Category", props: true},
    {path: "/thread/:id", name: "ThreadShow", component: ThreadShow, props: true},
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },

  ]
  
 const router = createRouter({
    history: createWebHistory(),
    routes, 
  })

  export default router;  