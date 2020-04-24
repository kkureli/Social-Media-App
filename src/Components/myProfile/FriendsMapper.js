import React from "react";
import { Link } from "react-router-dom";

const FriendsMapper = (props) => {
  const { profile, users } = props;
  let friends = [];

  {
    users &&
      profile &&
      users.map((user) => {
        profile.friends.map((friend) => {
          if (user.id === friend) {
            friends.push(user);
          }
        });
      });
  }

  console.log("friends:", friends);

  return (
    <>
      {friends &&
        friends.map((friend) => {
          return (
            <li>
              <span>
                <Link
                  to={{
                    pathname: `/user/${friend.id}`,
                  }}
                >
                  {friend.firstName + " "} {friend.lastName}
                </Link>
              </span>
            </li>
          );
        })}
    </>
  );
};

export default FriendsMapper;
