import React from 'react'

const StorageChart = () => {
  return (
    <>
      <div className="col-lg-8">
                <div className="card card-block card-stretch card-height">
                  <div className="card-header d-flex justify-content-between pb-0">
                    <div className="header-title">
                      <h4 className="card-title">Storage</h4>
                    </div>
                    <div className="card-header-toolbar d-flex align-items-center">
                      <div className="dropdown">
                        <span
                          className="dropdown-toggle btn  dropdown-bg border border-primary text-primary rounded"
                          id="dropdownMenuButton11"
                          data-toggle="dropdown"
                        >
                          Monthly
                          <i className="ri-arrow-down-s-line ml-1" />
                        </span>
                        <div
                          className="dropdown-menu dropdown-menu-right shadow-none"
                          aria-labelledby="dropdownMenuButton11"
                        >
                          <a className="dropdown-item" href="#">
                            Monthly
                          </a>
                          <a className="dropdown-item" href="#">
                            Weekly
                          </a>
                          <a className="dropdown-item" href="#">
                            Yearly
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-body pt-0">
                    <div id="layout-1-chart2" />
                  </div>
                </div>
              </div>
    </>
  )
}

export default StorageChart