import { mountApp } from 'containers/App';

import authentication from 'modules/authentication';
import layout from 'modules/layouts';
import home from 'modules/home';

const confModule = {
  layout,
  authentication,
  home,
};

export default function() {
  return Promise.all(Object.values(confModule).map(mod => mod.install())).then(mountApp);
}
