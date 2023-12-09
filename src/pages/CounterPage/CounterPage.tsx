import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../toolkitRedux/store";
import { decrement, increment } from "../../toolkitRedux/counterSlice";

const CounterPage = () => {
    const count = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <div>
            <button onClick={() => dispatch(increment())}>Increment</button>
            {count}
            <button onClick={() => dispatch(decrement())}>Decrement</button>
        </div>
    );
};

export default CounterPage;
