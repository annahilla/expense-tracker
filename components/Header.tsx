import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { checkUser } from "@/lib/checkUser";
import { GiTakeMyMoney } from "react-icons/gi";

const Header = async () => {
  const user = await checkUser();
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <GiTakeMyMoney className="money-icon" />
          <h2>Expense Tracker</h2>
        </div>
        <div className="sign-btn-container">
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </nav>
  );
};

export default Header;
