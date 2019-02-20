import TakePhoto from '@/page/TakePhoto'
import UserIndex from '@/page/UserIndex'

export default  [
  {
    path: '/',
    name: 'TakePhoto',
    component: TakePhoto,
    meta: {
      index: 0
    }
  },
  {
    path: '/page/UserIndex',
    name: 'UserIndex',
    component: UserIndex,
    meta: {
      index: 4
    }
  },
]
