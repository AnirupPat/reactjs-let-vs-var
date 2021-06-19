import classes from "./Button.module.css";
import setTimeoutVar from '../../../methods/setTimeoutVar';
import setTimeoutLet from '../../../methods/setTimeoutLet';

const Button = (props) => {
    const clickHandler = (event) => {
        if(event.target.innerHTML === 'SetTimeout Var') {
            setTimeoutVar();
        } else if(event.target.innerHTML === 'SetTimeout Let') {
            setTimeoutLet();
        }
    }
  return <button onClick={clickHandler} className={classes.button}>{props.title}</button>;
};

export default Button;
