export function USD(value) {
  return {
    type: "USD",
    payload: value,
  };
}
export function GBP(value) {
  return {
    type: "GBP",
    payload: value,
  };
}
export function EUR(value) {
  return {
    type: "EUR",
    payload: value,
  };
}
export function changeCurrency(value) {
  return {
    type: value,
    payload: value,
  };
}

const initialState = {
  defaultValue: {
    currencyName: "USD",
    currencyRate: 1,
    currencySymbol: "€",
  },
};

function currencyReducer(activeCurrency = initialState, action) {
  switch (action.type) {
    case "USD":
      return {
        ...activeCurrency,
        defaultValue: {
          currencyName: "USD",
          currencyRate: 1,
          currencySymbol: "$",
        },
      };
    case "EUR":
      return {
        ...activeCurrency,
        defaultValue: {
          currencyName: "EUR",
          currencyRate: 10,
          currencySymbol: "€",
        },
      };
    case "GBP":
      return {
        ...activeCurrency,
        defaultValue: {
          currencyName: "GBP",
          currencyRate: 5,
          currencySymbol: "£",
        },
      };
    case "CAD":
      return {
        ...activeCurrency,
        defaultValue: {
          currencyName: "CAD",
          currencyRate: 2.5,
          currencySymbol: "CAD$",
        }
      };
    default:
      return activeCurrency;
  }
}

export default currencyReducer;
