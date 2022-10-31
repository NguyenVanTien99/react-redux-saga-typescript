import React from "react";

type MainHeaderProps = {
  title: string;
};

const MainHeader = ({ title }: MainHeaderProps): JSX.Element => {
  return <h1>{title}</h1>;
};

export default MainHeader;
