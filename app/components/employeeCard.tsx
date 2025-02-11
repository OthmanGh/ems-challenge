import { Link } from "react-router";
import { Mail, Briefcase, Users, MoveRight } from "lucide-react";

interface EmployeeProps {
  id: string;
  full_name: string;
  email: string;
  job_title: string;
  department: string;
}

const EmployeeCard = ({
  id,
  full_name,
  email,
  job_title,
  department,
}: EmployeeProps) => {
  return (
    <div className="flex flex-col gap-2 w-full max-w-md rounded-lg border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow duration-300 px-4 py-6">
      <div className="space-y-4">
        <div className="flex flex-col items-start gap-1">
          <h3 className="text-[22px] font-semibold text-[#444]">{full_name}</h3>
          <span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-[13px] font-medium text-gray-800">
            {department}
          </span>
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-2 text-gray-600 text-[13px]">
            <Mail className="h-4 w-4" />
            <a
              href={`mailto:${email}`}
              className="text-blue-600 hover:text-blue-800 hover:underline transition"
            >
              {email}
            </a>
          </div>

          <div className="flex items-center gap-2 text-gray-600 text-sm">
            <Briefcase className="h-4 w-4" />
            <span>{job_title}</span>
          </div>

          <div className="flex items-center gap-2 text-gray-600 text-sm">
            <Users className="h-4 w-4" />
            <span>{department}</span>
          </div>
        </div>
      </div>

      <Link
        to={`/employees/${id}`}
        className="text-blue-500 hover:text-blue-800 font-medium flex items-center justify-center gap-2 self-end transition"
      >
        <span className="text-[12px]">View Details</span>
        <MoveRight size={12} />
      </Link>
    </div>
  );
};

export default EmployeeCard;
