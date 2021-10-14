import React, { useState, useEffect } from "react";
import {
    ProSidebar,
    Menu,
    MenuItem,
    SidebarHeader,
    SidebarContent,
    SubMenu,
    SidebarFooter,
} from "react-pro-sidebar";
// import "react-pro-sidebar/dist/css/styles.css";
import logoImg from "../../img/logo.png";
import farmImg from "../../img/farm_icon.png";
import gameImg from "../../img/game_icon.png";
import stakeImg from "../../img/stake_icon.png";
import boxImg from "../../img/box_icon.png";
import bfgImg from "../../img/bfg_icon.png";
import cashImg from "../../img/cash_icon.png";
import referralImg from "../../img/referral_icon.png";
import bonusImg from "../../img/bonus_icon.png";
import promotionImg from "../../img/promotion_icon.png";
import newsImg from "../../img/news_icon.png";
import { FaBars } from "react-icons/fa";

// import { useDispatch } from "react-redux";
// import * as Actions from "../../redux/action";
import "./custom.scss";
import "./index.css";

export default function Sidebar() {
    const [toggle, setToggle] = useState(false);
    const handleToggleSidebar = () => {
        setToggle(!toggle);
    };

    return (
        <>
            <div className="btn-toggle" onClick={handleToggleSidebar}>
                <FaBars />
            </div>
            <ProSidebar
                toggled={toggle}
                breakPoint="md"
                onToggle={handleToggleSidebar}
            >
                <SidebarHeader>
                    <img src={logoImg} alt="logo" />
                </SidebarHeader>

                <SidebarContent>
                    <Menu>
                        <MenuItem icon={<img src={farmImg} alt="icon" />}>
                            {" "}
                            Farming
                        </MenuItem>
                    </Menu>
                    <Menu>
                        <MenuItem icon={<img src={gameImg} alt="icon" />}>
                            {" "}
                            All games
                        </MenuItem>
                    </Menu>
                    <Menu>
                        <MenuItem icon={<img src={stakeImg} alt="icon" />}>
                            {" "}
                            Staking
                        </MenuItem>
                    </Menu>
                    <Menu>
                        <MenuItem icon={<img src={boxImg} alt="icon" />}>
                            {" "}
                            Boxes
                        </MenuItem>
                    </Menu>
                    <Menu>
                        <MenuItem icon={<img src={bfgImg} alt="icon" />}>
                            {" "}
                            About BFG
                        </MenuItem>
                    </Menu>
                    <Menu>
                        <SubMenu
                            title="Cashback"
                            icon={<img src={cashImg} alt="icon" />}
                        >
                            <MenuItem>Component 1</MenuItem>
                            <MenuItem>Component 2</MenuItem>
                        </SubMenu>
                    </Menu>
                    <Menu>
                        <MenuItem icon={<img src={referralImg} alt="icon" />}>
                            Referral
                        </MenuItem>
                    </Menu>
                    <Menu>
                        <SubMenu
                            title="Bonuses"
                            icon={<img src={bonusImg} alt="icon" />}
                        >
                            <MenuItem>Component 1</MenuItem>
                            <MenuItem>Component 2</MenuItem>
                        </SubMenu>
                    </Menu>
                    <Menu>
                        <MenuItem icon={<img src={promotionImg} alt="icon" />}>
                            {" "}
                            Promotins
                        </MenuItem>
                    </Menu>
                    <Menu>
                        <MenuItem icon={<img src={newsImg} alt="icon" />}>
                            {" "}
                            News
                        </MenuItem>
                    </Menu>
                    <Menu>
                        <SubMenu title="EN">
                            <MenuItem>Component 1</MenuItem>
                            <MenuItem>Component 2</MenuItem>
                        </SubMenu>
                    </Menu>
                </SidebarContent>
            </ProSidebar>
        </>
    );
}
