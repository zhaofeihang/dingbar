// import Vue from 'vue'
// import Router from 'vue-router'
import TakePhoto from '@/page/TakePhoto'
// import HotChat from '@/page/HotChat'
import Release from '@/page/Release'
import UserIndex from '@/page/UserIndex'

// Vue.use(Router)

export default  [
  {
    path: '/',
    name: 'TakePhoto',
    component: TakePhoto
  },
  // {
  //   path: '/page/HotChat',
  //   name: 'HotChat',
  //   component: HotChat
  // },
  {
    path: '/page/Release',
    name: 'Release',
    component: Release
  },
  {
    path: '/page/UserIndex',
    name: 'UserIndex',
    component: UserIndex
  },
]
