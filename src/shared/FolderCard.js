import React from 'react';

const getClassNames = (index) => {
  switch (index) {
    case 0:
      return {
        bgClass: 'bg-danger',
        textClass: 'text-danger'
      };
    case 1:
      return {
        bgClass: 'bg-warning',
        textClass: 'text-warning'
      };
    case 2:
      return {
        bgClass: 'bg-success',
        textClass: 'text-success'
      };
    case 3:
      return {
        bgClass: 'bg-info',
        textClass: 'text-info'
      };
    case 4:
      return {
        bgClass: 'bg-primary',
        textClass: 'text-primary'
      };
      case 5:
        return {
          bgClass: 'bg-secondary',
          textClass: 'text-secondary'
        };
    default:
      return {
        bgClass: 'bg-primary',
        textClass: 'text-primary'
      };
  }
};

const FolderCard = ({ folder }) => {
  return (
    <>
                  <div className="col-lg-12">
                <div className="card card-block card-stretch card-transparent">
                  <div className="card-header d-flex justify-content-between pb-0">
                    <div className="header-title">
                      <h4 className="card-title">Folders</h4>
                    </div>
                    <div className="card-header-toolbar d-flex align-items-center">
                      <div className="dropdown">
                        <span
                          className="dropdown-toggle dropdown-bg btn bg-white"
                          id="dropdownMenuButton1"
                          data-toggle="dropdown"
                        >
                          Name
                          <i className="ri-arrow-down-s-line ml-1" />
                        </span>
                        <div
                          className="dropdown-menu dropdown-menu-right shadow-none"
                          aria-labelledby="dropdownMenuButton1"
                        >
                          <a className="dropdown-item" href="#">
                            Last modified
                          </a>
                          <a className="dropdown-item" href="#">
                            Last modifiedby me
                          </a>
                          <a className="dropdown-item" href="#">
                            Last opened by me
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            
      {folder.map((fold, index) => {
        const { bgClass, textClass } = getClassNames(index);
        return (
          <div className="col-md-6 col-sm-6 col-lg-3" key={fold.id}>
            <div className="card card-block card-stretch card-height">
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <a href="./page-alexa.html" className="folder">
                    <div className={`icon-small ${bgClass} rounded mb-4`}>
                      <i className="ri-file-copy-line" />
                    </div>
                  </a>
                  <div className="card-header-toolbar">
                    <div className="dropdown">
                      <span
                        className="dropdown-toggle"
                        id="dropdownMenuButton2"
                        data-toggle="dropdown"
                      >
                        <i className="ri-more-2-fill" />
                      </span>
                      <div
                        className="dropdown-menu dropdown-menu-right"
                        aria-labelledby="dropdownMenuButton2"
                      >
                        <a className="dropdown-item" href="#">
                          <i className="ri-eye-fill mr-2" />
                          View
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="ri-delete-bin-6-fill mr-2" />
                          Delete
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="ri-pencil-fill mr-2" />
                          Edit
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="ri-printer-fill mr-2" />
                          Print
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="ri-file-download-fill mr-2" />
                          Download
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <a href="./page-alexa.html" className="folder">
                  <h5 className="mb-2">{fold.name}</h5>
                  <p className="mb-2">
                    <i className={`lar la-clock ${textClass} mr-2 font-size-20`} />{" "}
                    {fold.creation_date}
                  </p>
                  <p className="mb-0">
                    <i className={`las la-file-alt ${textClass} mr-2 font-size-20`} />{" "}
                    {fold.item_count} Files
                  </p>
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default FolderCard;
