const fs = require('fs');
const path = require('path');

const config = {
  folder: path.join(__dirname, '../storage')
};

const getFilePath = name => {
  return path.join(config.folder, `${name}.jpg`);
};

// TODO:: errors
const saveFileThroughWriteStream = ({ fileName }) => {
  const filePath = getFilePath(fileName);
  const fileWriteStream = fs.createWriteStream(filePath);

  return {
    writeStream: fileWriteStream,
    path: filePath
  };
};

const getFile = async fileName => {};

module.exports = {
  saveFileThroughWriteStream,
  getFile
};
