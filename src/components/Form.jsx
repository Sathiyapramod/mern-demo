import React, { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    city: "",
    foodMenu: "",
  });

  const [menuItem, setMenuItems] = useState([]);

  const [userList, setUserList] = useState([]);

  //
  const handleSubmit = (ev) => {
    ev.preventDefault();
    console.log({ ...formData, foodMenu: menuItem });
    setUserList((prev) => [...prev, formData]);
    setFormData({
      username: "",
      email: "",
      phone: "",
      city: "",
      foodMenu: "",
    });
  };

  //   const handleChange = (event, keyName) => {
  //     setFormData((prev) => {
  //       return { ...prev, [keyName]: event.target.value };
  //     });
  //   };

  // menu options event handler
  const handleMenuItems = (event) => {
    const { value } = event.target;
    setMenuItems((prev) => [...prev, value]);
  };

  const handleChange = (event) => {
    // console.log(event.target.name, event.target.value);
    const { name, value } = event.target;
    setFormData((prev) => {
      return { ...prev, [name]: value, foodMenu: menuItem };
    });
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        {/* username */}
        <div>
          <label htmlFor="username">Name of the student</label>
          <input
            type="text"
            placeholder="name"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        {/* email id */}
        <div>
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            placeholder="email address"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        {/* phone */}
        <div>
          <label htmlFor="phone">Phone Number</label>
          <input
            type="text"
            placeholder="phone number"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        {/* city */}
        <div>
          <label htmlFor="city">City Name</label>
          <input
            type="text"
            placeholder="Enter City Name"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
          />
        </div>
        {/* food options */}
        <div>
          {/* breakfast */}
          <div>
            <input
              type="checkbox"
              id="breakfast"
              name="foodMenu"
              value="breakfast"
              onChange={handleMenuItems}
            />
            <label htmlFor="">Breakfast</label>
          </div>
          {/* lunch */}
          <div>
            <input
              type="checkbox"
              id="lunch"
              name="foodMenu"
              value="lunch"
              onChange={handleMenuItems}
            />
            <label htmlFor="">Lunch</label>
          </div>
          {/* dinner */}
          <div>
            <input
              type="checkbox"
              id="dinner"
              name="foodMenu"
              value="dinner"
              onChange={handleMenuItems}
            />
            <label htmlFor="">Dinner</label>
          </div>
        </div>
        <button>Submit</button>
      </form>
      <br />
      <table>
        <thead>
          <tr>
            <th>name</th>
            <th>email</th>
            <th>phone</th>
            <th>city</th>
          </tr>
        </thead>
        <tbody>
          {userList.map((user, index) => {
            return (
              <tr key={index}>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.city}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
}

export default Form;
