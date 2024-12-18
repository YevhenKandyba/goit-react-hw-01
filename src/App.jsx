import Profile from "./components/Profile/Profile";
import userData from "./assets/userData.json";
import "./App.css";
import friends from "./assets/friends.json";
import FriendList from "./components/FriendList/FriendList";

const App = () => {
  return (
    <div>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />

      <FriendList friends={friends} />
    </div>
  );
};

export default App;
