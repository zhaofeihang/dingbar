import TakePhoto from '@/page/TakePhoto'
import UserIndex from '@/page/UserIndex'
import SetUserInfo from '@/page/SetUserInfo'
import MyFollow from '@/page/MyFollow'
import MyRelease from '@/page/MyRelease'
import MyCollect from '@/page/MyCollect'
import MyFan from '@/page/MyFan'
import MyIncome from '@/page/MyIncome'
import MySet from '@/page/MySet'

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
  {
    path: '/page/SetUserInfo',
    name: 'SetUserInfo',
    component: SetUserInfo,
    meta: {
      index: 5
    }
  },
  {
    path: '/page/MyRelease',
    name: 'MyRelease',
    component: MyRelease,
    meta: {
      index: 6
    }
  },
  {
    path: '/page/MyFollow',
    name: 'MyFollow',
    component: MyFollow,
    meta: {
      index: 7
    }
  },
  {
    path: '/page/MyCollect',
    name: 'MyCollect',
    component: MyCollect,
    meta: {
      index: 8
    }
  },
  {
    path: '/page/MyFan',
    name: 'MyFan',
    component: MyFan,
    meta: {
      index: 9
    }
  },
  {
    path: '/page/MyIncome',
    name: 'MyIncome',
    component: MyIncome,
    meta: {
      index: 10
    }
  },
  {
    path: '/page/MySet',
    name: 'MySet',
    component: MySet,
    meta: {
      index: 11
    }
  },
]
