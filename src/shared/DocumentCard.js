
const DocumentCard = ({document}) => {
  return (
    <>
             <div className="col-lg-12">
                <div className="card card-block card-stretch card-transparent ">
                  <div className="card-header d-flex justify-content-between pb-0">
                    <div className="header-title">
                      <h4 className="card-title">Documents</h4>
                    </div>
                    <div className="card-header-toolbar d-flex align-items-center">
                      <a href="./page-folders.html" className=" view-more">
                        View All
                      </a>
                    </div>
                  </div>
                </div>
              </div>
     {document.map((doc) => (
                              <div className="col-lg-3 col-md-6 col-sm-6" key={doc.id}>
                              <div className="card card-block card-stretch card-height">
                                <div className="card-body image-thumb">
                                  <a
                                    href="#"
                                    data-title="Terms.pdf"
                                    data-load-file="file"
                                    data-load-target="#resolte-contaniner"
                                    data-url="assets/vendor/doc-viewer/files/demo.pdf"
                                    data-toggle="modal"
                                    data-target="#exampleModal"
                                  >
                                    <div className="mb-4 text-center p-3 rounded iq-thumb">
                                      <div className="iq-image-overlay" />
                                      <img
                                        src={doc.image}
                                        className="img-fluid"
                                        alt="image1"
                                      />
                                    </div>
                                    <h6>{doc.name}</h6>
                                  </a>
                                </div>
                              </div>
                            </div>
              ))}
    </>
  )
}

export default DocumentCard