import { NextPage } from "next";
import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";

const Home: NextPage = () => {
  return <SwaggerUI url="/swagger.json">hi</SwaggerUI>;
};
export default Home;

