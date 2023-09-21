import UserHomePage from "../components/usercomponents/userhome";
import TourPackages from "../components/usercomponents/tour_packages";
import TrendingPackages from "../components/usercomponents/trending_tours";


function Userdashboard() {
  return (
    <div className="App">
      <UserHomePage />
      <TourPackages />
      <TrendingPackages />
    </div>  
  );
}

export default Userdashboard;