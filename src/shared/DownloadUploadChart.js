"use client";

import { useState } from "react";

const DownloadUploadChart = ({ downloadUpload }) => {
  const [formattedDownload, setFormattedDownload] = useState(
    downloadUpload.download.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  );

  const [formattedUpload, setFormattedUpload] = useState(
    downloadUpload.upload.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  );


  return (
    <>
      <div className="col-lg-4">
        <div className="card card-block card-stretch card-height ">
          <div className="card-header d-flex justify-content-between">
            <div className="header-title">   

              <h4 className="card-title">   
                Statistic
              </h4>
            </div>
          </div>
          <div className="card-body">
            <div id="layout-1-chart" style={{ minHeight: 220 }} />
            <div className="row mt-4">
              <div className="col-lg-6 col-md-6 col-6">
                <div className="media align-items-center">
                  <div className="icon iq-icon-box bg-primary rounded icon-statistic">
                    <i className="las la-long-arrow-alt-down"   
 />
                  </div>
                  <div className="media-body ml-3">
                    <p className="mb-0">Downloads</p>
                    <h5>{formattedDownload}</h5>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-6">
                <div className="media align-items-center">
                  <div className="icon iq-icon-box bg-light rounded icon-statistic">
                    <i className="las la-long-arrow-alt-up"   
 />
                  </div>
                  <div className="media-body ml-3">
                    <p className="mb-0">Uploads</p>
                    <h5>{formattedUpload}</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DownloadUploadChart;