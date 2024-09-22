import Footer from "@/shared/Footer";
import Navbar from "@/shared/Navbar";
import Sidebar from "@/shared/Sidebar";
import Link from "next/link";

let initialDriveItems = [
    {
        _id: 1,
name : "Default Drive",
path : "default",
item_count : 1,
documents: [],
   folders: [],
    },
]
const MyDrive = () => {
  return (
    <>
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
        <div className="d-flex align-items-center justify-content-between welcome-content mb-3">
          <div className="navbar-breadcrumb">
            <nav aria-label="breadcrumb">
              <ul className="breadcrumb mb-0">
                <li className="breadcrumb-item active"><a href="index.html">My Drive</a></li>
                {/* <li className="breadcrumb-item active" aria-current="page">Default</li> */}
              </ul>
            </nav>
          </div>
          <div className="d-flex align-items-center">
            <div className="list-grid-toggle mr-4">
              <span className="icon icon-grid i-grid"><i className="ri-layout-grid-line font-size-20" /></span>
              <span className="icon icon-grid i-list"><i className="ri-list-check font-size-20" /></span>
              <span className="label label-list">List</span>
            </div>
            <div className="dashboard1-dropdown d-flex align-items-center">
              <div className="dashboard1-info rounded">
                <a href="#calander" className="collapsed" data-toggle="collapse" aria-expanded="false">
                  <i className="ri-arrow-down-s-line" />
                </a>
                <ul id="calander" className="iq-dropdown collapse list-inline m-0 p-0 mt-2">
                  <li className="mb-2">
                    <a href="#" data-toggle="tooltip" data-placement="right" title="Calander"><i className="las la-calendar iq-arrow-left" /></a>
                  </li>
                  <li className="mb-2">
                    <a href="#" data-toggle="tooltip" data-placement="right" title="Keep"><i className="las la-lightbulb iq-arrow-left" /></a>
                  </li>
                  <li>
                    <a href="#" data-toggle="tooltip" data-placement="right" title="Tasks"><i className="las la-tasks iq-arrow-left" /></a>
                  </li>                                        
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   
    <div className="icon icon-grid i-grid">
      <div className="row">
        <div className="col-lg-12">
          <div className="card card-block card-stretch card-transparent">
            <div className="card-header d-flex justify-content-between pb-0">
              <div className="header-title">
                <h4 className="card-title">Images</h4>
              </div>
            </div>
          </div>
        </div>
        {initialDriveItems.map((item) => (
        <div className="col-lg-3 col-md-6 col-sm-6" key={item._id}>
        <div className="card card-block card-stretch card-height">
          <div className="card-body image-thumb ">
            <div className="mb-4 text-center p-3 rounded iq-thumb">
              <Link href={`/my-drive/${item.path}`}>
              <img src="/assets/images/layouts/mydrive/folder-1.png" className="img-fluid mb-1" alt={item.name} />
                <div className="iq-image-overlay" />
              </Link>           
            </div>
            <h6>{item.name}</h6>          
          </div>
        </div>
      </div>
        ))}
      </div>
    </div>
    {/* <div className="icon icon-grid i-list">
      <div className="row">
        <div className="col-lg-12">                        
          <div className="card card-block card-stretch card-transparent">
            <div className="card-header d-flex justify-content-between pb-0">
              <div className="header-title">
                <h4 className="card-title">list View</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="card card-block card-stretch card-height">
            <div className="card-body">
              <div className="table-responsive">
                <table className="table mb-0 table-borderless tbl-server-info">
                  <thead>
                    <tr>
                      <th scope="col">Name</th>
                      <th scope="col">Owner</th>
                      <th scope="col">Last Edit</th>
                      <th scope="col">File Size</th>
                      <th scope="col" />
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <div className="mr-3">
                            <a href="#"><img src="../assets/images/layouts/page-1/01.png" className="img-fluid avatar-30" alt="image1" /></a>
                          </div>
                          Alexa.jpeg
                        </div>
                      </td>
                      <td>Me</td>
                      <td>jan 21, 2020 me</td>
                      <td>02 MB</td>
                      <td>
                        <div className="dropdown">
                          <span className="dropdown-toggle" id="dropdownMenuButton6" data-toggle="dropdown">
                            <i className="ri-more-fill" />
                          </span>
                          <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton6">
                            <a className="dropdown-item" href="#"><i className="ri-eye-fill mr-2" />View</a>
                            <a className="dropdown-item" href="#"><i className="ri-delete-bin-6-fill mr-2" />Delete</a>
                            <a className="dropdown-item" href="#"><i className="ri-pencil-fill mr-2" />Edit</a>
                            <a className="dropdown-item" href="#"><i className="ri-printer-fill mr-2" />Print</a>
                            <a className="dropdown-item" href="#"><i className="ri-file-download-fill mr-2" />Download</a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <div className="mr-3">
                            <a href="#"><img src="../assets/images/layouts/page-1/02.png" className="img-fluid avatar-30" alt="image1" /></a>
                          </div>
                          Alexa2.png
                        </div>
                      </td>
                      <td>Poul Molive</td>
                      <td>jan 25, 2020 Poul Molive</td>
                      <td>64 MB</td>
                      <td>
                        <div className="dropdown">
                          <span className="dropdown-toggle" id="dropdownMenuButton7" data-toggle="dropdown">
                            <i className="ri-more-fill" />
                          </span>
                          <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton7">
                            <a className="dropdown-item" href="#"><i className="ri-eye-fill mr-2" />View</a>
                            <a className="dropdown-item" href="#"><i className="ri-delete-bin-6-fill mr-2" />Delete</a>
                            <a className="dropdown-item" href="#"><i className="ri-pencil-fill mr-2" />Edit</a>
                            <a className="dropdown-item" href="#"><i className="ri-printer-fill mr-2" />Print</a>
                            <a className="dropdown-item" href="#"><i className="ri-file-download-fill mr-2" />Download</a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <div className="mr-3">
                            <a href="#"><img src="../assets/images/layouts/page-1/03.png" className="img-fluid avatar-30" alt="image1" /></a>
                          </div>
                          Alexa3.svg
                        </div>
                      </td>
                      <td>Me</td>
                      <td>Mar 30, 2020 Gail Forcewind</td>
                      <td>30 MB</td>
                      <td>
                        <div className="dropdown">
                          <span className="dropdown-toggle" id="dropdownMenuButton8" data-toggle="dropdown">
                            <i className="ri-more-fill" />
                          </span>
                          <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton8">
                            <a className="dropdown-item" href="#"><i className="ri-eye-fill mr-2" />View</a>
                            <a className="dropdown-item" href="#"><i className="ri-delete-bin-6-fill mr-2" />Delete</a>
                            <a className="dropdown-item" href="#"><i className="ri-pencil-fill mr-2" />Edit</a>
                            <a className="dropdown-item" href="#"><i className="ri-printer-fill mr-2" />Print</a>
                            <a className="dropdown-item" href="#"><i className="ri-file-download-fill mr-2" />Download</a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <div className="mr-3">
                            <a href="#"><img src="../assets/images/layouts/page-1/04.png" className="img-fluid avatar-30" alt="image1" /></a>
                          </div>
                          Alexa Video.mp4
                        </div>
                      </td>
                      <td>Me</td>
                      <td>Mar 30, 2020 Gail Forcewind</td>
                      <td>10 MB</td>
                      <td>
                        <div className="dropdown">
                          <span className="dropdown-toggle" id="dropdownMenuButton9" data-toggle="dropdown">
                            <i className="ri-more-fill" />
                          </span>
                          <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton9">
                            <a className="dropdown-item" href="#"><i className="ri-eye-fill mr-2" />View</a>
                            <a className="dropdown-item" href="#"><i className="ri-delete-bin-6-fill mr-2" />Delete</a>
                            <a className="dropdown-item" href="#"><i className="ri-pencil-fill mr-2" />Edit</a>
                            <a className="dropdown-item" href="#"><i className="ri-printer-fill mr-2" />Print</a>
                            <a className="dropdown-item" href="#"><i className="ri-file-download-fill mr-2" />Download</a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <div className="mr-3">
                            <a href="#"><img src="../assets/images/layouts/page-4/pdf.png" className="img-fluid avatar-30" alt="image1" /></a>
                          </div>
                          <div data-load-file="file" data-load-target="#resolte-contaniner" data-url="../assets/vendor/doc-viewer/files/demo.pdf" data-toggle="modal" data-target="#exampleModal" data-title="alexa5.pdf" style={{cursor: 'pointer'}}>Alexa5.pdf</div>
                        </div>
                      </td>
                      <td>Me</td>
                      <td>Mar 30, 2020 Gail Forcewind</td>
                      <td>10 MB</td>
                      <td>
                        <div className="dropdown">
                          <span className="dropdown-toggle" id="dropdownMenuButton10" data-toggle="dropdown">
                            <i className="ri-more-fill" />
                          </span>
                          <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton10">
                            <a className="dropdown-item" href="#"><i className="ri-eye-fill mr-2" />View</a>
                            <a className="dropdown-item" href="#"><i className="ri-delete-bin-6-fill mr-2" />Delete</a>
                            <a className="dropdown-item" href="#"><i className="ri-pencil-fill mr-2" />Edit</a>
                            <a className="dropdown-item" href="#"><i className="ri-printer-fill mr-2" />Print</a>
                            <a className="dropdown-item" href="#"><i className="ri-file-download-fill mr-2" />Download</a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <div className="mr-3">
                            <a href="#"><img src="../assets/images/layouts/page-4/doc.png" className="img-fluid avatar-30" alt="image1" /></a>
                          </div>
                          <div data-load-file="file" data-load-target="#resolte-contaniner" data-url="../assets/vendor/doc-viewer/files/demo.docx" data-toggle="modal" data-target="#exampleModal" data-title="alexa6.docx" style={{cursor: 'pointer'}}>Alexa6.docx</div>
                        </div>
                      </td>
                      <td>Penny</td>
                      <td>Mar 31, 2020 Penny</td>
                      <td>65 MB</td>
                      <td>
                        <div className="dropdown">
                          <span className="dropdown-toggle" id="dropdownMenuButton11" data-toggle="dropdown">
                            <i className="ri-more-fill" />
                          </span>
                          <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton11">
                            <a className="dropdown-item" href="#"><i className="ri-eye-fill mr-2" />View</a>
                            <a className="dropdown-item" href="#"><i className="ri-delete-bin-6-fill mr-2" />Delete</a>
                            <a className="dropdown-item" href="#"><i className="ri-pencil-fill mr-2" />Edit</a>
                            <a className="dropdown-item" href="#"><i className="ri-printer-fill mr-2" />Print</a>
                            <a className="dropdown-item" href="#"><i className="ri-file-download-fill mr-2" />Download</a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <div className="mr-3">
                            <a href="#"><img src="../assets/images/layouts/page-4/xlsx.png" className="img-fluid avatar-30" alt="image1" /></a>
                          </div>
                          <div data-title="Alexa8.xlsx" data-load-file="file" data-load-target="#resolte-contaniner" data-url="../assets/vendor/doc-viewer/files/demo.xlsx" data-toggle="modal" data-target="#exampleModal" style={{cursor: 'pointer'}}>Alexa8.xlsx</div>
                        </div>
                      </td>
                      <td>Banny</td>
                      <td>Mar 30, 2020 Banny</td>
                      <td>90 MB</td>
                      <td>
                        <div className="dropdown">
                          <span className="dropdown-toggle" id="dropdownMenuButton13" data-toggle="dropdown">
                            <i className="ri-more-fill" />
                          </span>
                          <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton13">
                            <a className="dropdown-item" href="#"><i className="ri-eye-fill mr-2" />View</a>
                            <a className="dropdown-item" href="#"><i className="ri-delete-bin-6-fill mr-2" />Delete</a>
                            <a className="dropdown-item" href="#"><i className="ri-pencil-fill mr-2" />Edit</a>
                            <a className="dropdown-item" href="#"><i className="ri-printer-fill mr-2" />Print</a>
                            <a className="dropdown-item" href="#"><i className="ri-file-download-fill mr-2" />Download</a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <div className="mr-3">
                            <a href="#"><img src="../assets/images/layouts/page-4/ppt.png" className="img-fluid avatar-30" alt="image1" /></a>
                          </div>
                          <div data-load-file="file" data-load-target="#resolte-contaniner" data-url="../assets/vendor/doc-viewer/files/demo.docx" data-toggle="modal" data-target="#exampleModal" data-title="alexa7.pptx" style={{cursor: 'pointer'}}>Alexa7.pptx</div>
                        </div>
                      </td>
                      <td>Me</td>
                      <td>Apr 04, 2020 me</td>
                      <td>10 MB</td>
                      <td>
                        <div className="dropdown">
                          <span className="dropdown-toggle" id="dropdownMenuButton12" data-toggle="dropdown">
                            <i className="ri-more-fill" />
                          </span>
                          <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton12">
                            <a className="dropdown-item" href="#"><i className="ri-eye-fill mr-2" />View</a>
                            <a className="dropdown-item" href="#"><i className="ri-delete-bin-6-fill mr-2" />Delete</a>
                            <a className="dropdown-item" href="#"><i className="ri-pencil-fill mr-2" />Edit</a>
                            <a className="dropdown-item" href="#"><i className="ri-printer-fill mr-2" />Print</a>
                            <a className="dropdown-item" href="#"><i className="ri-file-download-fill mr-2" />Download</a>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> */}
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
    </>
  )
}

