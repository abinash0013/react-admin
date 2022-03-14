import "./productList.css";
import { useState } from "react";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { productRows } from "../../DummyData";
import { Link } from "react-router-dom";

export default function ProductList() {
    const [data, setData] = useState(productRows);
    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
    };

    const columns = [
        { field: "id", headerName: "ID", width: 90 },
        {
            field: "productName",
            headerName: "Products",
            width: 300,
            renderCell: (params) => {
                return (
                    <div className="productListItem">
                        <img
                            src={params.row.image}
                            alt=""
                            className="productListImg"
                        />
                        {params.row.productName}
                    </div>
                );
            },
        },
        { field: "stocks", headerName: "Stock", width: 110 },
        {
            field: "status",
            headerName: "status",
            sortable: false,
            width: 110,
        },
        { field: "prices", headerName: "Price", width: 160 },
        {
            field: "Action",
            headerName: "Action",
            width: 160,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={"/product/" + params.row.id}>
                            <button className="productListEdit">Edit</button>
                        </Link>
                        <DeleteOutline
                            className="productListDelete"
                            onClick={() => handleDelete(params.row.id)}
                        />
                    </>
                );
            },
        },
    ];
    return (
        <div className="productList">
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
