import React, { Component } from 'react';
import { Table, Button } from 'reactstrap';


class App extends Component {
  render() {
    return (
      <div className="App container">
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Rating</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>1</td>
              <td>Book Title</td>

              <td>2.5</td>

              <td>

                <Button color="success" size="sm" className="mr-2">Edit</Button>

                <Button color="danger" size="sm" className="mr-2">Delete</Button>

              </td>

            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}
export default App;
