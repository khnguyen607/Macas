export default [
  {
    path: "/settings/users",
    name: "setting-users",
    component: () => import("@/views/settings/users/user-list.vue"),
  },
  {
    path: "/settings/permissions",
    name: "setting-permissions",
    component: () => import("@/views/settings/permissions/permission-list.vue"),
  },
  {
    path: "/settings/teams",
    name: "setting-teams",
    component: () => import("@/views/settings/teams/team-list.vue"),
  },
  {
    path: "/settings/branches",
    name: "setting-branches",
    component: () => import("@/views/settings/branches/branch-list.vue"),
  },
];
