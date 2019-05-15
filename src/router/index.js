import Vue from 'vue'
import Router from 'vue-router'

import Create from '@/pages/create/index'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
		{
			path:'/create',
			title:"创建活动",
			component: Create
		},
		{	
			path: '/detail',
			title: '同城活动',
			component: () => import('@/pages/create/detail.vue')
		},
		{	
			path: '/look',
			title: '预览活动',
			component: () => import('@/pages/create/look.vue')
		},
		{	
			path: '/join',
			title: '报名活动',
			component: () => import('@/pages/join/index.vue') 
		},
		{	
			path: '/mine',
			title: '我的活动',
			component: () => import('@/pages/list/mine.vue') 
		},
		{	
			path: '/hot',
			title: '热门榜',
			component: () => import('@/pages/list/hot.vue') 
		},
		{	
			path: '/theme',
			title: '主题活动',
			component: () => import('@/pages/list/theme.vue') 
		},
		{	
			path: '/search',
			title: '搜索结果',
			component: () => import('@/pages/list/search.vue') 
		},
		{	
			path: '/check',
			title: '报名名单',
			component: () => import('@/pages/check/index.vue') 
		},
		{	
			path: '/sign',
			title: '报名名单',
			component: () => import('@/pages/check/sign.vue') 
		}
    ]
}) 
