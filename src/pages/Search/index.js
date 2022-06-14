import { Search } from "../../components/Search";
import { UsersProvider } from "../../context/UsersContext";
import { FollowersProvider } from "../../context/FollowersInFollowingContext";

export default function SearchUser() {
  return (
    <UsersProvider>
      <FollowersProvider>
        <Search />
      </FollowersProvider>
    </UsersProvider>
  );
}
