import React, { useState, useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isSiderbarOpen, setIsSiderbarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openSidebar = () => {
    setIsSiderbarOpen(true);
  };

  const closeSidebar = () => {
    setIsSiderbarOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <AppContext.Provider
      value={{
        isModalOpen,
        isSiderbarOpen,
        closeModal,
        closeSidebar,
        openModal,
        openSidebar,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

//custom hook
export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider };
