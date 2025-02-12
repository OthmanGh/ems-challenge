import { useLoaderData } from "react-router";
import EmployeeCard from "~/components/employeeCard";
import LinkButton from "~/components/linkButton";
import { getDB } from "~/db/getDB";
import type { EmployeeCardProps } from "~/types";

export async function loader() {
  const db = await getDB();
  const employees = await db.all("SELECT * FROM employees;");
  return { employees };
}

export default function EmployeesPage() {
  const { employees } = useLoaderData();

  return (
    <div className="page_padding">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-black/85 mb-6">Employees</h1>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {employees.map((employee: EmployeeCardProps) => (
            <EmployeeCard key={employee.id} {...employee} />
          ))}
        </div>
      </div>

      <div className="border-t border-gray-200 pt-6">
        <nav className="flex space-x-6 justify-end">
          <LinkButton
            to="/employees/new"
            label="Add New Employee"
            className="bg-blue-500 hover:bg-blue-700"
          />

          <LinkButton
            to="/timesheets/"
            label="View Timesheets"
            variant="outline"
          />
        </nav>
      </div>
    </div>
  );
}
