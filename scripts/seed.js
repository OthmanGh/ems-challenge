import sqlite3 from "sqlite3";
import fs from "fs";
import path from "path";
import yaml from "js-yaml";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dbConfigPath = path.join(__dirname, "../database.yaml");
const dbConfig = yaml.load(fs.readFileSync(dbConfigPath, "utf8"));

const { sqlite_path: sqlitePath } = dbConfig;

const db = new sqlite3.Database(sqlitePath);

const employees = [
  {
    full_name: "John Doe",
    email: "john.doe@example.com",
    phone_number: "123-456-7890",
    date_of_birth: "1990-05-15",
    job_title: "Software Engineer",
    department: "Engineering",
    salary: 80000,
    start_date: "2022-06-01",
    end_date: null,
  },
  {
    full_name: "Jane Smith",
    email: "jane.smith@example.com",
    phone_number: "234-567-8901",
    date_of_birth: "1985-09-22",
    job_title: "Project Manager",
    department: "Product",
    salary: 95000,
    start_date: "2021-08-15",
    end_date: null,
  },
  {
    full_name: "Alice Johnson",
    email: "alice.johnson@example.com",
    phone_number: "345-678-9012",
    date_of_birth: "1992-02-10",
    job_title: "UI/UX Designer",
    department: "Design",
    salary: 70000,
    start_date: "2023-03-10",
    end_date: null,
  },
  {
    full_name: "Michael Brown",
    email: "michael.brown@example.com",
    phone_number: "456-789-0123",
    date_of_birth: "1988-07-30",
    job_title: "DevOps Engineer",
    department: "Infrastructure",
    salary: 90000,
    start_date: "2020-11-20",
    end_date: null,
  },
  {
    full_name: "Emily Davis",
    email: "emily.davis@example.com",
    phone_number: "567-890-1234",
    date_of_birth: "1995-12-18",
    job_title: "Data Analyst",
    department: "Data Science",
    salary: 75000,
    start_date: "2023-01-05",
    end_date: null,
  },
  {
    full_name: "David Wilson",
    email: "david.wilson@example.com",
    phone_number: "678-901-2345",
    date_of_birth: "1983-04-25",
    job_title: "Technical Lead",
    department: "Engineering",
    salary: 105000,
    start_date: "2019-09-01",
    end_date: null,
  },
  {
    full_name: "Olivia Martinez",
    email: "olivia.martinez@example.com",
    phone_number: "789-012-3456",
    date_of_birth: "1997-06-08",
    job_title: "Marketing Specialist",
    department: "Marketing",
    salary: 68000,
    start_date: "2023-07-15",
    end_date: null,
  },
  {
    full_name: "William Taylor",
    email: "william.taylor@example.com",
    phone_number: "890-123-4567",
    date_of_birth: "1991-10-12",
    job_title: "Sales Manager",
    department: "Sales",
    salary: 87000,
    start_date: "2021-03-22",
    end_date: null,
  },
  {
    full_name: "Sophia Anderson",
    email: "sophia.anderson@example.com",
    phone_number: "901-234-5678",
    date_of_birth: "1994-03-29",
    job_title: "HR Coordinator",
    department: "Human Resources",
    salary: 72000,
    start_date: "2022-09-05",
    end_date: null,
  },
  {
    full_name: "James Thomas",
    email: "james.thomas@example.com",
    phone_number: "012-345-6789",
    date_of_birth: "1989-11-15",
    job_title: "Cybersecurity Analyst",
    department: "Security",
    salary: 95000,
    start_date: "2020-05-18",
    end_date: null,
  },
];

const timesheets = [
  {
    employee_id: 1,
    start_time: "2025-02-10 08:00:00",
    end_time: "2025-02-10 17:00:00",
  },
  {
    employee_id: 2,
    start_time: "2025-02-11 12:00:00",
    end_time: "2025-02-11 17:00:00",
  },
  {
    employee_id: 3,
    start_time: "2025-02-12 07:00:00",
    end_time: "2025-02-12 16:00:00",
  },
];

const insertData = (table, data) => {
  const columns = Object.keys(data[0]).join(", ");
  const placeholders = Object.keys(data[0])
    .map(() => "?")
    .join(", ");

  const insertStmt = db.prepare(
    `INSERT INTO ${table} (${columns}) VALUES (${placeholders})`
  );

  data.forEach((row) => {
    insertStmt.run(Object.values(row));
  });

  insertStmt.finalize();
};

db.serialize(() => {
  insertData("employees", employees);
  insertData("timesheets", timesheets);
});

db.close((err) => {
  if (err) {
    console.error(err.message);
  } else {
    console.log("Database seeded successfully.");
  }
});
