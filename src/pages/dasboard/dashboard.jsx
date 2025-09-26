import { DataTable } from "@/components/dataTable";
import { columns } from "@/utils/dataUser/columsUser";
import { data } from "@/utils/dataUser/dataUser";
import LayoutDashboard from "@/components/layout/layoutDashboard";

export default function Dashboard() {
  return (
    <LayoutDashboard>
      <DataTable columns={columns} data={data} />
    </LayoutDashboard>
  );
}
