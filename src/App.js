import { useEffect, useState } from "react";
import { usersApi } from "./api/services";
import { UsersTable } from "./components/UsersTable";
import "./App.css";

function App() {
  const [data, setData] = useState([]);

  function createData(email, firstName, lastName, usedMoney) {
    return {
      email,
      firstName,
      lastName,
      usedMoney: parseUsedMoney(usedMoney),
    };
  }

  function parseUsedMoney(usedMoney) {
    function getPoints(amount) {
      if (amount <= 50) {
        return 0;
      } else if (amount > 50 && amount <= 100) {
        return amount - 50;
      } else return (amount - 100) * 2 + 50;
    }

    return usedMoney.map((el) => {
      return {
        ...el,
        points: getPoints(el.amount),
        total: usedMoney.reduce((ac, el) => getPoints(el.amount) + ac, 0),
      };
    });
  }

  const rows = data.map((el) =>
    createData(el.email, el.firstName, el.lastName, el.usedMoney)
  );

  useEffect(() => {
    async function getUsers() {
      const users = await usersApi();

      setData(users);
    }
    getUsers();
  }, []);

  return (
    <div className='App'>
      <UsersTable rows={rows} />
    </div>
  );
}

export default App;
