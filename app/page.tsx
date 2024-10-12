import Guest from "@/components/Guest";
import { currentUser } from "@clerk/nextjs/server";
import AddTransaction from "@/components/AddTransaction";
import Balance from "@/components/Balance";
import IncomeExpense from "@/components/IncomeExpense";
import TransactionList from "@/components/TransactionList";

const HomePage = async () => {
  const user = await currentUser();

  if (!user) {
    return <Guest />;
  }

  return (
    <main className="tracker">
      <h2>Welcome, {user.firstName}</h2>
      <Balance />
      <IncomeExpense />
      <div className="transactions">
        <AddTransaction />
        <TransactionList />
      </div>
    </main>
  );
};

export default HomePage;
