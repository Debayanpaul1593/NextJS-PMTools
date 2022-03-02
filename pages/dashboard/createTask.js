import { useState, useEffect } from "react";
import { Formik } from "formik";
import { TextField, Button } from "@mui/material";
import { DatePicker } from "@mui/lab";
import { AuthApi } from "../../services/api/authApis";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import Select from "react-select";
import { pick, propEq, find } from "ramda";
export default function createTask() {
  const initialValues = {
    priority: "1",
    sprint: "Sprint1",
    name: "Create a page for taskslist",
    description: "This and this",
    createdBy: "",
    assignedTo: "6218e9c45b5ca3f0f99ac404",
    finishedBy: "6218e9c45b5ca3f0f99ac404",
    est: "8",
    cost: "",
    left: "",
    deadline: "17-01-2022",
    status: "Waiting",
  };
  const sampleUsers = [
    { value: "debayan", label: "Debayan" },
    { value: "sourav", label: "Sourav" },
    { value: "akshansh", label: "Akshansh" },
  ];
  const [users, setUsers] = useState(null);
  const [usersImm, setUsersImm] = useState(null);
  useEffect(() => {
    AuthApi()
      .getUsers()
      .then((res) => {
        console.log(res);
        setUsersImm(res?.data);
        setUsers(
          res?.data?.map((item) => ({
            label: item?.username,
            value: item?.username,
          }))
        );
      })
      .catch(console.log);
  }, []);

  function getUserDetails(name) {
    let user = {};
    usersImm.forEach((item) => {
      if (item.username === name.value) {
        user = {
          username: item.username,
          _id: item?._id,
        };
      }
    });
    return user;
  }
  return (
    <div>
      <Formik
        {...{ initialValues }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            console.log("values", values);
            let nvalues = values;
            nvalues.createdBy = getUserDetails(values.createdBy);
            nvalues.assignedTo = getUserDetails(values.assignedTo);
            nvalues.finishedBy = getUserDetails(values.finishedBy);
            console.log(nvalues);
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
          setFieldValue,
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
            <label className="custom-label">Created By</label>
            <Select
              title="Created By"
              name="form-field-name"
              //onSelect={(val) => {
              value={values.createdBy}
              options={users}
              onSelect={(val) => {
                console.log(val);
                setFieldValue("createdBy", e.value);
              }}
              onChange={(e) => setFieldValue("createdBy", e)}
              className="dropDown"
            />
            <Select
              title="Created By"
              name="form-field-name"
              //onSelect={(val) => {
              value={values.assignedTo}
              options={users}
              onSelect={(val) => {
                console.log(val);
                setFieldValue("assignedTo", e.value);
              }}
              onChange={(e) => setFieldValue("assignedTo", e)}
              className="dropDown"
            />
            <Select
              title="Created By"
              name="form-field-name"
              //onSelect={(val) => {
              value={values.finishedBy}
              options={users}
              onSelect={(val) => {
                console.log(val);
                setFieldValue("finishedBy", e.value);
              }}
              onChange={(e) => setFieldValue("finishedBy", e)}
              className="dropDown"
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

        .dropDown {
          height: 55px;
        }

        .custom-label {
          color: rgba(0, 0, 0, 0.6);
          font-family: "Roboto", "Helvetica", "Arial", sans-serif;
          font-weight: 400;
          font-size: 1rem;
          line-height: 1.4375em;
          letter-spacing: 0.00938em;
          padding: 0;
          position: relative;
          display: block;
          transform-origin: top left;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          max-width: calc(133% - 24px);
          position: absolute;
          left: 0;
          top: 0;
          -webkit-transform: translate(14px, -9px) scale(0.75);
          -moz-transform: translate(14px, -9px) scale(0.75);
          -ms-transform: translate(14px, -9px) scale(0.75);
          transform: translate(14px, -9px) scale(0.75);
          -webkit-transition: color 200ms cubic-bezier(0, 0, 0.2, 1) 0ms,
            -webkit-transform 200ms cubic-bezier(0, 0, 0.2, 1) 0ms,
            max-width 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
          transition: color 200ms cubic-bezier(0, 0, 0.2, 1) 0ms,
            transform 200ms cubic-bezier(0, 0, 0.2, 1) 0ms,
            max-width 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
          z-index: 1;
          pointer-events: auto;
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }
      `}</style>
    </div>
  );
}

