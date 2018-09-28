import Arcanes from '../Arcanes/Arcanes';
import VoiesBoucles from '../Voies_Boucles/Voies_Boucles';
import AnneesPersonnelle from '../Annees/Annees';

export const subRoutes = [
  {
    path: '/arcanes',
    exact: true,
    Component: Arcanes,
    name: 'Arcanes'
  },
  {
    path: '/voies-boucles',
    exact: true,
    Component: VoiesBoucles,
    name: 'Voies et Boucles',
  },
  {
    path: '/annees-personnelle',
    exact: true,
    Component: AnneesPersonnelle,
    name: 'Annees Personnelle',
  },
];