import { Link } from "react-router-dom";
import useAdminDashboard from "src/Store/useAdminDashboardStore";

export default function Sidebar() {
  const { isAdminDashboard, setAdminDashboard } = useAdminDashboard();

  return (
    <div className="w-1/5 h-full bg-[#135c1b] fixed left-0 z-20 flex flex-col items-center pt-10 gap-8 text-white font-bold text-xl">
      <p className="text-3xl">ADMINISTRATOR</p>
      <div className="size-40 ml-8">
        <img src="Admin.png" alt="" className="size-full" />
      </div>
      <div className="flex flex-col items-center mt-6 gap-10">
        <Link to={"/ViewUsers"}>
          <span>View Users</span>
        </Link>
        <Link to={"/ViewProduct"}>
          <span>View Product</span>
        </Link>
        <Link to={"/AddProduct"}>
          <span>Add Product</span>
        </Link>
        <Link to={"/EditProduct"}>
          <span>Edit Product</span>
        </Link>
        <Link to={"/SignIn"} onClick={() => setAdminDashboard(false)}>
          <span>Sign Out</span>
        </Link>
      </div>
    </div>
  );
}
