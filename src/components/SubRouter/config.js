import Arcanes from '../Arcanes/Arcanes';
import Miroirs from '../Miroirs/miroirs';
import CheminsTriades from '../Chemins_Triades/Chemins_Triades';
import AnneesPersonnelle from '../Annees/Annees';

export const subRoutes = [
  {
    path: 'arcanes',
    exact: true,
    Component: Arcanes,
    name: 'Arcanes'
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
  {
    path: 'chemins-triades',
    exact: true,
    Component: CheminsTriades,
    name: 'Chemins et Triades',
  },
  {
    path: 'annees-personnelle',
    exact: true,
    Component: AnneesPersonnelle,
    name: 'Annees Personnelle',
  },
];