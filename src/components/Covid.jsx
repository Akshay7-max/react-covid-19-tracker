import React, { useEffect, useState } from "react";
import "./Covid.css";

import LanguageIcon from "@material-ui/icons/Language";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import SentimentVeryDissatisfiedIcon from "@material-ui/icons/SentimentVeryDissatisfied";
import AcUnitIcon from "@material-ui/icons/AcUnit";
import UpdateIcon from "@material-ui/icons/Update";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";

const Covid = () => {
  const [data, setData] = useState([]);
  const getCovidData = async () => {
    //Jab fetch API ka use hota hai as result it return promise
    //Means in feature our request either get fulfill or get rejected
    //Wo abhi confirm nahi hai that's why we use await or hum promise ka .then or .catch use kar sakty hai
    // and to make it more secure hum try & catch block bhi use kar saktay hai

    try {
      const res = await fetch("https://data.covid19india.org/data.json");
      //we receive data & to convert it into proper format [json format we use res.json()];
      //   res.json();
      //   console.log('res', res);

      //Again it return promise that's why we use await
      const actualData = await res.json();
      console.log("actualData", actualData.statewise[0]);
      setData(actualData.statewise[0]);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCovidData();
  }, []);

  return (
    <>
      <div className="container bootstrap snippets bootdey">
        <div className="row margin-bottom-10 mt-5">
          <div className="col-md-12 main-title">
            <h3>
              <div className="spinner-grow text-danger" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              &nbsp; 
              Live 
            </h3>
            <h2>COVID-19 CORONAVIRUS TRACKER</h2>
          </div>
        </div>
        <div className="row margin-bottom-10 mt-5">
          <div className="card col-md-4 col-sm-6">
            <div className="servive-block servive-block-aqua">
              <LanguageIcon className="icon-2x color-light" />
              <h2 className="heading-md">COUNTRY</h2>
              <h2>India</h2>
            </div>
          </div>

          <div className="card col-md-4 col-sm-6">
            <div className="servive-block servive-block-teal">
              <FavoriteBorderIcon className="icon-2x color-light" />
              <h2 className="heading-md">TOTAL RECOVERED</h2>
              <h2>{data.recovered}</h2>
            </div>
          </div>

          <div className="card col-md-4 col-sm-12">
            <div className="servive-block servive-block-yellow">
              <CheckCircleOutlineIcon className="icon-2x color-light" />
              <h2 className="heading-md">TOTAL CONFIRMED</h2>
              <h2>{data.confirmed}</h2>
            </div>
          </div>
        </div>

        <div className="row margin-bottom-10">
          <div className="card col-md-4 col-sm-6">
            <div className="servive-block servive-block-dark-red">
              <SentimentVeryDissatisfiedIcon className="icon-2x color-light" />
              <h2 className="heading-md">TOTAL DEATH</h2>
              <h2 className="heading-md">{data.deaths}</h2>
            </div>
          </div>

          <div className="card col-md-4 col-sm-6">
            <div className="servive-block servive-block-rose-red">
              <AcUnitIcon className="icon-2x color-light" />
              <h2 className="heading-md">TOTAL ACTIVE</h2>
              <h2>{data.active}</h2>
            </div>
          </div>

          <div className="card col-md-4 col-sm-12">
            <div className="servive-block servive-block-purple">
              <UpdateIcon className="icon-2x color-light" />
              <h2 className="heading-md">LAST UPDATED</h2>
              <h2>{data.lastupdatedtime}</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Covid;
