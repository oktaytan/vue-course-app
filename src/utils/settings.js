import axios from "axios";

const ax = axios.create({
  baseURL: "http://localhost:8080/codeigniter-api/api"
});

export default ax;

export function capitalize(value) {
  let newValue;
  if (value.split(" ").length > 0) {
    newValue = value
      .split(" ")
      .map(val => {
        return val.charAt(0).toUpperCase() + val.substr(1);
      })
      .join(" ");
  } else {
    newValue = value.charAt(0).toUpperCase() + value.substr(1);
  }

  return newValue;
}