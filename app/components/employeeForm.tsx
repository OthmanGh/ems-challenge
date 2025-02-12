import React, { useState } from "react";
import type { Employee, EmployeeFormProps } from "~/types";
import Label from "./label";
import Input from "./input";
import Button from "./button";
import LinkButton from "./linkButton";

export default function EmployeeForm({
  employee = {},
  view,
}: EmployeeFormProps) {
  const [formData, setFormData] = useState<Employee>(employee);
  const [errors, setErrors] = useState<{ [key in keyof Employee]?: string }>(
    {}
  );

  const validate = () => {
    let newErrors: { [key in keyof Employee]?: string } = {};
    if (!formData.full_name) newErrors.full_name = "Full Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Invalid email format";
    if (!formData.date_of_birth)
      newErrors.date_of_birth = "Date of Birth is required";
    if (!formData.phone_number)
      newErrors.phone_number = "Phone Number is required";
    if (!formData.job_title) newErrors.job_title = "Job Title is required";
    if (!formData.department) newErrors.department = "Department is required";
    if (!formData.salary) newErrors.salary = "Salary is required";
    if (!formData.start_date) newErrors.start_date = "Start Date is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validate()) {
      console.log("Form submitted successfully", formData);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const renderField = (
    name: keyof Employee,
    labelText: string,
    placeholder: string,
    type: string = "text",
    required: boolean = true
  ) => (
    <div className="mb-4">
      <Label text={labelText} htmlFor={name} required={required} />
      <Input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        onChange={handleChange}
        defaultValue={employee[name] || ""}
      />
      {errors[name] && (
        <p className="text-red-500 text-[13px] mt-1 pl-1">{errors[name]}</p>
      )}
    </div>
  );

  return (
    <div>
      <h1 className="text-3xl font-bold text-black/85 mb-6">
        {view === "update" ? "Edit Employee" : "Create New Employee"}
      </h1>

      <form
        className={`${view === "update" && "max-w-[800px]"}`}
        onSubmit={handleSubmit}
      >
        <div className="grid gap-6 sm:grid-cols-2 sm:gap-10 md:gap-12 lg:gap-20">
          <section>
            <p className="text-[#333] text-xl capitalize font-semibold mb-4">
              personal fields
            </p>

            <div>
              {renderField("full_name", "Full Name", "Enter your full name")}
              {renderField("email", "Email", "example@gmail.com", "email")}
              {renderField(
                "date_of_birth",
                "Date of Birth",
                "YYYY-MM-DD",
                "date"
              )}
              {renderField("phone_number", "Phone Number", "XXX-XXX-XXXX")}
            </div>
          </section>

          <section>
            <p className="text-[#333] text-xl capitalize font-semibold mb-4">
              Professional Fields
            </p>

            {renderField("job_title", "Job Title", "Enter your job title")}
            {renderField("department", "Department", "Enter department")}
            {renderField("salary", "Salary", "Enter your salary", "number")}
            {renderField("start_date", "Start Date", "YYYY-MM-DD", "date")}
          </section>
        </div>

        <hr className="my-5 text-[#333]/40" />

        <div className="flex flex-col md:flex-row items-center justify-end gap-4 md:gap-2 mt-6 md:mt-10">
          <Button label="Submit" type="submit" className="w-full md:w-fit" />

          <LinkButton
            to="/employees"
            label="Employees"
            className="w-full md:w-fit"
          />

          <LinkButton
            to="/timesheets"
            label="Timesheets"
            variant="outline"
            className="w-full md:w-fit"
          />
        </div>
      </form>
    </div>
  );
}
