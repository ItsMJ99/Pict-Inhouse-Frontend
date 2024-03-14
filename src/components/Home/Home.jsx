import React, { useEffect } from "react";
import * as FaIcons from "react-icons/fa";
import "./Home.css";
import Carts from "../Navbar/Carts";

const Committiees = [
  {id: "1",name:"Elevate",members:50,head:"Mr. XYZ",status:"Completed"},
  {id: "2",name:"Coding Chapter",members:30,head:"Mr. S. S. Pande",status:"Completed"},
  {id: "3",name:"PDA",members:45,head:"Mr. S. S. Pande",status:"Completed"},
  {id: "4",name:"IEEE",members:67,head:"Mr. ABC",status:"Incomplete"}, 
  {id: "5",name:"INC",members:30,head:"Mr. S. S. Deshmukh",status:"Completed"},
  {id: "6",name:"PCSB",members:70,head:"Mrs. B.P",status:"Completed"},
  {id: "7",name:"Pictoreal",members:56,head:"Mrs. A.B.J",status:"Incomplete"},
];

function Dashboard() {
  return (
    <>
      {useEffect(()=>{
          document.title = "Home"
      })}
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
          <h3 className="main--title">Committees</h3>
          <div className="table--container">
            <table>
              <thead>
                <tr>
                  <th>Committee Name</th>
                  <th>Total Members</th>
                  <th>Head of Committee</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {Committiees.map(com=>(
                  <tr>
                  <td>{com.name}</td>
                  <td>{com.members}</td>
                  <td>{com.head}</td>
                  <td>{com.status}</td>
                  <td>
                    <button>Edit</button>
                  </td>
                </tr>
                ))}
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
