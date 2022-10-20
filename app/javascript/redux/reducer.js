const GET_GREETING = "/greeting/GET_GREETING";
export const getGreeting = (data) => ({
  type: GET_GREETING,
  data,
});
const greetingReducer = (state = [], action) => {
  switch (action.type) {
    case GET_GREETING:
      return action.data;
    default:
      return state;
  }
};

export default greetingReducer;