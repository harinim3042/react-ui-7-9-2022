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

      <div></div>
      <div className="pb-13 pt-12 form-center ">
        <div className="container-bg py-5 pe-5 ps-5">
          <form>
            <label htmlFor="EMPLOYEE_NAME" className=" pb-1">
              {' '}
              EMPLOYEE NAME:{' '} <input
              type="text"
              name="EMPLOYEE_NAME"
              onChange={this.handleChange}
              className=" form-control "
              required
            />{' '}
            </label>
 
            <label htmlFor="EMPLOYEE_NUMBER" className="me-2 pb-1">
              {' '}
              EMPLOYEE NUMBER:{' '}
              <input
              type="text"
              name="EMPLOYEE_NUMBER"
              onChange={this.handleChange}
              className=" form-control "
              required
            />{' '}
            </label>
            
            <label htmlFor="LEAVE_DATE" className=" form-center pb-1 pt-5">
              {' '}
             <b> LEAVE TYPE</b>{' '}
            </label>
            <br />
            <hr />
            <input type="radio" />
            HALF DAY LEAVE
            <hr /> <input type="radio" />
            FULL DAY LEAVE <hr />
            <input type="radio" />
           CONTINOUS DAYS LEAVE<hr/> 
            <label htmlFor="LEAVE_DATE" className=" form-center pb-1 pt-5">
              {' '}
              LEAVE DATE{' '}
            </label>
            <br />
            <label htmlFor="LEAVE_DATE_FROM" className=" pb-1">
              {' '}
              FROM DATE:{' '}
            </label>
            <input
              type="DATE"
              name="LEAVE_DATE_FROM"
              onChange={this.handleChange}
              className="form-control "
              required
            />
            <label htmlFor="LEAVE_DATE_TO" className=" pb-1">
              {' '}
              TO DATE:{' '}
            </label>
            <input
              type="DATE"
              name="LEAVE_DATE_TO"
              onChange={this.handleChange}
              className="form-control "
              required
            />
            <label htmlFor="LEAVE_REASON" className=" pb-1">
              {' '}
              LEAVE REASON:{' '}
            </label>
            <textarea
              type="text"
              name="LEAVE_REASON"
              onChange={this.handleChange}
              className="form-control "
              rows="5"
              cols="30"
              minlength="10"
              maxlength="20"
              required
            />
          </form>
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
