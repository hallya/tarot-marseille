import Arcanes from '../Arcanes/Arcanes';
import VoiesBoucles from '../Voies_Boucles/Voies_Boucles';
import AnneesPersonnelle from '../Annees/Annees';
import Miroirs from '../Miroirs/miroirs';

export const subRoutes = [
  {
    path: 'arcanes',
    exact: true,
    Component: Arcanes,
    name: 'Arcanes'
  },
  {
    path: 'voies-boucles',
    exact: true,
    Component: VoiesBoucles,
    name: 'Voies et Boucles',
  },
  {
    path: 'annees-personnelle',
    exact: true,
    Component: AnneesPersonnelle,
    name: 'Annees Personnelle',
  },
  {
    path: 'miroirs13',
    exact: true,
    Component: Miroirs,
    name: 'Miroirs à 13',
  },
  {
    path: 'miroirs17',
    exact: true,
    Component: Miroirs,
    name: 'Miroirs à 17',
  },
  {
    path: 'miroirs22',
    exact: true,
    Component: Miroirs,
    name: 'Miroirs à 22',
  },
];