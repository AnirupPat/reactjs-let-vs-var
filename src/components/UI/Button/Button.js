import classes from "./Button.module.css";
import setTimeoutVar from '../../../methods/setTimeoutVar';
import setTimeoutLet from '../../../methods/setTimeoutLet';
import setTimeoutIIFE from '../../../methods/setTimeoutIIFE';
import setTimeoutIIFEArrow from '../../../methods/setTimeoutIIFEArrow';
import CreateBase from '../../../methods/CreateBase';

const Button = (props) => {
    const clickHandler = (event) => {
        if(event.target.innerHTML === 'SetTimeout Var') {
            setTimeoutVar();
        } else if(event.target.innerHTML === 'SetTimeout Let') {
            setTimeoutLet();
        } else if(event.target.innerHTML === 'SetTimeout IIFE') {
            setTimeoutIIFE();
        } else if(event.target.innerHTML === 'SetTimeout IIFE Arrow') {
            setTimeoutIIFEArrow();
        } else if(event.target.innerHTML === 'Create Base 6') {
            let addSix = CreateBase(6);
            addSix(2);
            addSix(10);
        }
    }
  return <button onClick={clickHandler} className={classes.button}>{props.title}</button>;
};

export default Button;
