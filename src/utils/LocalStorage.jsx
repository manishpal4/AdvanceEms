const employees = [
  {
    id: 1,
    name: "John",
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
    ],
    taskCounts: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1,
    },
  },
  {
    id: 2,
    name: "Jane",
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
    ],
    taskCounts: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1,
    },
  },
  {
    id: 3,
    name: "Emily",
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
    ],
    taskCounts: {
      active: 1,
      newTask: 0,
      completed: 0,
      failed: 0,
    },
  },
  {
    id: 4,
    name: "Michael",
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
    ],
    taskCounts: {
      active: 0,
      newTask: 1,
      completed: 0,
      failed: 0,
    },
  },
  {
    id: 5,
    name: "Sarah",
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
    ],
    taskCounts: {
      active: 0,
      newTask: 0,
      completed: 1,
      failed: 0,
    },
  },
];

const admin = [
  {
    id: 1,
    name: "Admin",
    email: "admin@example.com",
    password: "123",
  },
];


export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));
  return{employees,admin}
};
