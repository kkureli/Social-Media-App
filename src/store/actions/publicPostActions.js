export const createFilePost = (file, text) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const authorId = getState().firebase.auth.uid;
    const authorName = getState().firebase.profile.firstName;
    const authorLastname = getState().firebase.profile.lastName;
    const firebase = getFirebase();
    const imagesPath = "images";
    const firestore = getFirestore();
    let postsArray = "";
    getState().firestore.ordered.users.map((user) => {
      return user.id === getState().firebase.auth.uid
        ? (postsArray = user.posts)
        : null;
    });

    if (file === null) {
      return (
        firestore
          .collection("PublicPosts")
          .add({
            ...text, ///project.title ve project.content demek ile ayni sey (spread operator kullanmak)
            createdAt: new Date(),
            authorId: authorId,
            authorName: authorName,
            authorLastName: authorLastname,
            likes: 0,
            comments: [],
            UsersLiked: [],
          })
          .then((docRef) => {
            firestore
              .collection("users")
              .doc(authorId)
              .update({ posts: postsArray.concat(docRef.id) });
          })
          // .then(() => {
          //   firestore
          //     .collection("users")
          //     .doc(authorId)
          //     // .collection("UsersLiked")
          //     .update({ posts: postsUpdated });
          // })
          .then(() => {
            dispatch({ type: "CREATE_PUBLIC_TASK", text });
          })
          .catch((err) => {
            dispatch({ type: "CREATE_PUBLIC_TASK_ERROR", text });
          })
      );
    } else {
      return firebase
        .uploadFile(imagesPath, file)
        .then((ret) => ret.uploadTaskSnapshot.ref.getDownloadURL())
        .then((url) =>
          firestore
            .collection("PublicPosts")
            .add({
              ...text, ///project.title ve project.content demek ile ayni sey (spread operator kullanmak)
              createdAt: new Date(),
              imageUrl: url,
              authorId: authorId,
              authorName: authorName,
              authorLastName: authorLastname,
              likes: 0,
              comments: [],
              UsersLiked: [],
            })
            .then((docRef) => {
              firestore
                .collection("users")
                .doc(authorId)
                .update({ posts: postsArray.concat(docRef.id) });
            })
            // .then(() => {
            //   firestore
            //     .collection("users")
            //     .doc(authorId)
            //     // .collection("UsersLiked")
            //     .update({ posts: postsUpdated });
            // })
            .then(() => {
              dispatch({ type: "CREATE_PUBLIC_TASK", text });
            })
            .catch((err) => {
              dispatch({ type: "CREATE_PUBLIC_TASK_ERROR", text });
            })
        );
    }
  };
};

export const postLike = (postId, like, UsersLiked) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const authorId = getState().firebase.auth.uid;

    let UsersLikedUpdated = UsersLiked.concat(authorId);
    let likedPosts = "";

    getState().firestore.ordered.users.map((user) => {
      return user.id === getState().firebase.auth.uid
        ? (likedPosts = user.likedPosts)
        : null;
    });

    let LikedPostsUpdated = likedPosts.concat(postId);

    firestore
      .collection("users")
      .doc(authorId)
      // .collection("likedPosts")
      .update({ likedPosts: LikedPostsUpdated })

      .then(() => {
        firestore
          .collection("PublicPosts")
          .doc(postId)
          .update({ likes: like + 1 })

          .then(() => {
            firestore
              .collection("PublicPosts")
              .doc(postId)
              // .collection("UsersLiked")
              .update({ UsersLiked: UsersLikedUpdated });
          });
      });
  };
};

export const postDislike = (postId, like, UsersLiked) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const authorId = getState().firebase.auth.uid;

    let pos = UsersLiked.indexOf(authorId);

    let UsersLikedUpdated = [...UsersLiked];
    UsersLikedUpdated.splice(pos);

    let likedPosts = "";

    getState().firestore.ordered.users.map((user) => {
      return user.id === getState().firebase.auth.uid
        ? (likedPosts = user.likedPosts)
        : null;
    });

    let position = likedPosts.indexOf(postId);

    let LikedPostsUpdated = [...likedPosts];
    LikedPostsUpdated.splice(position);

    firestore
      .collection("users")
      .doc(authorId)
      // .collection("likedPosts")
      .update({ likedPosts: LikedPostsUpdated })

      .then(() => {
        firestore
          .collection("PublicPosts")
          .doc(postId)
          .update({ likes: like - 1 })

          .then(() => {
            firestore
              .collection("PublicPosts")
              .doc(postId)
              // .collection("UsersLiked")
              .update({ UsersLiked: UsersLikedUpdated });
          });
      });
  };
};

export const createComment = (postId, comment) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const authorId = getState().firebase.auth.uid;

    let authorFirstName = "";
    let authorLastName = "";
    let authorProfilPictureLink = "";

    getState().firestore.ordered.users.map((user) => {
      return user.id === authorId ? (authorFirstName = user.firstName) : null;
    });

    getState().firestore.ordered.users.map((user) => {
      return user.id === authorId ? (authorLastName = user.lastName) : null;
    });

    getState().firestore.ordered.users.map((user) => {
      return user.id === authorId
        ? (authorProfilPictureLink = user.ppUrl)
        : null;
    });

    let commentsArr = [];

    getState().firestore.ordered.PublicPosts.map((post) => {
      return post.id === postId ? (commentsArr = post.comments) : null;
    });

    let madeComments = "";

    getState().firestore.ordered.users.map((user) => {
      return user.id === getState().firebase.auth.uid
        ? (madeComments = user.madeComments)
        : null;
    });

    let madeCommentsUpdated = madeComments.concat({
      comment: comment,
      date: new Date(),
      post: postId,
    });

    let commentsUpdatedArr = {
      comment: comment,
      authorId: authorId,
      authorFirstName: authorFirstName,
      authorLastName: authorLastName,
      date: new Date(),
      authorPic: authorProfilPictureLink,
    };

    let updatedArr = commentsArr.concat(commentsUpdatedArr);

    let commentObj = { comments: updatedArr };

    firestore
      .collection("PublicPosts")
      .doc(postId)
      // .collection("likedPosts")
      .update(commentObj)
      .then(() => {
        firestore
          .collection("users")
          .doc(authorId)
          // .collection("UsersLiked")
          .update({ madeComments: madeCommentsUpdated });
      });
    // .then(() => {
    //   firestore
    //     .collection("PublicPosts")
    //     .doc(postId)
    //     .update({ likes: like + 1 })

    //     .then(() => {
    //       firestore
    //         .collection("PublicPosts")
    //         .doc(postId)
    //         // .collection("UsersLiked")
    //         .update({ UsersLiked: UsersLikedUpdated });
    //     });
    // });
  };
};
