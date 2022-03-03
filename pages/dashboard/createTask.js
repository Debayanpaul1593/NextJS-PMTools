import { useState, useEffect } from "react";
import { Formik } from "formik";
import {
  TextField,
  Button,
  Select,
  InputLabel,
  MenuItem,
  FormControl,
  Box,
} from "@mui/material";
import { DatePicker } from "@mui/lab";
import { AuthApi } from "../../services/api/authApis";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { pick, propEq, find } from "ramda";
import { requireAuthentication, load } from "../../services";

export const getServerSideProps = requireAuthentication(async (context) => {
  return {
    props: {},
  };
});

export default function createTask({}) {
  const initialValues = {
    priority: "",
    sprint: "",
    name: "",
    description: "",
    createdBy: "",
    assignedTo: "",
    finishedBy: "",
    est: "",
    cost: "",
    left: "",
    deadline: "",
    status: "",
  };
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
      if (item.username === name) {
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
              label="Priority"
              type="text"
              value={values.priority}
              onChange={handleChange("priority")}
              className="fieldStyle"
            />
            <TextField
              label="Sprint"
              variant="outlined"
              type="text"
              value={values.sprint}
              onChange={handleChange("sprint")}
              className="fieldStyle"
            />
            <TextField
              label="Name"
              variant="outlined"
              type="text"
              value={values.name}
              onChange={handleChange("name")}
              className="fieldStyle"
            />
            <TextField
              label="Description"
              variant="outlined"
              type="text"
              value={values.description}
              onChange={handleChange("description")}
              className="fieldStyle"
            />
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Created By
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={values.createdBy}
                  label="Created By"
                  onChange={handleChange("createdBy")}
                >
                  {users?.map((item, index) => (
                    <MenuItem value={item.value} key={index.toString()}>
                      {item.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Assigned To
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={values.assignedTo}
                  label="Assigned To"
                  onChange={handleChange("assignedTo")}
                >
                  {users?.map((item, index) => (
                    <MenuItem value={item.value} key={index.toString()}>
                      {item.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Finished By
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={values.finishedBy}
                  label="finishedBy By"
                  onChange={handleChange("finishedBy")}
                >
                  {users?.map((item, index) => (
                    <MenuItem value={item.value} key={index.toString()}>
                      {item.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
            <TextField
              label="est"
              variant="outlined"
              type="text"
              value={values.est}
              onChange={handleChange("est")}
              className="fieldStyle"
            />
            <TextField
              label="Cost"
              variant="outlined"
              type="text"
              value={values.cost}
              onChange={handleChange("cost")}
              className="fieldStyle"
            />
            <TextField
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
              label="status"
              variant="outlined"
              type="text"
              value={values.status}
              onChange={handleChange("status")}
              className="fieldStyle"
            />
            <Button variant="contained" onClick={handleSubmit}>
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
      `}</style>
    </div>
  );
}
