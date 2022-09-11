import React from 'react';
import Product from '../Products';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';

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
      <div className="pb-13 pt-9 form-center ">
        <div className="container-bg py-4 pe-5 ps-5">
          <Form responsive>
            <h1 className="mb-4 form-center "> LEAVE APPLICATION </h1>
            <Row className="mb-3 form-center ">
              <Form.Group as={Col} controlId="EmpId">
                <Form.Label>
                  <b>EMPLOYEE ID</b>
                </Form.Label>
                <Form.Control type="text" placeholder="Enter Employee ID" />
              </Form.Group>

              <Form.Group as={Col} controlId="EmpName">
                <Form.Label>
                  <b>EMPLOYEE NAME</b>
                </Form.Label>
                <Form.Control type="text" placeholder="Enter Employee Name" />
              </Form.Group>

              <Form.Group as={Col} controlId="EmpPosition">
                <Form.Label>
                  <b>EMPLOYEE POSITION</b>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Employee Position"
                />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="Leave-type">
                <Form.Label className="mb-2">
                  <b>LEAVE TYPE</b>
                </Form.Label>

                <Form.Select
                  defaultValue="HALF DAY"
                  className="px-4 py-1 "
                  style={{ width: '275px' }}
                >
                  <option>HALF DAY</option>
                  <option>FULL DAY</option>
                  <option>CONTINOUS DAY</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} controlId="fromDate">
                <Form.Label>
                  <b>FROM DATE</b>
                </Form.Label>
                <Form.Control type="date" />
              </Form.Group>

              <Form.Group as={Col} controlId="toDate">
                <Form.Label>
                  <b>TO DATE</b>
                </Form.Label>
                <Form.Control type="date" />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="Reason">
                <Form.Label>
                  <b>REASON</b>
                </Form.Label>
                <FloatingLabel>
                  <Form.Control
                    as="textarea"
                    placeholder="Specify Reason for leave applied"
                    style={({ height: '20em' }, { width: '45em' })}
                  />
                </FloatingLabel>
              </Form.Group>
            </Row>

            <div className="form-center">
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </div>
          </Form>
        </div>
      </div>
      <div >
        <h1  className="form-center" >EMPLOYEE LEAVE APPROVAL</h1>
        <div className="px-5 pt-2">
          <Table
            responsive
            hover
            variant="dark"
            className="py-5 pe-5 ps-5 border-radius-hr-table"
          >
            <tr>
              <th>#</th>
              <th>EMPLOYEE ID</th>
              <th>EMPLOYEE NAME</th>
              <th>EMPLOYEE POSITION</th>
              <th>LEAVE TYPE</th>
              <th>FROM DATE</th>
              <th>TO DATE</th>
              <th>REASON</th>
              <th>APPROVAL STATUS</th>
            </tr>

            <tbody>
              <tr>
                <td>1</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>
                  {' '}
                  <Form.Check
                    inline
                    label="APPROVED"
                    name="group1"
                    type="radio"
                    id="approved"
                  />
                  <Form.Check
                    inline
                    label="NOT APPROVED"
                    name="group1"
                    type="radio"
                    id="not_approved"
                  />
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>
                  {' '}
                  <Form.Check
                    inline
                    label="APPROVED"
                    name="group1"
                    type="radio"
                    id="approved"
                  />
                  <Form.Check
                    inline
                    label="NOT APPROVED"
                    name="group1"
                    type="radio"
                    id="not_approved"
                  />
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>
                  {' '}
                  <Form.Check
                    inline
                    label="APPROVED"
                    name="group1"
                    type="radio"
                    id="approved"
                  />
                  <Form.Check
                    inline
                    label="NOT APPROVED"
                    name="group1"
                    type="radio"
                    id="not_approved"
                  />
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      
      </div>
      <div  className="py-1 pe-5 ps-5 form-center">
          <Button variant="dark" type="submit">
            Submit
          </Button>
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
