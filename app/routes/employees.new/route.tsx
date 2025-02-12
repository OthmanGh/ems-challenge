import { redirect, type ActionFunction } from "react-router";
import BackButton from "~/components/backButton";
import EmployeeForm from "~/components/employeeForm";
import LinkButton from "~/components/linkButton";
import { getDB } from "~/db/getDB";

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const full_name = formData.get("full_name");

  const db = await getDB();
  await db.run("INSERT INTO employees (full_name) VALUES (?)", [full_name]);

  return redirect("/employees");
};

export default function NewEmployeePage() {
  return (
    <div className="flex flex-col gap-4 page_padding">
      <BackButton label="Go Back" />
      <EmployeeForm view="create" />
    </div>
  );
}
