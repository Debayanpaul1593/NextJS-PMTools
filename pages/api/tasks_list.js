export default function handler(req, res) {
  res.status(200).json([
    {
      id: "3816",
      priority: "1",
      sprint: "Sprint1",
      name: "Create a page for taskslist",
      created_by: "Mark",
      assigned_to: "Noah",
      finished_by: "",
      est: "8",
      cost: "",
      left: "",
      deadline: "17-01-2022",
      status: "Waiting",
    },
    {
      id: "3818",
      priority: "1",
      sprint: "Sprint1",
      name: "Integrate API for taskslist",
      created_by: "Mark",
      assigned_to: "Noah",
      finished_by: "",
      est: "8",
      cost: "",
      left: "",
      deadline: "17-01-2022",
      status: "Waiting",
    },
  ]);
}
