import {useSelector, useDispatch} from 'react-redux';
import { increment, decrement, reset, incrementByAmount, setPayloadValue } from '../features/counterSlice';

export default function Counter() {
    const count = useSelector((state) => state.counter.value);
    const payloadValue = useSelector(state => state.counter.payloadValue);
    const dispatch = useDispatch();

    return (
        <div className='container text-center'>
            <h1 className='my-3'>Let's Count!</h1>
            <div>
                <button className='btn btn-success m-3' onClick={() => dispatch(decrement())}>-</button>
                <span>{count}</span>
                <button className='btn btn-success m-3' onClick={() => dispatch(increment())}>+</button>
            </div>
            <div>
                <button className='btn btn-warning  mb-3' onClick={() => dispatch(reset())}>Reset</button>
            </div>
            <div className='input-group'>
                <input type="text" className="form-control"  value={payloadValue} onChange={e => dispatch(setPayloadValue(e.target.value))}/>
                <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={() => dispatch(incrementByAmount(Number(payloadValue)))}>Increase By Ammount</button>
            </div>
        </div>
    )
}