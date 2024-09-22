import ThreeDotDropdown from "./ThreeDotDropdown";
let initialDropdownItem = [
  {
      id: 1,
      name: "View",
     icon :"ri-eye-fill"
  },
  {
      id: 2,
      name: "Delete",
     icon :"ri-delete-bin-6-fill"
  },
  {
      id: 3,
      name: "Edit",
     icon :"ri-pencil-fill"
  },
  {
      id: 4,
      name: "Print",
     icon :"ri-printer-fill"
  },
  {
      id: 5,
      name: "Download",
     icon :"ri-file-download-fill"
  },
]
const parseSize = (sizeStr) => {
  const size = parseFloat(sizeStr);
  const unit = sizeStr.replace(size, '').trim().toUpperCase();

  switch (unit) {
    case 'KB':
      return size * 1024;
    case 'MB':
      return size * 1024 * 1024;
    case 'GB':
      return size * 1024 * 1024 * 1024;
    default:
      return size;
  }
};

const getClassNames = (index) => {
  switch (index) {
    case 0:
      return {
        bgClass: "bg-danger",
      };
    case 1:
      return {
        bgClass: "bg-warning",
      };
    case 2:
      return {
        bgClass: "bg-success",
      };
    case 3:
      return {
        bgClass: "bg-info",
      };
    case 4:
      return {
        bgClass: "bg-primary",
      };
    case 5:
      return {
        bgClass: "bg-secondary",
      };
    default:
      return {
        bgClass: "bg-primary",
      };
  }
};
const getHighestSizeIndex = (fileList) => {
  if (fileList.length === 0) return -1;

  return fileList.reduce((maxIndex, file, index, array) => {
    const currentSize = parseSize(file.size);
    const maxSize = parseSize(array[maxIndex].size);
    return currentSize > maxSize ? index : maxIndex;
  }, 0);
};

const FileList = ({ file_list }) => {
  const highestSizeIndex = getHighestSizeIndex(file_list);
  return (
    <>
      <div className="col-lg-8 col-xl-8">
        <div className="card card-block card-stretch card-height files-table">
          <div className="card-header d-flex justify-content-between">
            <div className="header-title">
              <h4 className="card-title">Files</h4>
            </div>
            <div className="card-header-toolbar d-flex align-items-center">
              <a href="./page-files.html" className=" view-more">
                View All
              </a>
            </div>
          </div>
          <div className="card-body pt-0">
            <div className="table-responsive">
              <table className="table mb-0 table-borderless tbl-server-info">
                <thead>
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Members</th>
                    <th scope="col">Last Edit</th>
                    <th scope="col">Size</th>
                    <th scope="col" />
                  </tr>
                </thead>
                <tbody>
                  {file_list.map((file, index) => {
                    const { bgClass } = getClassNames(index);
                    const isHighest = index === highestSizeIndex;

                    return (
                      <tr key={index} className={isHighest ? 'active' : ''}>
                        <td>
                          <div className="d-flex align-items-center">
                            <div className={`icon-small ${bgClass} rounded mr-3`}>
                              <i className="ri-file-excel-line" />
                            </div>
                            <div
                              data-load-file="file"
                              data-load-target="#resolte-contaniner"
                              data-url="assets/vendor/doc-viewer/files/demo.pdf"
                              data-toggle="modal"
                              data-target="#exampleModal"
                              data-title="Weekly-report.pdf"
                              style={{ cursor: "pointer" }}
                            >
                              {file.name}
                            </div>
                          </div>
                        </td>
                        <td>{file.memebers.map((memeber) => memeber)}</td>
                        <td>{file.last_edit}</td>
                        <td>{file.size}</td>
                        <td>
                         <ThreeDotDropdown DropdownItem={initialDropdownItem} />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FileList;
