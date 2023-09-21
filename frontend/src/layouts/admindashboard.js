import AdminHomePage from "../components/admin_components/adminhome";
import ManageTourPackages from "../components/admin_components/adminmanage";


function Admindashboard() {
  return (
    <div className="App">
      <AdminHomePage />
      <ManageTourPackages />
    </div>  
  );
}

export default Admindashboard;