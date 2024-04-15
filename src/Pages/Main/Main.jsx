import React from 'react'
import "./Main.css"
function Main() {
  return (
    <div class="user_page page_main main-body">
      <h2>Dashboard</h2>
      <div class="promo_card">
        <h1>Welcome to CodePanda Borrowing System</h1>
        <span>The CodePanda Borrowing System is a software application designed to facilitate the borrowing
          and lending of various resources within our school. It provides a streamlined process for
          managing the borrowing requests, tracking the availability of resources, and ensuring efficient
          utilization of assets. </span>
        <button>Learn More</button>
      </div>

      <div class="userRow list1">
        <div class="row">
          <h4 class="users_create">Create History List</h4>
        </div>
        <div class="users_lists">

        </div><div class="userRow">
          <div class="userRow_detail">
          </div></div><div class="userRow">
          <div class="userRow_detail">
          </div></div><div class="userRow">
          <div class="userRow_detail">
          </div></div><table>
          <thead>
            <tr>
              <th>
                <div class="userRow_id">Student ID</div>
              </th>
              <th>
                <div class="userRow_name">Name</div>
              </th>
              <th>
                <div class="userRow_identity">Identity</div>
              </th>
              <th>
                <div>Detail</div>
              </th>
            </tr>


          </thead>

          <tbody>
            <tr>
              <td>
                <div class="userRow_id">1</div>
              </td>
              <td>
                <div class="userRow_name">Elon Musk</div>
              </td>
              <td>
                <div class="userRow_identity">Admin</div>
              </td>
              <td>
                <div class="userRow_button"><a href="#">See all</a></div>
              </td>
            </tr>


          </tbody>

          <tbody>
            <tr>
              <td>
                <div class="userRow_id">2</div>
              </td>
              <td>
                <div class="userRow_name">Tony Strak</div>
              </td>
              <td>
                <div class="userRow_identity">Student</div>
              </td>
              <td>
                <div class="userRow_button"><a href="#">See all</a></div>
              </td>
            </tr>


          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Main