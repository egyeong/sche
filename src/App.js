import React, { Component } from 'react';
import './App.css';
import Calendar from "./components/Calendar.js";
import Navbar from "./components/Navbar"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import GoOut from './components/GoOut.js';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import Searching from './components/Searching.js'


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Switch>

            <Route path="/" exact>
              <br></br>
              <h1>일정이 무호야</h1>
              <Calendar />
            </Route>

            <Route path="/goout">
              <h1>go out</h1>
                <Table>
                  <TableHead>
                    <TableCell>타이틀</TableCell>
                    <TableCell>스타트</TableCell>
                    <TableCell>엔드</TableCell>
                    <TableCell>설명</TableCell>
                  </TableHead>
                  <TableBody>
                    <GoOut />
                  </TableBody>
                </Table>
            </Route>

            <Route path="/searching">
              <h1>searching</h1>
              <Searching />
            </Route>

          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;