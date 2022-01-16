export default function handler(req, res) {
  res.status(200).json([
    {
      id: "12345",
      severity: 3,
      priority: 3,
      type: "code error",
      title: "date of incorporation is not correct",
      created_by: "mark",
      assigned_to: "ronan",
      resolved_by: "",
      resolution: "open",
    },
    {
      id: "33124",
      severity: 2,
      priority: 2,
      type: "code error",
      title: "login api is not working",
      created_by: "mark",
      assigned_to: "carl",
      resolved_by: "",
      resolution: "closed",
    },
  ]);
}
