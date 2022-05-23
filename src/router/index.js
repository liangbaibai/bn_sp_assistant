import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const routes = [
  {
    path: '/',
    redirect: '/home',
    component: () => import('../App'),
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/home'),
    meta: { headerClass: 'home--header', headerLogo: 'LOGO-w.png' },
  },
  {
    path: '/new',
    name: 'new',
    component: () => import('@/views/newpage'),
    meta: { title: '企业动态', headerClass: 'origin--header' },
  },
  {
    path: '/new/newdetail/:id',
    name: 'newdetail',
    component: () => import('@/views/newDetail'),
    meta: { title: '企业动态-详情', headerClass: 'origin--header' },
  },
  {
    path: '/eleproducts',
    name: 'eleproducts',
    component: () => import('@/views/eleproducts'),
    meta: { title: '智能穿戴产品', headerClass: 'origin--header' },
  },
  {
    path: '/eleproducts/bloodPressure',
    name: 'bloodPressure',
    component: () => import('@/views/eleproducts/bloodPressure'),
    meta: { title: '智能穿戴产品', headerClass: 'origin--header' },
  },
  {
    path: '/eleproducts/lxWatch',
    name: 'lxWatch',
    component: () => import('@/views/eleproducts/lxWatch'),
    meta: { title: '智能穿戴产品', headerClass: 'origin--header' },
  },
  {
    path: '/eleproducts/weighingScale',
    name: 'weighingScale',
    component: () => import('@/views/eleproducts/weighingScale'),
    meta: { title: '智能穿戴产品', headerClass: 'origin--header' },
  },
  {
    path: '/eleproducts/ylWatch',
    name: 'ylWatch',
    component: () => import('@/views/eleproducts/ylWatch'),
    meta: { title: '智能穿戴产品', headerClass: 'origin--header' },
  },
  {
    path: '/familyproducts',
    name: 'familyproducts',
    component: () => import('@/views/familyproducts'),
    meta: { title: '家庭医疗产品', headerClass: 'origin--header' },
  },
  {
    path: '/medicalservices',
    name: 'medicalservices',
    component: () => import('@/views/medicalservices'),
    meta: { title: '医养服务', headerClass: 'origin--header' },
  },
  {
    path: '/consultantteam',
    name: 'consultantteam',

    component: () => import('@/views/consultantteam'),
    meta: { title: '团队顾问', headerClass: 'origin--header' },
  },
  {
    path: '/commandcenter',
    name: 'commandcenter',
    component: () => import('@/views/commandcenter'),
    meta: { title: '智慧养老方案', headerClass: 'origin--header' },
  },
  {
    path: '/homeCareSolutions',
    name: 'homeCareSolutions',
    component: () => import('@/views/homeCareSolutions'),
    meta: { title: '智慧养老方案', headerClass: 'origin--header' },
  },
  {
    path: '/walkbn',
    name: 'walkbn',
    component: () => import('@/views/walkbn'),
    meta: { title: '走进百年', headerClass: 'origin--header' },
  },
  {
    path: '/bntech',
    name: 'bntech',
    component: () => import('@/views/bntech'),
    meta: { title: '百年技术', headerClass: 'origin--header' },
  },
  {
    path: '/operating',
    name: 'operating',
    component: () => import('@/views/operating'),
    meta: { title: '运营平台', headerClass: 'origin--header' },
  },
  {
    path: '/operatingCare',
    name: 'operatingCare',
    component: () => import('@/views/operatingCare'),
    meta: { title: '运营平台', headerClass: 'origin--header' },
  },
];

const router = new VueRouter({
  routes
});

export default router
