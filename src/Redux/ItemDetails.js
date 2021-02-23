export function USD() {
  return {
    type: "USD",
  };
}
export function GBP() {
  return {
    type: "GBP",
  };
}
export function EUR() {
  return {
    type: "EUR",
  };
}
export function CAD() {
  return {
    type: "CAD",
  };
}

const initialState = {
  activeValue: '$'
}

function currencyReducer(activeCurrency = initialState.activeValue, action) {
  console.log(activeCurrency);

  switch (action.type) {
    case "USD":
      return (activeCurrency = "$");
    case "EUR":
      return (activeCurrency = "€");
    case "GBP":
      return (activeCurrency = "£");
    case "CAD":
      return (activeCurrency = "CAD$");
    default:
      return activeCurrency;
  }
}

export default currencyReducer;
