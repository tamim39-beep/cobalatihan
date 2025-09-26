import Sidebar from "../sidebar";

export default function LayoutDashboard({ children }) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className=""> {children}</div>
    </div>
  );
}
