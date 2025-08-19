import CreateExercisesView from '@/views/createExercisesView.vue'
import CreateRoutineView from '@/views/createRoutineView.vue'
import HomeView from '@/views/homeView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: HomeView,
  },
  {
    path: '/create/routine',
    component: CreateRoutineView,
  },
  {
    path: '/create/exercises',
    component: CreateExercisesView,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
