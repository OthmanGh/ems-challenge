import {
  Mail,
  Phone,
  Calendar,
  Building2,
  DollarSign,
  Clock,
} from "lucide-react";
import { useLoaderData, useNavigate } from "react-router";
import BackButton from "~/components/backButton";
import Button from "~/components/button";
import LinkButton from "~/components/linkButton";
import { getDB } from "~/db/getDB";
import DetailItem from "~/components/detailItem";

export async function loader({ params }: { params: { employeeId: string } }) {
  const db = await getDB();
  const employee = await db.get(
    "SELECT * FROM employees WHERE id =  ?",
    params.employeeId
  );

  if (!employee) throw new Response("Employee not found", { status: 404 });

  return { employee };
}

export default function EmployeePage() {
  const { employee } = useLoaderData();
  const navigate = useNavigate();

  return (
    <div className="flex flex-col page_padding bg-gray-100 min-h-screen">
      <BackButton label="Back to Employees" />

      <div className="flex flex-col sm:gap-10 gap-4 w-full mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="flex items-center gap-4 bg-blue-500 p-6">
          <div className="w-16 h-16 bg-blue-200 rounded-full flex items-center justify-center text-blue-600 font-bold text-xl">
            {employee.full_name
              .split(" ")
              .map((n: string) => n[0])
              .join("")
              .toUpperCase()}
          </div>

          <div className="flex flex-col">
            <p className="text-2xl font-semibold text-white">
              {employee.full_name}
            </p>
            <p className="text-blue-200 text-sm">{employee.job_title}</p>
          </div>
        </div>

        <div className="p-6 grid gap-4 sm:gap-0 grid-cols-1 md:grid-cols-2">
          <div className="space-y-4">
            <DetailItem icon={Mail} label="Email" value={employee.email} />

            <DetailItem
              icon={Phone}
              label="Phone"
              value={employee.phone_number}
            />
            <DetailItem
              icon={Calendar}
              label="Date of Birth"
              value={employee.date_of_birth}
            />
          </div>

          <div className="space-y-4">
            <DetailItem
              icon={Building2}
              label="Department"
              value={employee.department}
            />
            <DetailItem
              icon={DollarSign}
              label="Salary"
              value={`$${employee.salary}`}
            />
            <DetailItem
              icon={Clock}
              label="Employment Status"
              value={employee.end_date ? "Former Employee" : "Active Employee"}
              subValue={employee.end_date ? `Until ${employee.end_date}` : ""}
            />
          </div>
        </div>

        <div className="flex flex-col p-6 gap-3 w-full sm:flex-row sm:items-center justify-end">
          <Button
            label="Edit Employee"
            onClick={() => {
              navigate("/employee/");
            }}
            variant="primary"
          />

          <LinkButton
            label="New Employee"
            to="/employees/new"
            variant="solid"
          />

          <LinkButton label="Timesheets" to="/timesheets/" variant="outline" />
        </div>
      </div>
    </div>
  );
}
