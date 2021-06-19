import classes from "./Main.module.css";
import Button from "./UI/Button/Button";

const Main = () => {
  return (
    <div className={classes.main}>
      <Button title="Hi There" />
    </div>
  );
};

export default Main;
