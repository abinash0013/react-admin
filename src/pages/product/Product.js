import { Link } from "react-router-dom";
import Chart from "../../components/charts/Chart";
import "./product.css";
import { productData } from "../../DummyData";
import {
    CalendarToday,
    LocationSearching,
    MailOutline,
    PermIdentity,
    PhoneAndroid,
    Publish,
} from "@material-ui/icons";
export default function Product() {
    return (
        <div className="product">
            <div className="productTitleContainer">
                <h1 className="productTitle">Product</h1>
                <Link to="/newProduct">
                    <button className="productAddButton">Create</button>
                </Link>
            </div>
            <div className="productTop">
                <div className="productTopLeft">
                    <Chart
                        data={productData}
                        dataKey="Sales"
                        title="Sales Performer"
                    />
                </div>
                <div className="productTopRight">
                    <div className="productInfoTop">
                        <img
                            src="https://yt3.ggpht.com/yti/APfAmoEG-Qt8rpCFLTNFXsuN6ATS0iIub5Q9JUrpTMYzE7g=s88-c-k-c0x00ffffff-no-rj-mo"
                            alt=""
                            className="productInfoImg"
                        />
                        <span className="productName">Apple Airpods</span>
                    </div>
                    <div className="productInfoBottom">
                        <div className="productInfoItem">
                            <span className="productInfoKey">id:</span>
                            <span className="productInfoValue">123</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">Sales:</span>
                            <span className="productInfoValue">4123</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">active:</span>
                            <span className="productInfoValue">yes</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">in stock:</span>
                            <span className="productInfoValue">no</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="productBottom">
                <form action="" className="productForm">
                    <div className="productFromLeft">
                        <label htmlFor="">Product Name</label>
                        <input type="text" placeholder="Apple Airpod" />
                        <label>In Stock</label>
                        <select name="inStock" id="inStock">
                            <option value="yes">Yes</option>
                            <option value="yes">No</option>
                        </select>
                        <label>Active</label>
                        <select name="active" id="active">
                            <option value="yes">Yes</option>
                            <option value="yes">No</option>
                        </select>
                    </div>
                    <div className="productFromRight">
                        <div className="productUpload">
                            <img
                                src="https://yt3.ggpht.com/yti/APfAmoEG-Qt8rpCFLTNFXsuN6ATS0iIub5Q9JUrpTMYzE7g=s88-c-k-c0x00ffffff-no-rj-mo"
                                alt=""
                                className="productUploadImg"
                            />
                            <label for="file">
                                <Publish />
                            </label>
                            <input
                                type="file"
                                id="file"
                                style={{ display: "none" }}
                            />
                        </div>
                        <button className="productButton">Update</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
