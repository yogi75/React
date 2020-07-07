import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const AddTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);
    const { addTransaction } = useContext(GlobalContext);
    const onSubmit = e => {
        e.preventDefault();
        console.log("amount", amount);
        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            text: text,
            amount: +amount // Plus sign for changing its type to number
        }
        addTransaction(newTransaction);
    }
    return (
        <div>
            <h3>Add New Transaction</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter Text..." />
                </div>
                <div className="form-control">
                    <label htmlFor="amount">Amount <br /> (negative - expense, positive - income)</label>
                    <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter Amount..." />
                </div>
                <button className="btn">Add Transaction</button>
            </form>
        </div>
    )
}