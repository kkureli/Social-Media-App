export const addFriends = (userId) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();

    let authId = getState().firebase.auth.uid;
    let userFriends = "";
    let authFriends = "";

    getState().firestore.ordered.users.map((user) => {
      return user.id === authId ? (authFriends = user.friends) : null;
    });

    console.log("authFri", authFriends);

    getState().firestore.ordered.users.map((user) => {
      return user.id === userId ? (userFriends = user.friends) : null;
    });

    let authFriendsUpdated = authFriends.concat(userId);

    let userFriendsUpdated = userFriends.concat(authId);

    firestore
      .collection("users")
      .doc(authId)
      // .collection("likedPosts")
      .update({ friends: authFriendsUpdated })

      .then(() => {
        firestore
          .collection("users")
          .doc(userId)
          // .collection("likedPosts")
          .update({ friends: userFriendsUpdated });
      });
  };
};

export const removeFriends = (userId) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();

    let authId = getState().firebase.auth.uid;
    let authFriends = "";

    let userFriends = "";

    getState().firestore.ordered.users.map((user) => {
      return user.id === authId ? (authFriends = user.friends) : null;
    });

    getState().firestore.ordered.users.map((user) => {
      return user.id === userId ? (userFriends = user.friends) : null;
    });

    let pos = authFriends.indexOf(userId);

    let authFriendsUpdated = [...authFriends];

    authFriendsUpdated.splice(pos);

    let position = userFriends.indexOf(authId);

    let userFriendsUpdated = [...userFriends];
    userFriendsUpdated.splice(position);

    firestore
      .collection("users")
      .doc(authId)
      // .collection("likedPosts")
      .update({ friends: authFriendsUpdated })

      .then(() => {
        firestore
          .collection("users")
          .doc(userId)
          .update({ friends: userFriendsUpdated });
      });
  };
};
