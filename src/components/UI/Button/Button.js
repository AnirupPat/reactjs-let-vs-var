import classes from "./Button.module.css";
import setTimeoutVar from '../../../methods/setTimeoutVar';
import setTimeoutLet from '../../../methods/setTimeoutLet';
import setTimeoutIIFE from '../../../methods/setTimeoutIIFE';
import setTimeoutIIFEArrow from '../../../methods/setTimeoutIIFEArrow';
import CreateBase from '../../../methods/CreateBase';
import ClosureInPvtCounter from '../../../methods/ClosureInPvtCounter';
import Debouncing from '../../../methods/Debouncing';
import ClosureWithVar from '../../../methods/ClosureWithVar';
import NormalFunctionDecHoisting from '../../../methods/NormalFunctionDecHoisting';

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
        } else if(event.target.innerHTML === 'ClosureInPvtCounter') {
            let c = ClosureInPvtCounter();
            c.add(5);
            c.add(10);
            c.fetch();
        } else if(event.target.innerHTML === 'Debouncing') {
            const print = () => console.log('Scrolling !!');
            Debouncing(print, 1000);
        } else if(event.target.innerHTML === 'ClosureWithVar') {
            let sum = ClosureWithVar();
            sum(5);
            sum(5);sum(10);
        } else if(event.target.innerHTML === 'NormalFunctionDecHoisting') {
            NormalFunctionDecHoisting();
        }
    }
  return <button onClick={clickHandler} className={classes.button}>{props.title}</button>;
};

export default Button;
