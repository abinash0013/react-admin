import React from "react";
import "./home.css";
import { userData } from "../../DummyData";
import Chart from "../../components/charts/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import WidgetSm from "../../components/widgetSm/WidgetSm";

export default function Home() {
    return (
        <div className="home">
            <FeaturedInfo />
            <Chart
                data={userData}
                title="User Analytics"
                grid
                dataKey="Active User"
            />
            <div className="homeWidget">
                <WidgetSm />
                <WidgetLg />
            </div>
        </div>
    );
}
