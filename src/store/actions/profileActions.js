export const addUserImage = (file, userId) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const imagesPath = "images";
    const firestore = getFirestore();
    {
      return firebase
        .uploadFile(imagesPath, file)
        .then((ret) => ret.uploadTaskSnapshot.ref.getDownloadURL())
        .then((url) =>
          firestore.collection("users").doc(userId).update({
            ppUrl: url,
          })
        );
    }
  };
};
