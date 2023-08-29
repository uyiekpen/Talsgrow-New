
interface State {
    isSidebarOpen: boolean;
  }
  
  interface Action {
    type: "TOGGLE_SIDEBAR";
  }
  
  const sidebarReducer = (state: State, action: Action): State => {
    if (action.type === "TOGGLE_SIDEBAR") {
      return { ...state, isSidebarOpen: !state.isSidebarOpen };
    }
    throw new Error(`No matching "${action.type}" action type`);
  };
  
  export default sidebarReducer;
  