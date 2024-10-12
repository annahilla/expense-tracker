import { SignInButton } from "@clerk/nextjs";

const Guest = () => {
  return (
    <div className="guest">
      <h1>Welcome to your trusted Expense Tracker</h1>
      <p>Please sign in with the button below to manage your transactions</p>
      <SignInButton />
    </div>
  );
};

export default Guest;
