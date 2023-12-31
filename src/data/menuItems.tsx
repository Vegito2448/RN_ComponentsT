import { MenuItem } from "../interfaces/appInterfaces";

export const MenuItems: MenuItem[] = [
  {
    name: 'Animation 101',
    icon: 'cube-outline',
    component: 'Animation101Screen'
  },
  {
    name: 'Animation 102',
    icon: 'cube',
    component: 'Animation102Screen'
  },
  {
    name: 'Switches',
    icon: 'toggle-outline',
    component: 'SwitchScreen'
  },
  {
    name: 'Alerts',
    icon: 'alert-circle-outline',
    component: 'AlertScreen'
  },
  {
    name: 'TextInputs',
    icon: 'document-text-outline',
    component: 'TextInputScreen'
  },
  {
    name: 'PullToRefresh',
    icon: 'refresh-outline',
    component: 'PullToRefreshScreen'
  },
  {
    name: 'SectionList',
    icon: 'list-outline',
    component: 'CustomSectionListScreen'
  },
  {
    name: 'Modal Screen',
    icon: 'copy-outline',
    component: 'ModalScreen'
  },
  {
    name: 'Infinite Scroll',
    icon: 'download-outline',
    component: 'InfiniteScrollScreen'
  },
  {
    name: 'Slides',
    icon: 'enter-outline',
    component: 'SlidesScreen'
  },
  {
    name: 'Themes',
    icon: 'flask-outline',
    component: 'ChangeThemeScreen'
  },
];