import React from "react";
import "./widgetLg.css";

export default function WidgetLg() {
    const Button = ({ type }) => {
        return <button className={"widgetLgButton " + type}>{type}</button>;
    };
    return (
        <div className="widgetLg">
            <h3 className="widgetLTitle">Latest Title</h3>
            <table className="widgetLgTable">
                <tr className="widgetLgTr">
                    <th className="widgetLgTh">Customer</th>
                    <th className="widgetLgTh">Date</th>
                    <th className="widgetLgTh">Amount</th>
                    <th className="widgetLgTh">Status</th>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img
                            src="https://yt3.ggpht.com/yti/APfAmoEG-Qt8rpCFLTNFXsuN6ATS0iIub5Q9JUrpTMYzE7g=s88-c-k-c0x00ffffff-no-rj-mo"
                            alt=""
                            className="widgetLgImg"
                        />
                        <span className="widgetLgName">Abinash</span>
                    </td>
                    <td className="widgetLgDate">2 June 2022</td>
                    <td className="widgetLgAmount">$122.00</td>
                    <td className="widgetLgStatus">
                        <Button type="Approved"></Button>
                    </td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img
                            src="https://yt3.ggpht.com/yti/APfAmoEG-Qt8rpCFLTNFXsuN6ATS0iIub5Q9JUrpTMYzE7g=s88-c-k-c0x00ffffff-no-rj-mo"
                            alt=""
                            className="widgetLgImg"
                        />
                        <span className="widgetLgName">Abinash</span>
                    </td>
                    <td className="widgetLgDate">2 June 2022</td>
                    <td className="widgetLgAmount">$122.00</td>
                    <td className="widgetLgStatus">
                        <Button type="Declined"></Button>
                    </td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img
                            src="https://yt3.ggpht.com/yti/APfAmoEG-Qt8rpCFLTNFXsuN6ATS0iIub5Q9JUrpTMYzE7g=s88-c-k-c0x00ffffff-no-rj-mo"
                            alt=""
                            className="widgetLgImg"
                        />
                        <span className="widgetLgName">Abinash</span>
                    </td>
                    <td className="widgetLgDate">2 June 2022</td>
                    <td className="widgetLgAmount">$122.00</td>
                    <td className="widgetLgStatus">
                        <Button type="Pending"></Button>
                    </td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img
                            src="https://yt3.ggpht.com/yti/APfAmoEG-Qt8rpCFLTNFXsuN6ATS0iIub5Q9JUrpTMYzE7g=s88-c-k-c0x00ffffff-no-rj-mo"
                            alt=""
                            className="widgetLgImg"
                        />
                        <span className="widgetLgName">Abinash</span>
                    </td>
                    <td className="widgetLgDate">2 June 2022</td>
                    <td className="widgetLgAmount">$122.00</td>
                    <td className="widgetLgStatus">
                        <Button type="Approved"></Button>
                    </td>
                </tr>
            </table>
        </div>
    );
}
