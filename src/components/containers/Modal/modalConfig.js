import ImageSetModal from './modals/ImageSetModal/ImageSetModal';

const CONSTANTS = {
  IMAGE_SET: 'IMAGE_SET'
};

const modalsConfig = {
  [CONSTANTS.IMAGE_SET]: ImageSetModal
};

const getModalByName = name => {
  if (!modalsConfig[name]) return null;

  return modalsConfig[name];
};

export { CONSTANTS as default, getModalByName };
