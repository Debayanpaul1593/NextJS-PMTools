import dashboard from ".";
import { DataGrid } from "@mui/x-data-grid";
import { assoc, map } from "ramda";
import useSWR from "swr";
import { BUGLIST_TABLE_COLUMNS } from "../../../constants";
import { useEffect, useState } from "react";
import { AuthApi } from "../../../services";
import { useRouter } from "next/router";
const disableEdit = map(assoc("editable", false));
const READONLY_COLUMNS = disableEdit(BUGLIST_TABLE_COLUMNS);
export const getStaticProps = async () => {
  const res = await AuthApi().getAllBugs();
  const data = res.map((item, index) => {
    item.id = index.toString();
    const { createdBy, assignedTo, resolvedBy } = item;
    delete item.createdBy;
    delete item.assignedTo;
    delete item.finishedBy;
    item.createdBy = createdBy?.username ?? createdBy;
    item.assignedTo = assignedTo?.username ?? assignedTo;
    item.resolvedBy = resolvedBy?.username ?? resolvedBy;
    return item;
  });
  return {
    props: { bugs: data },
  };
};
export default function bugList({ bugs }) {
  //const [data, setData] = useState(null);
  //useEffect(() => {
  //AuthApi()
  //.getAllBugs()
  //.then((res) => {
  //console.log(res);
  //setData(
  //res.map((item, index) => {
  //console.log(item);
  //item.id = index.toString();
  //const { createdBy, assignedTo, resolvedBy } = item;
  //delete item.createdBy;
  //delete item.assignedTo;
  //delete item.finishedBy;
  //item.createdBy = createdBy?.username ?? createdBy;
  //item.assignedTo = assignedTo?.username ?? assignedTo;
  //item.resolvedBy = resolvedBy?.username ?? resolvedBy;
  //return item;
  //})
  //);
  //})
  //.catch((err) => console.log(err));
  //}, []);
  const router = useRouter();
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={bugs}
        columns={READONLY_COLUMNS}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        onCellClick={(params) => {
          router.push("/dashboard/bugList/" + params.row._id);
          console.log(params.row._id);
        }}
      />
      <style jsx>
        {`
          .column-style {
            background-color: blue;
          }
        `}
      </style>
    </div>
  );
}
