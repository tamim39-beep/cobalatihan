import { useState } from "react";
import { X, Menu, User, Package } from "lucide-react";
import { Link } from "react-router-dom";
import { is } from "zod/v4/locales";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <aside className={`$(isOpen ? "w-64" : "w-16") bg-white shadow-md`}>
      <div className="">
        {isOpen && <div className="">Dashboard</div>}
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>
      <div className="flex flex-col gap-2">
        <Link to="/dashboard/user">
          {isOpen && <span>User</span>}
          <User />
        </Link>
        <Link to="/dashboard/Product">
          {isOpen && <span>Product</span>}
          <Package />
        </Link>
      </div>
    </aside>
  );
}
