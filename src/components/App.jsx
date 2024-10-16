import userData from "../userData.json";
import friendList from "../friendList.json";
import transactions from "../transactions.json";
import Profile from "./Profile/Profile";
import FriendList from "./FriendList/FriendList";
import TransactionHistory from "./TransactionHistory/TransactionHistory";
import "./App.css";
export default function App() {
  return (
    <>
      <div>
        <Profile
          name={userData.username}
          tag={userData.tag}
          location={userData.location}
          image={userData.avatar}
          stats={userData.stats}
        />
      </div>
      <div>
        <FriendList friends={friendList} />
      </div>
      <div>
        <TransactionHistory items={transactions} />
      </div>
    </>
  );
}
