import React from 'react';
import Product from '../Products';

const Welcome = ({
  products,
  user,
  leaveApplication,
  onSignOut,
  handleDelete,
  handleAddItem,
}) => {
  let username = user.email && user.email.split('@')[0];

  return (
    <div className="container  ">
      <div className="row">
        <div className="col-12">
          <p className="user-title">
            {' '}
            Hello <b>{username}</b> !
            <a href="javscript:;" onClick={leaveApplication}>
              {' '}
              Leave Application{' '}
            </a>
            <a href="javscript:;" onClick={onSignOut}>
              {' '}
              Sign out{' '}
            </a>
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <Product
            product={products}
            handleDeleteItem={handleDelete}
            handleAddItem={handleAddItem}
          />
        </div>
      </div>
    </div>
  );
};

export default Welcome;
