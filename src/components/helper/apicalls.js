//All the "talking with backend" happen here

//Importing const URL from backend file
import { API } from "../../backend";

export const getalllogs = () => {
  return fetch(`${API}getalllogs`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      return res.json();
    })
    .catch((err) => console.log(err));
};

export const getalldata = () => {
    return fetch(`${API}getalldata`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .catch((err) => console.log(err));
  };

export const addadata = (data) => {
  return fetch(`${API}addadata`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => {
      return res.json();
    })
    .catch((err) => console.log(err));
};

export const editadata = (data) => {
    return fetch(`${API}editadata/${data.valId}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        return res.json();
      })
      .catch((err) => console.log(err));
  };
