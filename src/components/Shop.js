import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux';
import { actionCreators } from '../State/index'

function Shop() {
    const dispatch = useDispatch();
    const balance = useSelector(state => state.amount);
    const { withdrawMoney, depositMoney } = bindActionCreators(actionCreators, dispatch)

    return (
        <div>
            <h2>Deposit or Withdraw Money</h2>
            <button onClick={() => withdrawMoney(100)} className='btn btn-primary mx-2 px-3'>-</button>
            Update Balance {balance}$
            <button onClick={() => depositMoney(100)} className='btn btn-primary mx-2 px-3'>+</button>
        </div>
    )
}

export default Shop