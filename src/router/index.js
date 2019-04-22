//个人中心相关
import UserIndex from '@/page/UserIndex'
import SetUserInfo from '@/page/user/SetUserInfo'
import MyFollow from '@/page/user/MyFollow'
import MyRelease from '@/page/user/MyRelease'
import MyCollect from '@/page/user/MyCollect'
import MyFan from '@/page/user/MyFan'
import MyIncome from '@/page/user/MyIncome'
import MySet from '@/page/user/MySet'
import AboutUs from '@/page/user/AboutUs'
import IncomeAccount from '@/page/user/IncomeAccount'
import IncomeRecord from '@/page/user/IncomeRecord'
import ReportOpinion from '@/page/user/ReportOpinion'
import ServicePact from '@/page/user/ServicePact'
//登录注册相关
import MobileInfoVerification from '@/page/user/MobileInfoVerification'
import ForgetPwd from '@/page/user/ForgetPwd'
import LoginIndex from '@/page/user/LoginIndex'
import MobileInfoLogin from '@/page/user/MobileInfoLogin'
import MobileNumLogin from '@/page/user/MobileNumLogin'
import Register from '@/page/user/Register'
import BandUserInfo from '@/page/user/BandUserInfo'
//随手拍
import TakePhoto from '@/page/TakePhoto'
import DesignDetail from '@/page/take_photo/DesignDetail'
import Message from '@/page/take_photo/Message'
//发布
import Release from '@/page/release/Release'
import SelectAddress from '@/page/release/SelectAddress'
import SelectLabel from '@/page/release/SelectLabel'
import ReleaseImgEdit from '@/page/release/ReleaseImgEdit'



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
    path: '/page/user/SetUserInfo',
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
  {
    path: '/page/AboutUs',
    name: 'AboutUs',
    component: AboutUs,
    meta: {
      index: 12
    }
  },
  {
    path: '/page/IncomeAccount',
    name: 'IncomeAccount',
    component: IncomeAccount,
    meta: {
      index: 13
    }
  },
  {
    path: '/page/IncomeRecord',
    name: 'IncomeRecord',
    component: IncomeRecord,
    meta: {
      index: 14
    }
  },
  {
    path: '/page/ReportOpinion',
    name: 'ReportOpinion',
    component: ReportOpinion,
    meta: {
      index: 15
    }
  },
  {
    path: '/page/ServicePact',
    name: 'ServicePact',
    component: ServicePact,
    meta: {
      index: 16
    }
  },
  {
    path: '/page/take_photo/DesignDetail',
    name: 'DesignDetail',
    component: DesignDetail,
    meta: {
      index: 17
    }
  },
  {
    path: '/page/user/LoginIndex',
    name: 'LoginIndex',
    component: LoginIndex,
    meta: {
      index: 18
    }
  },
  {
    path: '/page/user/ForgetPwd',
    name: 'ForgetPwd',
    component: ForgetPwd,
    meta: {
      index: 19
    }
  },
  {
    path: '/page/user/Register',
    name: 'Register',
    component: Register,
    meta: {
      index: 20
    }
  },
  {
    path: '/page/user/MobileNumLogin',
    name: 'MobileNumLogin',
    component: MobileNumLogin,
    meta: {
      index: 21
    }
  },
  {
    path: '/page/user/MobileInfoLogin',
    name: 'MobileInfoLogin',
    component: MobileInfoLogin,
    meta: {
      index: 22
    }
  },
  {
    path: '/page/user/MobileInfoVerification',
    name: 'MobileInfoVerification',
    component: MobileInfoVerification,
    meta: {
      index: 23
    }
  },
  {
    path: '/page/take_photo/Message',
    name: 'Message',
    component: Message,
    meta: {
      index: 24
    }
  },
  {
    path: '/page/release/ReleaseImgEdit',
    name: 'ReleaseImgEdit',
    component: ReleaseImgEdit,
    meta: {
      index: 25,
      keepAlive: true
    }
  },
  {
    path: '/page/release/Release',
    name: 'Release',
    component: Release,
    meta: {
      index: 26,
      keepAlive: true
    }
  },
  {
    path: '/page/release/SelectAddress',
    name: 'SelectAddress',
    component: SelectAddress,
    meta: {
      index: 27,
      keepAlive: true
    }
  },
  {
    path: '/page/release/SelectLabel',
    name: 'SelectLabel',
    component: SelectLabel,
    meta: {
      index: 28,
      keepAlive: true
    }
  },
  {
    path: '/page/user/BandUserInfo',
    name: 'BandUserInfo',
    component: BandUserInfo,
    meta: {
      index: 29
    }
  },
]
