import Button from "./index";

export default {
  title: "Atoms/Button",
  component: Button,
};

export const Default = (): JSX.Element => {
  return <Button color="pink" content="Click me, please" />;
};
