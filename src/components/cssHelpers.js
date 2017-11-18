import { injectGlobal } from 'styled-components';

const preventBodyScroll = () => {
  return injectGlobal`
         body{overflow:hidden}
      `;
};

export { preventBodyScroll };
