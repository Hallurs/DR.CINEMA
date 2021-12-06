import * as FileSystem from 'expo-file-system';

const contactDirectory = `${FileSystem.documentDirectory}`;
// import data from '../resources/data.json'

const onException = (cb, errorHandler) => {
  try {
    return cb();
  } catch (err) {
    if (errorHandler) {
      return errorHandler(err);
    }
    console.error(err);
  }
};

const setupDirectory = async () => {
  const dir = await FileSystem.getInfoAsync(contactDirectory);
  if (!dir.exists) {
    await FileSystem.makeDirectoryAsync(contactDirectory);
  }
};

export const cleanDirectory = async () => {
  await setupDirectory();
  const result = await onException(() => FileSystem.readDirectoryAsync(contactDirectory));
  Promise.all(result.map(async (file) => {
    JSON.parse(await FileSystem.deleteAsync(`${contactDirectory}/${file}`));
  }));
};

export const deleteSingleContact = async (contactId) => {
  await setupDirectory();
  const result = await onException(() => FileSystem.readDirectoryAsync(contactDirectory));
  Promise.all(result.map(async (file) => {
    if (file === contactId) {
      JSON.parse(await FileSystem.deleteAsync(`${contactDirectory}/${file}`));
    }
  }));
};

export const addContact = async (contactLocation, contactInfo) => {
  await FileSystem.writeAsStringAsync(`${contactDirectory}/${contactLocation}`, JSON.stringify(contactInfo));

  return {
    id: contactInfo.id,
    name: contactInfo.name,
    phoneNumber: contactInfo.phoneNumber,
    Image: contactInfo.image,
  };
};

export const justAddContact = async (contactId, contactInfo) => {
  await FileSystem.writeAsStringAsync(`${contactDirectory}/${contactId}`, JSON.stringify(contactInfo));
  return {
    id: contactId,
    name: contactInfo.name,
    phoneNumber: contactInfo.phoneNumber,
    image: contactInfo.image,
  };
};

export const loadImage = async (fileName) => await onException(() => FileSystem.readAsStringAsync(`${contactDirectory}/${fileName}`, {
  encoding: FileSystem.EncodingType.Base64,
}));

export const getAllContacts = async () => {
  // Check if directory exists
  await setupDirectory();

  const result = await onException(() => FileSystem.readDirectoryAsync(contactDirectory));
  return Promise.all(result.map(async (file) => {
    const fileData = JSON.parse(await FileSystem.readAsStringAsync(`${contactDirectory}/${file}`));
    return {
      id: fileData.id,
      name: fileData.name,
      phoneNumber: fileData.phoneNumber,
      image: fileData.image,
    };
  }));
};

export const getSingleContact = async (contactId) => {
  // Check if directory exists
  await setupDirectory();
  const result = await onException(() => FileSystem.readDirectoryAsync(contactDirectory));
  return Promise.all(result.map(async (file) => {
    const fileData = JSON.parse(await FileSystem.readAsStringAsync(`${contactDirectory}/${file}`));

    if (file === contactId) {
      return {
        id: fileData.id,
        name: fileData.name,
        phoneNumber: fileData.phoneNumber,
        image: fileData.image,
      };
    }
  }));
};
