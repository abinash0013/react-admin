import "./newProduct.css";
import {
    CalendarToday,
    LocationSearching,
    MailOutline,
    PermIdentity,
    PhoneAndroid,
    Publish,
} from "@material-ui/icons";

export default function newProduct() {
    return (
        <div className="newProduct">
            <h1 className="addProductTitle">New Product</h1>
            <form className="addProductForm">
                <div className="addProductItem">
                    <label htmlFor="">Image</label>
                    <input type="file" id="file" />
                </div>
                <div className="addProductItem">
                    <label htmlFor="">Name</label>
                    <input type="text" placeholder="Apple Airpods" />
                </div>
                <div className="addProductItem">
                    <label htmlFor="">Stocks</label>
                    <input type="text" placeholder="87" />
                </div>
                <div className="addProductItem">
                    <label>Active</label>
                    <select name="active" id="active">
                        <option value="yes">Yes</option>
                        <option value="yes">No</option>
                    </select>
                </div>
                <button className="addProductButton">Create</button>
            </form>
        </div>
    );
}
