"use client"
import Link from "next/link";
import { fetchInitials } from "@/util/FindInitials";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import SearchForm from "./SearchForm";
import { useRouter } from "next/navigation";
const Navbar = () => {
  const router = useRouter();
  let userData = useSelector((state) => state.user);
  let [alphabet, setAlphabet] = useState("");
  let [isSignin, setSignIn] = useState(false);
  
  useEffect(() => {
    fetchInitials(userData, setAlphabet);
  }, [userData]);

  useEffect(() =>{
    const token = localStorage.getItem("reel_instance_id");
    if (!token) {
      setSignIn(false);
    } else {
      setSignIn(true);
    }
  }, [])

  const handleSignin = () => {
    router.push("/auth/signin");
  };
  return (
    <>
    <div className="iq-top-navbar">
          <div className="iq-navbar-custom">
            <nav className="navbar navbar-expand-lg navbar-light p-0">
              <div className="iq-navbar-logo d-flex align-items-center justify-content-between">
                <i className="ri-menu-line wrapper-menu" />
                <a href="index.html" className="header-logo">
                  <img
                    src="assets/images/logo.png"
                    className="img-fluid rounded-normal light-logo"
                    alt="logo"
                  />
                  <img
                    src="assets/images/logo-white.png"
                    className="img-fluid rounded-normal darkmode-logo"
                    alt="logo"
                  />
                </a>
              </div>
              <div className="iq-search-bar device-search">
 <SearchForm />
            </div>
              <div className="d-flex align-items-center">
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-label="Toggle navigation"
                >
                  <i className="ri-menu-3-line" />
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ml-auto navbar-list align-items-center">
                    <li className="nav-item nav-icon search-content">
                      <a
                        href="#"
                        className="search-toggle rounded"
                        id="dropdownSearch"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="ri-search-line" />
                      </a>
                      <div
                        className="iq-search-bar iq-sub-dropdown dropdown-menu"
                        aria-labelledby="dropdownSearch"
                      >
                        <form action="#" className="searchbox p-2">
                          <div className="form-group mb-0 position-relative">
                            <input
                              type="text"
                              className="text search-input font-size-12"
                              placeholder="type here to search..."
                            />
                            <a href="#" className="search-link">
                              <i className="las la-search" />
                            </a>
                          </div>
                        </form>
                      </div>
                    </li>
                    <li className="nav-item nav-icon dropdown">
                    <a
                      href="#"
                      className="search-toggle dropdown-toggle"
                      id="dropdownMenuButton01"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i className="ri-question-line" />
                    </a>
                    <div
                      className="iq-sub-dropdown dropdown-menu"
                      aria-labelledby="dropdownMenuButton01"
                    >
                      <div className="card shadow-none m-0">
                        <div className="card-body p-0 ">
                          <div className="p-3">
                            <Link href="/help" className="iq-sub-card pt-0">
                              <i className="ri-questionnaire-line" />
                              Help
                            </Link>
                            <a href="#" className="iq-sub-card">
                              <i className="ri-recycle-line" />
                              Training
                            </a>
                            <a href="#" className="iq-sub-card">
                              <i className="ri-refresh-line" />
                              Updates
                            </a>
                            <a href="#" className="iq-sub-card">
                              <i className="ri-service-line" />
                              Terms and Policy
                            </a>
                            <a href="#" className="iq-sub-card">
                              <i className="ri-feedback-line" />
                              Send Feedback
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                    <li className="nav-item nav-icon dropdown">
                      <a
                        href="#"
                        className="search-toggle dropdown-toggle"
                        id="dropdownMenuButton02"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="ri-settings-3-line" />
                      </a>
                      <div
                        className="iq-sub-dropdown dropdown-menu"
                        aria-labelledby="dropdownMenuButton02"
                      >
                        <div className="card shadow-none m-0">
                          <div className="card-body p-0 ">
                            <div className="p-3">
                              <a href="#" className="iq-sub-card pt-0">
                                <i className="ri-settings-3-line" /> Settings
                              </a>
                              <a href="#" className="iq-sub-card">
                                <i className="ri-hard-drive-line" /> Get Drive
                                for desktop
                              </a>
                              <a href="#" className="iq-sub-card">
                                <i className="ri-keyboard-line" /> Keyboard
                                Shortcuts
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    {isSignin ? (
                    <li className="nav-item nav-icon dropdown caption-content">
                      <a
                        href="#"
                        className="search-toggle dropdown-toggle"
                        id="dropdownMenuButton03"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <div className="caption bg-primary line-height">
                          {alphabet}
                        </div>
                      </a>
                      <div
                        className="iq-sub-dropdown dropdown-menu"
                        aria-labelledby="dropdownMenuButton03"
                      >
                        <div className="card mb-0">
                          <div className="card-header d-flex justify-content-between align-items-center mb-0">
                            <div className="header-title">
                              <h4 className="card-title mb-0">Profile</h4>
                            </div>
                            <div className="close-data text-right badge badge-primary pointer ">
                              <i className="ri-close-fill" />
                            </div>
                          </div>
                          <div className="card-body">
                            <div className="profile-header">
                              <div className="cover-container text-center">
                                <div className="rounded-circle profile-icon bg-primary mx-auto d-block">
                                  {alphabet}
                                  <a href></a>
                                </div>
                                <div className="profile-detail mt-3">
                                  <h5>
                                    <a href="../app/user-profile-edit.html">
                                      {userData.firstName} {userData.lastName}
                                    </a>
                                  </h5>
                                  <p> {userData.email}</p>
                                </div>
                                <button
                                  type="button"
                                  className="btn btn-primary"
                                >
                                  Sign Out
                                </button>
                              </div>
                              {/*
                               <div className="profile-details mt-4 pt-4 border-top">
                              <div className="media align-items-center mb-3">
                                <div className="rounded-circle iq-card-icon-small bg-primary">
                                  A
                                </div>
                                <div className="media-body ml-3">
                                  <div className="media justify-content-between">
                                    <h6 className="mb-0">Anna Mull</h6>
                                    <p className="mb-0 font-size-12">
                                      <i>Signed Out</i>
                                    </p>
                                  </div>
                                  <p className="mb-0 font-size-12">
                                    annamull@gmail.com
                                  </p>
                                </div>
                              </div>
                              <div className="media align-items-center mb-3">
                                <div className="rounded-circle iq-card-icon-small bg-success">
                                  K
                                </div>
                                <div className="media-body ml-3">
                                  <div className="media justify-content-between">
                                    <h6 className="mb-0">King Poilin</h6>
                                    <p className="mb-0 font-size-12">
                                      <i>Signed Out</i>
                                    </p>
                                  </div>
                                  <p className="mb-0 font-size-12">
                                    kingpoilin@gmail.com
                                  </p>
                                </div>
                              </div>
                              <div className="media align-items-center">
                                <div className="rounded-circle iq-card-icon-small bg-danger">
                                  D
                                </div>
                                <div className="media-body ml-3">
                                  <div className="media justify-content-between">
                                    <h6 className="mb-0">Devid Worner</h6>
                                    <p className="mb-0 font-size-12">
                                      <i>Signed Out</i>
                                    </p>
                                  </div>
                                  <p className="mb-0 font-size-12">
                                    devidworner@gmail.com
                                  </p>
                                </div>
                              </div>
                            </div>
                             */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  ) : (
                    <li>
                     <button type="button" className="btn btn-primary" onClick={handleSignin}>Sign In</button>
                    </li>
                  )}
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>

    </>
  )
}

export default Navbar