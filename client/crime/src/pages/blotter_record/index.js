import React, { useEffect, useContext } from "react";
import Content from "../../components/content/Content";
import { config } from "../../core/configs/";
import { routes } from "../../core/configs/routes"
import { AppContext } from "../../core/utils/Store";


const Index = () => {
  const { app, setApp } = useContext(AppContext);

  useEffect(() => {
    document.title = config.title + " | " + routes[0].name;
    setApp({ ...app, page: routes[0].page });
    localStorage.page = routes[0].page;
  }, []);

  return <Content>blotter</Content>;
};

export default Index;
