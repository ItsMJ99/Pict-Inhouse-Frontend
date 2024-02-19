import React from "react";
import * as FaIcons from "react-icons/fa";
import "./Home.css";
import Carts from "../components/Navbar/Carts";

function Dashboard() {
  return (
    <>
      <div className="main--content">
        <div className="header--wrapper">
          <div className="header--title">
            <span>Hello</span>
            <h2>User Name</h2>
          </div>
          <div className="user--info">
            <div className="search--box">
              <i className="fasolid fa-search">
                <FaIcons.FaSearch className="ticon" />
              </i>
              <input type="text" placeholder="Search" className="tarea"></input>
            </div>
            <div className="image--self">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv_hGYmCwCT-x-LSRZ-KASb2ZeM-xP4TpZfw&usqp=CAU" />
            </div>
          </div>
        </div>

        <div className="card--container">
          <h3 className="main-title">Today's Date</h3>
          <div className="card--wrapper">
            <div className="visiting--card light-blue">
              <div className="card--header">
                <div className="total-numbers">
                  <Carts
                    title="Committee Active"
                    number={30}
                    description="3 are inactive"
                  ></Carts>
                </div>
              </div>
            </div>

            <div className="visiting--card light-green">
              <div className="card--header">
                <div className="total-numbers">
                  <Carts
                    title="Total Visitors"
                    number={100}
                    description="updated 3 min ago"
                  ></Carts>
                </div>
              </div>
            </div>

            <div className="visiting--card light-red">
              <div className="card--header">
                <div className="total-numbers">
                  <Carts
                    title="Committee Active"
                    number={30}
                    description="3 are inactive"
                  ></Carts>
                </div>
              </div>
            </div>

            <div className="visiting--card light-purple">
              <div className="card--header">
                <div className="total-numbers">
                  <Carts
                    title="Committee Active"
                    number={30}
                    description="3 are inactive"
                  ></Carts>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="tabular--wrapper">
          <h3 className="main--title">Commietties</h3>
          <div className="table--container">
            <table>
              <thead>
                <tr>
                  <th>Committe Name</th>
                  <th>Total Members</th>
                  <th>Head of Committe</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>PDA</td>
                  <td>30</td>
                  <td>Mr. S. S. Pande</td>
                  <td>Pending</td>
                  <td>
                    <button>Edit</button>
                  </td>
                </tr>
                <tr>
                  <td>PDA</td>
                  <td>30</td>
                  <td>Mr. S. S. Pande</td>
                  <td>Pending</td>
                  <td>
                    <button>Edit</button>
                  </td>
                </tr>
                <tr>
                  <td>PDA</td>
                  <td>30</td>
                  <td>Mr. S. S. Pande</td>
                  <td>Completed</td>
                  <td>
                    <button>Edit</button>
                  </td>
                </tr>
                <tr>
                  <td>PDA</td>
                  <td>30</td>
                  <td>Mr. S. S. Pande</td>
                  <td>Completed</td>
                  <td>
                    <button>Edit</button>
                  </td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan={6}>Have A Great Day</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
