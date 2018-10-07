import Individuel from '../Individuel/Individuel';
import Alliance from '../Alliance/Alliance';

export const appRoutes = [
  {
    path: '/individuel',
    exact: false,
    Component: Individuel
  },
  {
    path: '/alliance',
    exact: false,
    Component: Alliance
  }
];