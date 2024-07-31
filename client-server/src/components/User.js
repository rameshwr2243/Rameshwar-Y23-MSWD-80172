import React from 'react';

const User = ({ name, type }) => {
  return (
    <div>
      <h3>
        Name of the user {name} logged in as {type}
      </h3>
    </div>
  );
};

export default User;
