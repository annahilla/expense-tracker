"use client";
import { useRef } from "react";
import addTransaction from "@/app/actions/addTransaction";
import { toast } from "react-toastify";

const AddTransaction = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const clientAction = async (formData: FormData) => {
    const { data, error } = await addTransaction(formData);

    if (error) {
      toast.error(error);
    } else {
      toast.success("Transaction added successfully");
      formRef.current?.reset();
    }
  };
  return (
    <div className="add-transaction">
      <h3>Add Transaction</h3>
      <form ref={formRef} action={clientAction}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" id="text" name="text" placeholder="Enter text" />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount (negative is an expense and positive is an income)
          </label>
          <input
            type="number"
            name="amount"
            id="amount"
            placeholder="Enter amount"
            step="0.01"
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </div>
  );
};

export default AddTransaction;
