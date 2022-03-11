import { useState } from "react";
import "./userList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { userRows } from "../../DummyData";
import { Link } from "react-router-dom";

export default function UserList() {
    const [data, setData] = useState(userRows);
    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
    };
    const columns = [
        { field: "id", headerName: "ID", width: 100 },
        {
            field: "username",
            headerName: "Username",
            width: 200,
            renderCell: (params) => {
                return (
                    <div className="userListUser">
                        <img
                            src={params.row.avatar}
                            alt=""
                            className="userListImg"
                        />
                        {params.row.username}
                    </div>
                );
            },
        },
        { field: "email", headerName: "Email", width: 200 },
        {
            field: "status",
            headerName: "status",
            sortable: false,
            width: 160,
        },
        { field: "transaction", headerName: "Transaction", width: 160 },
        {
            field: "action",
            headerName: "Action",
            width: 160,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={"/user/" + params.row.id}>
                            <button className="userListEdit">Edit</button>
                        </Link>
                        <DeleteOutline
                            className="userListDelete"
                            onClick={() => handleDelete(params.row.id)}
                        />
                    </>
                );
            },
        },
    ];

    return (
        <div className="userList">
            <DataGrid
                rows={data}
                columns={columns}
                pageSize={10}
                rowsPerPageOptions={[10]}
                checkboxSelection
                disableSelectionOnClick
            />
        </div>
    );
}
