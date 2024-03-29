import React from "react";
import "./RandomUser.css";

const RandomUser = (props) => {
  const { userData } = props;
    return (
      <ul>
          {userData.map(user => (
                      <li className="user-card">
                      <img
                        src={user.picture.medium}
                        alt={`${user.name.first} ${user.name.last}`}
                      />
                      <p>
                        {user.name.first} {user.name.last}
                      </p>
                    </li>
          ))}
      </ul>
    );
};

export default RandomUser;
