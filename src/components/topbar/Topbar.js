import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";

export default function Topbar() {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">Admin</span>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <NotificationsNone />
                        <span className="topIconBadge">1</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Language />
                        <span className="topIconBadge">1</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Settings />
                        <span className="topIconBadge">1</span>
                    </div>
                    <img
                        src="https://yt3.ggpht.com/yti/APfAmoEG-Qt8rpCFLTNFXsuN6ATS0iIub5Q9JUrpTMYzE7g=s88-c-k-c0x00ffffff-no-rj-mo"
                        alt=""
                        className="topAvatar"
                    />
                </div>
            </div>
        </div>
    );
}
