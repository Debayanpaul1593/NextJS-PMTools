import { Formik } from "formik";
import { TextField, Button } from "@mui/material";
import { DatePicker } from "@mui/lab";
import { AuthApi } from "../../services/api/authApis";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
export default function createTask() {
  const initialValues = {
    priority: "1",
    sprint: "Sprint1",
    name: "Create a page for taskslist",
    description: "This and this",
    createdBy: "61fadac85bcee0c42e3c803a",
    assignedTo: "6218e9c45b5ca3f0f99ac404",
    finishedBy: "6218e9c45b5ca3f0f99ac404",
    est: "8",
    cost: "",
    left: "",
    deadline: "17-01-2022",
    status: "Waiting",
  };
  return (
    <div>
      <Formik
        {...{ initialValues }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            console.log(values);
            AuthApi()
              .saveTask(values)
              .then((res) => console.log(res))
              .catch((err) => alert("Failed to save task", err));
            //alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          setFieldValue
        }) => (
          <form onSubmit={handleSubmit} className="formItems">
            <TextField
              id="outline-basic"
              label="Priority"
              type="text"
              value={values.priority}
              onChange={handleChange("priority")}
              className="fieldStyle"
            />
            <TextField
              id="outline-basic"
              label="Sprint"
              variant="outlined"
              type="text"
              value={values.sprint}
              onChange={handleChange("sprint")}
              className="fieldStyle"
            />
            <TextField
              id="outline-basic"
              label="Name"
              variant="outlined"
              type="text"
              value={values.name}
              onChange={handleChange("name")}
              className="fieldStyle"
            />
            <TextField
              id="outline-basic"
              label="Description"
              variant="outlined"
              type="text"
              value={values.description}
              onChange={handleChange("description")}
              className="fieldStyle"
            />
            <TextField
              id="outline-basic"
              label="Created By"
              variant="outlined"
              type="text"
              value={values.createdBy}
              onChange={handleChange("createdBy")}
              className="fieldStyle"
            />
            <TextField
              id="outline-basic"
              label="Assigned To"
              type="text"
              value={values.assignedTo}
              onChange={handleChange("assignedTo")}
              className="fieldStyle"
            />
            <TextField
              id="outline-basic"
              label="Finished By"
              variant="outlined"
              type="text"
              value={values.finishedBy}
              onChange={handleChange("finishedBy")}
              className="fieldStyle"
            />
            <TextField
              id="outline-basic"
              label="est"
              variant="outlined"
              type="text"
              value={values.est}
              onChange={handleChange("est")}
              className="fieldStyle"
            />
            <TextField
              id="outline-basic"
              label="Cost"
              variant="outlined"
              type="text"
              value={values.cost}
              onChange={handleChange("cost")}
              className="fieldStyle"
            />
            <TextField
              id="outline-basic"
              label="Left"
              variant="outlined"
              type="text"
              value={values.left}
              onChange={handleChange("left")}
              className="fieldStyle"
            />
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                label="Deadline"
                value={values.deadline}
                onChange={(val) => setFieldValue("deadline", val)}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
            <TextField
              id="outline-basic"
              label="status"
              variant="outlined"
              type="text"
              value={values.status}
              onChange={handleChange("status")}
              className="fieldStyle"
            />
            <Button
              variant="contained"
              style={{ marginTop: 48, marginBottom: 20 }}
              onClick={handleSubmit}
            >
              Create Task
            </Button>
          </form>
        )}
      </Formik>
      <style jsx>{`
        .container {
          background-color: #dfdbe5;
          background-image: url("/images/topography.svg");
          display: flex;
          height: 100vh;
        }
        .formItems {
          display: flex;
          flex: 1;
          flex-direction: column;
          justify-content: space-evenly;
          flex-wrap: nowrap;
          padding: 20px;
          height: 150vh;
        }
        .fieldStyle {
          margin-top: 20vh;
        }
        .css-1u3bzj6-MuiFormControl-root-MuiTextField-root {
          margin-top: 20px;
        }
        .cardContainer {
          background-color: white;
          border-radius: 10px;
          box-shadow: 2px 2px 5px grey;
          padding: 12px 24px 12px 24px;
          display: block;
          margin: auto;
        }

        .itemContainer {
          display: flex;
          flex-direction: column;
        }
      `}</style>
    </div>
  );
}
