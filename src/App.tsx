import React, { FormEvent, useEffect, useMemo, useState } from "react";
import { format } from "date-fns";
import "./App.css";
import { iterateDaysOfMonth } from "./utils/iterateDaysOfMonth";
import { billFor } from "./utils/billFor";
import { constantUsers, newPlan, userSignedUp } from "./data";
import { IUser } from "./interfaces/IUser";
import { UsersList } from "./components/UsersList";

function App() {
  const [month, setMonth] = useState("2022-08");
  const [name, setName] = useState("");
  const [activatedOn, setActivatedOn] = useState(Date.now().toLocaleString());
  const [deactivatedOn, setDeactivatedOn] = useState("");
  const [currentlyActive, setCurrentlyActive] = useState<boolean>(true);
  const [rate, setRate] = useState(10);
  const [users, setUsers] = useState<IUser[]>(constantUsers);

  const handleCreateUser = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const currentUsers = [...users];
    const newUser: IUser = {
      id: 0,
      name,
      activatedOn: new Date(activatedOn),
      deactivatedOn: deactivatedOn ? new Date(deactivatedOn) : null,
      customerId: 0,
    };
    setUsers([...currentUsers, newUser]);
  };

  const bill = useMemo(() => billFor(month, rate, users), [month, rate, users]);

  return (
    <div className="App">
      <div className="form-container">
        <p className="largeText">Invoice Calculator</p>
        <div className="form-inner">
          <div className="month-selector">
            <p className="label">Calculate Invoice for: </p>

            <input
              className="input"
              onChange={(e) => setMonth(e.currentTarget.value)}
              type="month"
              name="month"
              min="2015-01"
              value={month}
            />

            <div className="input-container">
              <p className="label">Rate</p>
              <input
                className="input"
                type="number"
                value={rate}
                onChange={(e) => setRate(parseInt(e.target.value))}
              />
            </div>
          </div>
          <form
            onSubmit={(e) => handleCreateUser(e)}
            className="createUser-form"
          >
            <p className="label">Name</p>
            <input
              className="input"
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <div className="input-container">
              <p className="label">Activated On</p>
              <input
                className="input"
                onChange={(e) => setActivatedOn(e.target.value)}
                type="date"
                name="date"
                min="2015-01"
                value={activatedOn}
              />
            </div>
            <div>
              <p className="label">Deactivated On</p>

              <input
                className="input"
                onChange={(e) => setDeactivatedOn(e.currentTarget.value)}
                type="date"
                name="deactivatedOn"
                min="2015-01"
                value={deactivatedOn}
                disabled={currentlyActive}
              />

              <div className="checkbox-container">
                <p style={{ display: "inline-flex", marginRight: "1rem" }}>
                  This user is currently active
                </p>
                <input
                  onChange={() => setCurrentlyActive(!currentlyActive)}
                  checked={currentlyActive}
                  type="checkbox"
                />
              </div>
            </div>
            <input type="submit" value="Create User" />
          </form>
        </div>
        <UsersList users={users} />
        <p className="largeText">
          <span style={{ fontWeight: "bold" }}>Invoice total:</span>{" "}
          {bill && `$${bill}`}
        </p>
      </div>
    </div>
  );
}

export default App;
