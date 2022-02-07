import React from "react";


function BodyArea() {
return (
<div className="bodyArea">
<div className="col-md-10 offset-md-1">
   <div className="row">
      <div className="col-md-3">
         <div className="card bodyshodow">
            <div className="card-body">
               <h6>Defi Porfolio Tracker</h6>
               <p>Coming soon</p>
            </div>
         </div>
      </div>
      <div className="col-md-3">
         <div className="card bodyshodow">
            <div className="card-body">
               <h6>More chains will be supported</h6>
               <p>Coming soon</p>
            </div>
         </div>
      </div>
      <div className="col-md-3">
         <div className="card bodyshodow">
            <div className="card-body">
               <h6>Price Alerts To Buy And Sell</h6>
               <p>Coming soon</p>
            </div>
         </div>
      </div>
      <div className="col-md-3">
         <div className="card bodyshodow">
            <div className="card-body">
               <h6>Find New Tokens</h6>
               <p>Coming soon</p>
            </div>
         </div>
      </div>
   </div>
   <div className="pt-heading">
      <h1> The Most Powerful Charting Platform For Defi</h1>
   </div>
   <div className="row mt-5">
      <div className="col-lg-4">
         <img src="/assets/images/1.png" className="rounded-circle" alt="Cinque" width="100" height="100"/>
         <h6 className="mt-3">Track all your Defi Portfolio's in one place</h6>
         <p style={{color: "#75797a"}}>whether it BSE or ETH, you can track all of investments in one place.</p>
      </div>
      <div className="col-lg-4">
         <img src="/assets/images/2.png" className="rounded-circle" alt="Cinque" width="100" height="100"/>
         <h6 className="mt-3">Powerful charting platform</h6>
         <p style={{color: "#75797a"}}>Charting like never before with all of the most important features in one place.</p>
      </div>
      <div className="col-lg-4">
         <img src="/assets/images/3.png" className="rounded-circle" alt="Cinque" width="100" height="100"/>
         <h6 className="mt-3">Development never stops</h6>
         <p style={{color: "#75797a"}}>We will keep on developing new features and adding new chains to make this the complete app for all your defi needs.</p>
      </div>
   </div>
</div>
</div>
);
}
export default BodyArea;