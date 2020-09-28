import { RouteRecordRaw } from 'vue-router';
import { AppleOutlined, AndroidOutlined, WechatOutlined, AlipayCircleOutlined } from '@ant-design/icons-vue';
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component:() => import('../views/Home.vue'),
    meta: {
      icon: AppleOutlined,
    }
  },
  {
    path: '/Box',
    name: 'Box',
    component:() => import('../components/box'),
    meta: {
      icon: AlipayCircleOutlined,
    }
  },
  {
    path: '/About',
    name: 'About',
    component:() => import('../views/About.vue'),
    meta: {
      icon: AndroidOutlined,
    },
    children: [
      {
        path: '/manage',
        name: 'Manage',
        component:() => import('../views/About.vue'),
        meta: {
          icon: WechatOutlined,
        },
      }
    ]
  }
];
export default routes;