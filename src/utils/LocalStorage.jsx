const employees = [
  {
    id: 1,
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Prepare project report",
        description: "Complete the quarterly project status report.",
        date: "2024-12-15",
        category: "Reporting",
      },
      {
        active: true,
        newTask: false,
        completed: true,
        failed: false,
        title: "Team meeting preparation",
        description: "Prepare the agenda for the next team meeting.",
        date: "2024-12-13",
        category: "Meetings",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Client presentation",
        description: "Present project updates to the client.",
        date: "2024-12-10",
        category: "Presentation",
      },
      // Add 7 more tasks with similar structure
    ],
  },
  {
    id: 2,
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Code review",
        description: "Review code for the new module.",
        date: "2024-12-16",
        category: "Development",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Fix login bug",
        description: "Resolve the login issue reported by QA.",
        date: "2024-12-12",
        category: "Bug Fix",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Write unit tests",
        description: "Add unit tests for the payment module.",
        date: "2024-12-09",
        category: "Testing",
      },
      // Add 7 more tasks with similar structure
    ],
  },
  {
    id: 3,
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Design landing page",
        description: "Create a new design for the product landing page.",
        date: "2024-12-20",
        category: "Design",
      },
      // Add 9 more tasks
    ],
  },
  {
    id: 4,
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        title: "Set up database",
        description: "Configure the new database for the analytics module.",
        date: "2024-12-17",
        category: "Database",
      },
      // Add 9 more tasks
    ],
  },
  {
    id: 5,
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Draft user guide",
        description: "Write a user guide for the new application.",
        date: "2024-12-11",
        category: "Documentation",
      },
      // Add 9 more tasks
    ],
  },
];

const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123",
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLoalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));
};
