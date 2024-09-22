import DocumentCard from "@/shared/DocumentCard";
import DownloadUploadChart from "@/shared/DownloadUploadChart";
import FileList from "@/shared/FileList";
import FolderCard from "@/shared/FolderCard";
import Footer from "@/shared/Footer";
import Navbar from "@/shared/Navbar";
import PremiumPlanCard from "@/shared/PremiumPlanCard";
import QuickAccess from "@/shared/QuickAccess";
import Sidebar from "@/shared/Sidebar";
import StorageChart from "@/shared/StorageChart";
import WelcomeCard from "@/shared/WelcomeCard";

let initialDocument = [
  {
    _id: 1,
    name: "Terms.pdf",
    image: "/assets/images/layouts/page-1/pdf.png",
  },
  {
    _id: 2,
    name: "New-one.docx",
    image: "/assets/images/layouts/page-1/doc.png",
  },
  {
    _id: 3,
    name: "Woo-box.xlsx",
    image: "/assets/images/layouts/page-1/xlsx.png",
  },
  {
    _id: 4,
    name: "IOS-content.pptx",
    image: "/assets/images/layouts/page-1/ppt.png",
  },
];

let initialFolder = [
  {
    _id: 1,
    name: "Alexa Workshop",
    item_count : 8,
    creation_date : " 10 Dec, 2020",
    documents: ["a.js"],
    folders: [],
  },
  {
    _id: 2,
    name: "Android",
    item_count : 8,
    creation_date : "09 Dec, 2020",
    documents: ["a.js"],
    folders: [],
  },
  {
    _id: 3,
    name: "Brightspot",
    item_count : 8,
    creation_date : "07 Dec, 2020",
    documents: ["a.js"],
    folders: [],
  },
  {
    _id: 4,
    name: "Ionic Chat App",
    item_count : 8,
    creation_date : "06 Dec, 2020",
    documents: ["a.js"],
    folders: [],
  },
]
let initialDownloadUpload = {
  download : 12594,
  upload : 1458,
}

let initialFileList = [
  {
    name : "Weekly-report.pdf",
    memebers : ["Me"],
    last_edit : ["jan 21, 2020", " me"],
    size : "02 MB",
  },
  {
    name : "VueJs.pdf",
    memebers : ["Sarrah Kirana"],
    last_edit : ["jan 25, 202", " Sarrah Kirana"],
    size : "64 MB",
  },
  {
    name : "Milestone.docx",
    memebers : ["Me"],
    last_edit : ["Mar 30, 2020", " Hussain Soni"],
    size : "30 MB",
  },
  {
    name : "Training center.xlsx",
    memebers : ["Me"],
    last_edit : ["Mar 30, 2020", " me"],
    size : "10 MB",
  },
  {
    name : "Flavour.pptx",
    memebers : ["Me"],
    last_edit : ["Mar 30, 2020 ", " me"],
    size : "10 MB",
  },
]


const Dashboard = () => {

  return (
    <>
      {/* loader Start */}
      {/* <div id="loading">
    <div id="loading-center">
    </div>
  </div> */}
      {/* loader END */}
      {/* Wrapper Start */}
      <div className="wrapper">
<Sidebar />{" "}
    <Navbar />
        <div className="content-page">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <div className="card-transparent card-block card-stretch card-height mb-3">
                  <div className="d-flex justify-content-between">
                    <div className="select-dropdown input-prepend input-append">
                      <div className="btn-group">
                        <div data-toggle="dropdown">
                          <div className="dropdown-toggle search-query">
                            My Drive
                            <i className="las la-angle-down ml-3" />
                          </div>
                          <span className="search-replace" />
                          <span className="caret">{/*icon*/}</span>
                        </div>
                        <ul className="dropdown-menu">
                          <li>
                            <div className="item">
                              <i className="ri-folder-add-line pr-3" />
                              New Folder
                            </div>
                          </li>
                          <li>
                            <div className="item">
                              <i className="ri-file-upload-line pr-3" />
                              Upload Files
                            </div>
                          </li>
                          <li>
                            <div className="item">
                              <i className="ri-folder-upload-line pr-3" />
                              Upload Folders
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="dashboard1-dropdown d-flex align-items-center">
                      <div className="dashboard1-info">
                        <a
                          href="#calander"
                          className="collapsed"
                          data-toggle="collapse"
                          aria-expanded="false"
                        >
                          <i className="ri-arrow-down-s-line" />
                        </a>
                        <ul
                          id="calander"
                          className="iq-dropdown collapse list-inline m-0 p-0 mt-2"
                        >
                          <li className="mb-2">
                            <a
                              href="#"
                              data-toggle="tooltip"
                              data-placement="right"
                              title="Calander"
                            >
                              <i className="las la-calendar iq-arrow-left" />
                            </a>
                          </li>
                          <li className="mb-2">
                            <a
                              href="#"
                              data-toggle="tooltip"
                              data-placement="right"
                              title="Keep"
                            >
                              <i className="las la-lightbulb iq-arrow-left" />
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              data-toggle="tooltip"
                              data-placement="right"
                              title="Tasks"
                            >
                              <i className="las la-tasks iq-arrow-left" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <WelcomeCard />
              <QuickAccess />
             <DocumentCard document={initialDocument}/>
            <FolderCard folder={initialFolder} />
             <FileList file_list={initialFileList} />
            <DownloadUploadChart downloadUpload={initialDownloadUpload} />
            <PremiumPlanCard />
            <StorageChart />
            </div>
          </div>
        </div>
      </div>
      {/* Wrapper End*/}
      <Footer />

      {/* Modal */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        role="dialog"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-dialog-centered modal-xl"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Title</h4>
              <div>
                <a className="btn" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </a>
              </div>
            </div>
            <div className="modal-body">
              <div
                id="resolte-contaniner"
                style={{ height: 500 }}
                className="overflow-auto"
              >
                File not found
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
