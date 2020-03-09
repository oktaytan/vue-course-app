import Vue from 'vue';
import Vuex from 'vuex';
import ax from '../utils/settings';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    courses: [],
    updCourse: {}
  },
  mutations: {
    setCourses: (state, courses) => state.courses = courses,
    setUpdCourse: (state, updCourse) => state.updCourse = updCourse
  },
  actions: {
    fetchCourses: (context) => {
      return ax.get('/get_all_data').then(res => context.commit('setCourses', res.data)).catch(err => console.log(err))
    },
    fetchSingle: (context, id) => {
      return ax.post('/get_single_data', JSON.stringify(id)).then(res => context.commit('setUpdCourse', res.data)).catch(err => console.log(err))
    },
    addCourse: (context, course) => {
      return ax.post('/save', JSON.stringify(course)).catch(err => console.log(err))
    },
    updateCourse: (context, course) => {
      return ax.post('/update', JSON.stringify(course)).catch(err => console.log(err))
    },
    deleteCourse: (context, id) => {
      return ax.post('/delete', JSON.stringify(id)).catch(err => console.log(err))
    }
  },
  getters: {
    getCourses: state => state.courses,
    getUpdCourse: state => state.updCourse,
  },
  modules: {
  }
})
