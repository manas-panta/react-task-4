import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    const url = 'https://dummyjson.com/users';
    const tableElem = document.querySelector('table');

    const getUsers = async () => {
      try {
        let response = await fetch(url);
        return await response.json();
      } catch (error) {
        console.log(error);
      }
    };

    const renderUsers = async () => {
      let users = (await getUsers()).users;
      let tableElem = document.querySelector('table');
      let html = tableElem.innerHTML;
      users.forEach((user) => {
        let htmlSegment = `
        <tr>
          <td style='text-align:center;'>${user.id}</td>
          <td style='text-align:center;'><img src='${user.image}' height='45px'/></td>
          <td>${user.firstName}</td>
          <td>${user.lastName}</td>
          <td>${user.gender}</td>
          <td>${user.email}</td>
          <td>${user.username}</td>
          <td>${user.domain}</td>
          <td>${user.ip}</td>
          <td>${user.university}</td>
        </tr>
        `;
        html += htmlSegment;
      });

      tableElem.innerHTML = html;
    };

    renderUsers();
  }, []);

  return (
    <div className="App">
      <div className="App-header">
        <h1>Dummy Data</h1>
        <div className="table-responsive">
          <table className="table table-bordered table-striped w-100">
            <thead>
              <tr>
                <th>Sno</th>
                <th>Profile Pic</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Gender</th>
                <th>E-mail</th>
                <th>Username</th>
                <th>Domain</th>
                <th>IP</th>
                <th>University</th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;