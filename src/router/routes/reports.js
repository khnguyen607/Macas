export default [
  {
    path: '/reports/entry',
    name: 'report-entry',
    component: () => import('@/views/reports/report-entry/index.vue'),
  },
  {
    path: '/reports/query',
    name: 'report-query',
    component: () => import('@/views/reports/report-query/query.vue'),
  },
]
