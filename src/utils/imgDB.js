import C22 from 'Assets/majeurs/22.jpg';
import M56 from 'Assets/mineurs/56.jpg';

function importAll(r) {
  return r.keys().map(r);
}

export const majors = importAll(require.context('Assets/majeurs', false, /\.(png|jpe?g|svg)$/));
majors.unshift(C22);

export const minors = importAll(require.context('Assets/mineurs', false, /\.(png|jpe?g|svg)$/));
minors.unshift(M56);