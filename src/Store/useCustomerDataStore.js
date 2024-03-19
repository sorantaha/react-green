import { create } from "zustand";

export const useCustomerDataStore = create((set) => ({
    isCustomerData: {id:'', username:'', phone:'', email:'', photo:'', password:''},
    setCustomerData: (state) => set(({ isCustomerData: state})),
}));

export default useCustomerDataStore;
