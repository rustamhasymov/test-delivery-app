import { useContext, useReducer, createContext, useEffect, useMemo } from "react";
const initialState = {
  data: {
    customers: [],
    packages: [],
    invoices: [],
  },
  loader: true,
};
const Context = createContext();
export const useData = () => useContext(Context);

const DataProvider = ({ children }) => {
  const [data, dispatch] = useReducer(reducer, initialState);
  const memoValue = useMemo(() => [data, dispatch], [data]);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => {
        const invoicesData = data.customers
          .map((customer) => {
            const pckgs = data.packages.filter((pckg) => pckg.customerid === customer.id);
            if (pckgs.length === 0) {
              return null;
            }
            const invoice = pckgs.reduce(
              (invoiceData, pckg, index) => {
                return {
                  ...invoiceData,
                  totalPrice: invoiceData.totalPrice + parseInt(pckg.price),
                  totalWeight: invoiceData.totalWeight + parseInt(pckg.weight),
                  createdAt: new Date().toDateString(),
                  invoiceNumber: Date.now(),
                  index: index + 1,
                };
              },
              {
                id: customer.id,
                totalPrice: 0,
                totalWeight: 0,
                name: customer.name,
              }
            );
            return invoice;
          })
          .filter(Boolean);
        dispatch({ type: "INITIAL", payload: data });
        dispatch({ type: "ADD_INVOICES", payload: invoicesData });
        dispatch({ type: "SET_LOAD", payload: false });
      });
  }, []);
  function reducer(state, { type, payload }) {
    switch (type) {
      case "INITIAL": {
        return { ...state, data: payload };
      }
      case "SET_LOAD": {
        return { ...state, loader: payload };
      }
      case "ADD_PACKAGE": {
        return { ...state, data: { ...state.data, packages: [...state.data.packages, payload] } };
      }
      case "ADD_INVOICES": {
        return { ...state, data: { ...state.data, invoices: payload } };
      }
      case "DELETE_PACKAGE": {
        return {
          ...state,
          data: {
            ...state.data,
            packages: state.data.packages.filter((pckg) => pckg.id !== payload),
          },
        };
      }
      case "DELETE_CUSTOMER": {
        return {
          ...state,
          data: {
            ...state.data,
            customers: state.data.customers.filter((customer) => customer.id !== payload),
          },
        };
      }
      case "INCREMENT_ORDER_NUMBER": {
        const currentPackageIdx = state.data.packages.findIndex((pckg) => pckg.id === payload);
        const currentPckg = { ...state.data.packages[currentPackageIdx] };
        const switchedPckgIdx = state.data.packages.findIndex(
          (pckg) => pckg.shippingOrder === currentPckg.shippingOrder + 1
        );
        if (switchedPckgIdx !== -1) {
          const switchedPckg = { ...state.data.packages[switchedPckgIdx] };
          currentPckg.shippingOrder++;
          switchedPckg.shippingOrder--;
          const newPackages = [...state.data.packages];
          newPackages.splice(currentPackageIdx, 1, currentPckg);
          newPackages.splice(switchedPckgIdx, 1, switchedPckg);
          return {
            ...state,
            data: { ...state.data, packages: newPackages },
          };
        }
        return state;
      }
      case "DECREMENT_ORDER_NUMBER": {
        const currentPackageIdx = state.data.packages.findIndex((pckg) => pckg.id === payload);
        const currentPckg = { ...state.data.packages[currentPackageIdx] };
        const switchedPckgIdx = state.data.packages.findIndex(
          (pckg) => pckg.shippingOrder === currentPckg.shippingOrder - 1
        );
        if (switchedPckgIdx !== -1) {
          const switchedPckg = { ...state.data.packages[switchedPckgIdx] };
          currentPckg.shippingOrder--;
          switchedPckg.shippingOrder++;
          const newPackages = [...state.data.packages];
          newPackages.splice(currentPackageIdx, 1, currentPckg);
          newPackages.splice(switchedPckgIdx, 1, switchedPckg);
          return {
            ...state,
            data: { ...state.data, packages: newPackages },
          };
        }
        return state;
      }
      default:
        throw new Error("Wrong action type!");
    }
  }
  return <Context.Provider value={memoValue}>{children}</Context.Provider>;
};
export default DataProvider;
