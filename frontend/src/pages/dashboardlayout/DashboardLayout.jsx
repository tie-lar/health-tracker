import { Outlet, Link } from "react-router-dom";
import { Sidenav } from '../../components';

const DashboardLayout = () => {
    return (
      <>
        <div>
            <Sidenav />
            <Outlet />
        </div>
        
      </>
    )
  };
  
  export default DashboardLayout;


