import Account from "../../components/account/Account";
import RightBar from "../../components/rightbar/RightBar";
import SideBar from "../../components/sidebar/SideBar";

const Profile = () => {
  return (
    <div className="home-wrapper">
      <SideBar />
      <Account />
      <RightBar />
    </div>
  );
};
export default Profile;
