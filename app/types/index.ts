export interface EmployeeCardProps {
  id: string;
  full_name: string;
  email: string;
  job_title: string;
  department: string;
}

export interface Employee {
  full_name?: string;
  email?: string;
  date_of_birth?: string;
  phone_number?: string;
  job_title?: string;
  department?: string;
  salary?: string;
  start_date?: string;
}

export interface EmployeeFormProps {
  view: "create" | "update";
  employee?: Employee;
}
