import { width } from "@mui/system";
import React from "react";

const Dashboard =()=> {

const myChart={
    background: "#F1F5F4",
    border: "none",
    borderRadius: "2px",
    boxShadow: "0 2px 10px 0 rgba(70, 76, 79, .2)",
    height:"400px",
    width:"500px", 
}




    return(
<div>
    <div>
<h1 className="mt-5"> </h1>
    </div>


    <iframe className="myframe " title="mydash" style={{myChart}} src="https://charts.mongodb.com/charts-project-0-snzri/embed/dashboards?id=6343195f-1cbb-43e7-8d3b-f321a8643a96&theme=dark&autoRefresh=true&maxDataAge=60&showTitleAndDesc=false&scalingWidth=fixed&scalingHeight=fixed"></iframe>
    
    </div>
    
    
    )}
    
    export default Dashboard;