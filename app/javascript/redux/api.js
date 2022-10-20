import { getGreeting } from "./reducer";
export const fetchGreeting = () => (dispatch) => {
    fetch("http://127.0.0.1:3000/api/v1/greetings")
      .then((response) => response.json())
      .then((json) => dispatch(getGreeting(json)));
  };