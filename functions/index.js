const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);

exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello from Kaan!");
});

const createNotification = (notification) => {
  return admin
    .firestore()
    .collection("notifications")
    .add(notification)
    .then((doc) => console.log("notification added", doc));
};

exports.taskCreated = functions.firestore
  .document("PublicPosts/{postId}")
  .onCreate((doc) => {
    const task = doc.data();
    const notification = {
      content: " Added a new post",
      user: `${task.authorName}${" "}${task.authorLastName}`,
      time: admin.firestore.FieldValue.serverTimestamp(),
    };

    return createNotification(notification);
  });

exports.userJoined = functions.auth.user().onCreate((user) => {
  return admin
    .firestore()
    .collection("users")
    .doc(user.uid)
    .get()
    .then((doc) => {
      const newUser = doc.data();
      const notification = {
        content: " Joined the portal!",
        user: `${newUser.firstName} ${newUser.lastName}`,
        time: admin.firestore.FieldValue.serverTimestamp(),
      };
      return createNotification(notification);
    });
});
