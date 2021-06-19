import classes from "./Main.module.css";
import Button from "./UI/Button/Button";

const Main = () => {
  return (
    <div className={classes.main}>
      <Button title="SetTimeout Var" />
      <Button title="SetTimeout Let" />
      <Button title="SetTimeout IIFE" />
      <Button title="SetTimeout IIFE Arrow" />
      <Button title="Create Base 6" />
    </div>
  );
};

export default Main;
