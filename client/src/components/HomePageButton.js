import React from "react";
import { toFlagsPage, toCapitalsPage, toCountriesPage, toBordersPage } from "../helpers/Helpers";

const HomePageButton = (props) => {

    let icon;
    let linkFunc;

    if(props.name === 'countries'){
        icon = "fa-solid fa-earth-americas";
        linkFunc = toCountriesPage;
    } else if (props.name === 'flags'){
        icon = "fa-solid fa-flag";
        linkFunc = toFlagsPage;
    } else if (props.name === 'capitals'){
        icon = "fa-solid fa-building-columns"
        linkFunc = toCapitalsPage;
    } else if (props.name === 'borders') {
        icon = "fa-solid fa-road-barrier";
        linkFunc = toBordersPage;
    }

    return (
        <div className="gameTab" onClick={linkFunc}>
          <div>
            <i className={`${icon} icon`}></i>
          </div>
          <div>
            <p>{props.name}</p>
          </div>
        </div>
    );
}

export default HomePageButton;