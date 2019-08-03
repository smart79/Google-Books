import React, { Component } from 'react';
import { Table } from 'reactstrap';


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

                <button color="success" size="sm" className="mr-2">Edit</button>

                <button color="danger" size="sm" className="mr-2">Delete</button>

              </td>

            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}
export default App;
