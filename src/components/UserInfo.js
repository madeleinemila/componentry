import React, { PureComponent as Component } from 'react';

function UserInfo (props) {
  return (
    <div>
      Username: { props.userName }
    </div>
  );
}

export default UserInfo;
