import classes from "./Button.module.css";
import setTimeoutVar from '../../../methods/setTimeoutVar';

const Button = (props) => {
    const clickHandler = (event) => {
        if(props.title === event.target.innerHTML) {
            setTimeoutVar();
        }
    }
  return <button onClick={clickHandler} className={classes.button}>{props.title}</button>;
};

export default Button;