export default MyDrive


 {/* <div className="icon icon-grid i-grid">
      <div className="row">
        <div className="col-lg-12">
          <div className="card card-block card-stretch card-transparent">
            <div className="card-header d-flex justify-content-between pb-0">
              <div className="header-title">
                <h4 className="card-title">Images</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="card card-block card-stretch card-height">
            <div className="card-body image-thumb ">
              <div className="mb-4 text-center p-3 rounded iq-thumb">
                <a className="image-popup-vertical-fit" href="../assets/images/layouts/page-1/01.png">
                  <img src="../assets/images/layouts/page-1/01.png" className="img-fluid" alt="images" />  
                  <div className="iq-image-overlay" />
                </a>           
              </div>
              <h6>Alexa.jpeg</h6>          
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="card card-block card-stretch card-height">
            <div className="card-body image-thumb">
              <div className="mb-4 text-center p-3 rounded iq-thumb">
                <a className="image-popup-vertical-fit" href="../assets/images/layouts/page-1/02.png">
                  <img src="../assets/images/layouts/page-1/02.png" className="img-fluid" alt="images" />  
                  <div className="iq-image-overlay" />
                </a>           
              </div>
              <h6>Eliminator.png</h6>          
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="card card-block card-stretch card-height">
            <div className="card-body image-thumb">
              <div className="mb-4 text-center p-3 rounded iq-thumb">
                <a className="image-popup-vertical-fit" href="../assets/images/layouts/page-1/03.png">
                  <img src="../assets/images/layouts/page-1/03.png" className="img-fluid" alt="images" />  
                  <div className="iq-image-overlay" />
                </a>           
              </div>
              <h6>Screenshot.svg</h6>        
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="card card-block card-stretch card-height">
            <div className="card-body image-thumb">
              <div className="mb-4 text-center p-3 rounded iq-thumb">
                <a className="image-popup-vertical-fit" href="../assets/images/layouts/page-1/04.png">
                  <img src="../assets/images/layouts/page-1/04.png" className="img-fluid" alt="images" />  
                  <div className="iq-image-overlay" />
                  <div className="overlay-img-icon">
                    <i className="las la-play-circle" />
                  </div> 
                </a>           
              </div>
              <h6>Video.mp4</h6>            
            </div>
          </div>
        </div>              
        <div className="col-lg-12">
          <div className="card card-block card-stretch card-transparent">
            <div className="card-header d-flex justify-content-between pb-0">
              <div className="header-title">
                <h4 className="card-title">Documents</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="card card-block card-stretch card-height">
            <div className="card-body image-thumb">
              <div className="mb-4 text-center p-3 rounded iq-thumb">
                <div className="iq-image-overlay" />
                <a href="#" data-title="Mobile-plan.pdf" data-load-file="file" data-load-target="#resolte-contaniner" data-url="../assets/vendor/doc-viewer/files/demo.pdf" data-toggle="modal" data-target="#exampleModal"><img src="../assets/images/layouts/page-1/pdf.png" className="img-fluid" alt="image1" /></a>         
              </div>
              <h6>Mobile-plan.pdf</h6>            
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="card card-block card-stretch card-height">
            <div className="card-body image-thumb">
              <div className="mb-4 text-center p-3 rounded iq-thumb">
                <div className="iq-image-overlay" />
                <a href="#" data-title="Strategy.docx" data-load-file="file" data-load-target="#resolte-contaniner" data-url="../assets/vendor/doc-viewer/files/demo.docx" data-toggle="modal" data-target="#exampleModal"><img src="../assets/images/layouts/page-1/doc.png" className="img-fluid" alt="image1" /></a>
              </div>
              <h6>Strategy.docx</h6>     
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="card card-block card-stretch card-height">
            <div className="card-body image-thumb">
              <div className="mb-4 text-center p-3 rounded iq-thumb">
                <div className="iq-image-overlay" />
                <a href="#" data-title="Web.xlsx" data-load-file="file" data-load-target="#resolte-contaniner" data-url="../assets/vendor/doc-viewer/files/demo.xlsx" data-toggle="modal" data-target="#exampleModal"><img src="../assets/images/layouts/page-1/xlsx.png" className="img-fluid" alt="image1" /></a>
              </div>
              <h6>Web.xlsx</h6> 
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="card card-block card-stretch card-height">
            <div className="card-body image-thumb">
              <div className="mb-4 text-center p-3 rounded iq-thumb">
                <div className="iq-image-overlay" />
                <a href="#" data-title="Testing.pptx" data-load-file="file" data-load-target="#resolte-contaniner" data-url="../assets/vendor/doc-viewer/files/demo.pptx" data-toggle="modal" data-target="#exampleModal"><img src="../assets/images/layouts/page-1/ppt.png" className="img-fluid" alt="image1" /></a>           
              </div>
              <h6>Testing.pptx</h6>          
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="icon icon-grid i-list">
      <div className="row">
        <div className="col-lg-12">                        
          <div className="card card-block card-stretch card-transparent">
            <div className="card-header d-flex justify-content-between pb-0">
              <div className="header-title">
                <h4 className="card-title">list View</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="card card-block card-stretch card-height">
            <div className="card-body">
              <div className="table-responsive">
                <table className="table mb-0 table-borderless tbl-server-info">
                  <thead>
                    <tr>
                      <th scope="col">Name</th>
                      <th scope="col">Owner</th>
                      <th scope="col">Last Edit</th>
                      <th scope="col">File Size</th>
                      <th scope="col" />
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <div className="mr-3">
                            <a href="#"><img src="../assets/images/layouts/page-1/01.png" className="img-fluid avatar-30" alt="image1" /></a>
                          </div>
                          Alexa.jpeg
                        </div>
                      </td>
                      <td>Me</td>
                      <td>jan 21, 2020 me</td>
                      <td>02 MB</td>
                      <td>
                        <div className="dropdown">
                          <span className="dropdown-toggle" id="dropdownMenuButton6" data-toggle="dropdown">
                            <i className="ri-more-fill" />
                          </span>
                          <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton6">
                            <a className="dropdown-item" href="#"><i className="ri-eye-fill mr-2" />View</a>
                            <a className="dropdown-item" href="#"><i className="ri-delete-bin-6-fill mr-2" />Delete</a>
                            <a className="dropdown-item" href="#"><i className="ri-pencil-fill mr-2" />Edit</a>
                            <a className="dropdown-item" href="#"><i className="ri-printer-fill mr-2" />Print</a>
                            <a className="dropdown-item" href="#"><i className="ri-file-download-fill mr-2" />Download</a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <div className="mr-3">
                            <a href="#"><img src="../assets/images/layouts/page-1/02.png" className="img-fluid avatar-30" alt="image1" /></a>
                          </div>
                          Alexa2.png
                        </div>
                      </td>
                      <td>Poul Molive</td>
                      <td>jan 25, 2020 Poul Molive</td>
                      <td>64 MB</td>
                      <td>
                        <div className="dropdown">
                          <span className="dropdown-toggle" id="dropdownMenuButton7" data-toggle="dropdown">
                            <i className="ri-more-fill" />
                          </span>
                          <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton7">
                            <a className="dropdown-item" href="#"><i className="ri-eye-fill mr-2" />View</a>
                            <a className="dropdown-item" href="#"><i className="ri-delete-bin-6-fill mr-2" />Delete</a>
                            <a className="dropdown-item" href="#"><i className="ri-pencil-fill mr-2" />Edit</a>
                            <a className="dropdown-item" href="#"><i className="ri-printer-fill mr-2" />Print</a>
                            <a className="dropdown-item" href="#"><i className="ri-file-download-fill mr-2" />Download</a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <div className="mr-3">
                            <a href="#"><img src="../assets/images/layouts/page-1/03.png" className="img-fluid avatar-30" alt="image1" /></a>
                          </div>
                          Alexa3.svg
                        </div>
                      </td>
                      <td>Me</td>
                      <td>Mar 30, 2020 Gail Forcewind</td>
                      <td>30 MB</td>
                      <td>
                        <div className="dropdown">
                          <span className="dropdown-toggle" id="dropdownMenuButton8" data-toggle="dropdown">
                            <i className="ri-more-fill" />
                          </span>
                          <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton8">
                            <a className="dropdown-item" href="#"><i className="ri-eye-fill mr-2" />View</a>
                            <a className="dropdown-item" href="#"><i className="ri-delete-bin-6-fill mr-2" />Delete</a>
                            <a className="dropdown-item" href="#"><i className="ri-pencil-fill mr-2" />Edit</a>
                            <a className="dropdown-item" href="#"><i className="ri-printer-fill mr-2" />Print</a>
                            <a className="dropdown-item" href="#"><i className="ri-file-download-fill mr-2" />Download</a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <div className="mr-3">
                            <a href="#"><img src="../assets/images/layouts/page-1/04.png" className="img-fluid avatar-30" alt="image1" /></a>
                          </div>
                          Alexa Video.mp4
                        </div>
                      </td>
                      <td>Me</td>
                      <td>Mar 30, 2020 Gail Forcewind</td>
                      <td>10 MB</td>
                      <td>
                        <div className="dropdown">
                          <span className="dropdown-toggle" id="dropdownMenuButton9" data-toggle="dropdown">
                            <i className="ri-more-fill" />
                          </span>
                          <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton9">
                            <a className="dropdown-item" href="#"><i className="ri-eye-fill mr-2" />View</a>
                            <a className="dropdown-item" href="#"><i className="ri-delete-bin-6-fill mr-2" />Delete</a>
                            <a className="dropdown-item" href="#"><i className="ri-pencil-fill mr-2" />Edit</a>
                            <a className="dropdown-item" href="#"><i className="ri-printer-fill mr-2" />Print</a>
                            <a className="dropdown-item" href="#"><i className="ri-file-download-fill mr-2" />Download</a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <div className="mr-3">
                            <a href="#"><img src="../assets/images/layouts/page-4/pdf.png" className="img-fluid avatar-30" alt="image1" /></a>
                          </div>
                          <div data-load-file="file" data-load-target="#resolte-contaniner" data-url="../assets/vendor/doc-viewer/files/demo.pdf" data-toggle="modal" data-target="#exampleModal" data-title="alexa5.pdf" style={{cursor: 'pointer'}}>Alexa5.pdf</div>
                        </div>
                      </td>
                      <td>Me</td>
                      <td>Mar 30, 2020 Gail Forcewind</td>
                      <td>10 MB</td>
                      <td>
                        <div className="dropdown">
                          <span className="dropdown-toggle" id="dropdownMenuButton10" data-toggle="dropdown">
                            <i className="ri-more-fill" />
                          </span>
                          <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton10">
                            <a className="dropdown-item" href="#"><i className="ri-eye-fill mr-2" />View</a>
                            <a className="dropdown-item" href="#"><i className="ri-delete-bin-6-fill mr-2" />Delete</a>
                            <a className="dropdown-item" href="#"><i className="ri-pencil-fill mr-2" />Edit</a>
                            <a className="dropdown-item" href="#"><i className="ri-printer-fill mr-2" />Print</a>
                            <a className="dropdown-item" href="#"><i className="ri-file-download-fill mr-2" />Download</a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <div className="mr-3">
                            <a href="#"><img src="../assets/images/layouts/page-4/doc.png" className="img-fluid avatar-30" alt="image1" /></a>
                          </div>
                          <div data-load-file="file" data-load-target="#resolte-contaniner" data-url="../assets/vendor/doc-viewer/files/demo.docx" data-toggle="modal" data-target="#exampleModal" data-title="alexa6.docx" style={{cursor: 'pointer'}}>Alexa6.docx</div>
                        </div>
                      </td>
                      <td>Penny</td>
                      <td>Mar 31, 2020 Penny</td>
                      <td>65 MB</td>
                      <td>
                        <div className="dropdown">
                          <span className="dropdown-toggle" id="dropdownMenuButton11" data-toggle="dropdown">
                            <i className="ri-more-fill" />
                          </span>
                          <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton11">
                            <a className="dropdown-item" href="#"><i className="ri-eye-fill mr-2" />View</a>
                            <a className="dropdown-item" href="#"><i className="ri-delete-bin-6-fill mr-2" />Delete</a>
                            <a className="dropdown-item" href="#"><i className="ri-pencil-fill mr-2" />Edit</a>
                            <a className="dropdown-item" href="#"><i className="ri-printer-fill mr-2" />Print</a>
                            <a className="dropdown-item" href="#"><i className="ri-file-download-fill mr-2" />Download</a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <div className="mr-3">
                            <a href="#"><img src="../assets/images/layouts/page-4/xlsx.png" className="img-fluid avatar-30" alt="image1" /></a>
                          </div>
                          <div data-title="Alexa8.xlsx" data-load-file="file" data-load-target="#resolte-contaniner" data-url="../assets/vendor/doc-viewer/files/demo.xlsx" data-toggle="modal" data-target="#exampleModal" style={{cursor: 'pointer'}}>Alexa8.xlsx</div>
                        </div>
                      </td>
                      <td>Banny</td>
                      <td>Mar 30, 2020 Banny</td>
                      <td>90 MB</td>
                      <td>
                        <div className="dropdown">
                          <span className="dropdown-toggle" id="dropdownMenuButton13" data-toggle="dropdown">
                            <i className="ri-more-fill" />
                          </span>
                          <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton13">
                            <a className="dropdown-item" href="#"><i className="ri-eye-fill mr-2" />View</a>
                            <a className="dropdown-item" href="#"><i className="ri-delete-bin-6-fill mr-2" />Delete</a>
                            <a className="dropdown-item" href="#"><i className="ri-pencil-fill mr-2" />Edit</a>
                            <a className="dropdown-item" href="#"><i className="ri-printer-fill mr-2" />Print</a>
                            <a className="dropdown-item" href="#"><i className="ri-file-download-fill mr-2" />Download</a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <div className="mr-3">
                            <a href="#"><img src="../assets/images/layouts/page-4/ppt.png" className="img-fluid avatar-30" alt="image1" /></a>
                          </div>
                          <div data-load-file="file" data-load-target="#resolte-contaniner" data-url="../assets/vendor/doc-viewer/files/demo.docx" data-toggle="modal" data-target="#exampleModal" data-title="alexa7.pptx" style={{cursor: 'pointer'}}>Alexa7.pptx</div>
                        </div>
                      </td>
                      <td>Me</td>
                      <td>Apr 04, 2020 me</td>
                      <td>10 MB</td>
                      <td>
                        <div className="dropdown">
                          <span className="dropdown-toggle" id="dropdownMenuButton12" data-toggle="dropdown">
                            <i className="ri-more-fill" />
                          </span>
                          <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton12">
                            <a className="dropdown-item" href="#"><i className="ri-eye-fill mr-2" />View</a>
                            <a className="dropdown-item" href="#"><i className="ri-delete-bin-6-fill mr-2" />Delete</a>
                            <a className="dropdown-item" href="#"><i className="ri-pencil-fill mr-2" />Edit</a>
                            <a className="dropdown-item" href="#"><i className="ri-printer-fill mr-2" />Print</a>
                            <a className="dropdown-item" href="#"><i className="ri-file-download-fill mr-2" />Download</a>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> */}