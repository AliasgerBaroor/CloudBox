import CreateFolderModal from "./CreateFolderModal"

const Sidebar = () => {
  return (
    <>
            <div className="iq-sidebar  sidebar-default ">
          <div className="iq-sidebar-logo d-flex align-items-center justify-content-between">
            <a href="index.html" className="header-logo">
              <img
                src="/assets/images/logo.png"
                className="img-fluid rounded-normal light-logo"
                alt="logo"
              />
            </a>
            <div className="iq-menu-bt-sidebar">
              <i className="las la-bars wrapper-menu" />
            </div>
          </div>
          <div className="data-scrollbar" data-scroll={1}>
            <div className="new-create select-dropdown input-prepend input-append">
              <div className="btn-group">
                <div data-toggle="dropdown">
                  <div className="search-query selet-caption pointer">
                    <i className="las la-plus pr-2" />
                    Create New
                  </div>
                  <span className="search-replace" />
                  <span className="caret">{/*icon*/}</span>
                </div>
                <ul className="dropdown-menu">
                  <li>
                    <div className="item pointer" data-toggle="modal" data-target="#createFodlerModal">
                      <i className="ri-folder-add-line pr-3" />
                      New Folder
                    </div>
                  </li>
                  <li>
                    <div className="item pointer">
                      <i className="ri-file-upload-line pr-3" />
                      Upload Files
                    </div>
                  </li>
                  <li>
                    <div className="item pointer">
                      <i className="ri-folder-upload-line pr-3" />
                      Upload Folders
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <nav className="iq-sidebar-menu">
              <ul id="iq-sidebar-toggle" className="iq-menu">
                <li className="active">
                  <a href="backend/index.html" className>
                    <i className="las la-home iq-arrow-left" />
                    <span>Dashboard</span>
                  </a>
                  <ul
                    id="dashboard"
                    className="iq-submenu collapse"
                    data-parent="#iq-sidebar-toggle"
                  ></ul>
                </li>
                <li className=" ">
                  <a
                    href="#mydrive"
                    className="collapsed"
                    data-toggle="collapse"
                    aria-expanded="false"
                  >
                    <i className="las la-hdd" />
                    <span>My Drive</span>
                    <i className="las la-angle-right iq-arrow-right arrow-active" />
                    <i className="las la-angle-down iq-arrow-right arrow-hover" />
                  </a>
                  <ul
                    id="mydrive"
                    className="iq-submenu collapse"
                    data-parent="#iq-sidebar-toggle"
                  >
                    <li className=" ">
                      <a href="backend/page-alexa.html">
                        <i className="lab la-blogger-b" />
                        <span>Alexa Workshop</span>
                      </a>
                    </li>
                    <li className=" ">
                      <a href="backend/page-android.html">
                        <i className="las la-share-alt" />
                        <span>Android</span>
                      </a>
                    </li>
                    <li className=" ">
                      <a href="backend/page-brightspot.html">
                        <i className="las la-icons" />
                        <span>Brightspot</span>
                      </a>
                    </li>
                    <li className=" ">
                      <a href="backend/page-ionic.html">
                        <i className="las la-icons" />
                        <span>Ionic Chat App</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className=" ">
                  <a href="backend/page-files.html" className>
                    <i className="lar la-file-alt iq-arrow-left" />
                    <span>Files</span>
                  </a>
                  <ul
                    id="page-files"
                    className="iq-submenu collapse"
                    data-parent="#iq-sidebar-toggle"
                  ></ul>
                </li>
                <li className=" ">
                  <a href="backend/page-folders.html" className>
                    <i className="las la-stopwatch iq-arrow-left" />
                    <span>Recent</span>
                  </a>
                  <ul
                    id="page-folders"
                    className="iq-submenu collapse"
                    data-parent="#iq-sidebar-toggle"
                  ></ul>
                </li>
                <li className=" ">
                  <a href="backend/page-favourite.html" className>
                    <i className="lar la-star" />
                    <span>Favourite</span>
                  </a>
                  <ul
                    id="page-fevourite"
                    className="iq-submenu collapse"
                    data-parent="#iq-sidebar-toggle"
                  ></ul>
                </li>
                <li className=" ">
                  <a href="backend/page-delete.html" className>
                    <i className="las la-trash-alt iq-arrow-left" />
                    <span>Trash</span>
                  </a>
                  <ul
                    id="page-delete"
                    className="iq-submenu collapse"
                    data-parent="#iq-sidebar-toggle"
                  ></ul>
                </li>
                <li className=" ">
                  <a
                    href="#otherpage"
                    className="collapsed"
                    data-toggle="collapse"
                    aria-expanded="false"
                  >
                    <i className="lab la-wpforms iq-arrow-left" />
                    <span>other page</span>
                    <i className="las la-angle-right iq-arrow-right arrow-active" />
                    <i className="las la-angle-down iq-arrow-right arrow-hover" />
                  </a>
                  <ul
                    id="otherpage"
                    className="iq-submenu collapse"
                    data-parent="#iq-sidebar-toggle"
                  >
                    <li className=" ">
                      <a
                        href="#user"
                        className="collapsed"
                        data-toggle="collapse"
                        aria-expanded="false"
                      >
                        <i className="las la-user-cog" />
                        <span>User Details</span>
                        <i className="las la-angle-right iq-arrow-right arrow-active" />
                        <i className="las la-angle-down iq-arrow-right arrow-hover" />
                      </a>
                      <ul
                        id="user"
                        className="iq-submenu collapse"
                        data-parent="#otherpage"
                      >
                        <li className=" ">
                          <a href="app/user-profile.html">
                            <i className="las la-id-card" />
                            <span>User Profile</span>
                          </a>
                        </li>
                        <li className=" ">
                          <a href="app/user-add.html">
                            <i className="las la-user-plus" />
                            <span>User Add</span>
                          </a>
                        </li>
                        <li className=" ">
                          <a href="app/user-list.html">
                            <i className="las la-list-alt" />
                            <span>User List</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className=" ">
                      <a
                        href="#ui"
                        className="collapsed"
                        data-toggle="collapse"
                        aria-expanded="false"
                      >
                        <i className="lab la-uikit iq-arrow-left" />
                        <span>UI Elements</span>
                        <i className="las la-angle-right iq-arrow-right arrow-active" />
                        <i className="las la-angle-down iq-arrow-right arrow-hover" />
                      </a>
                      <ul
                        id="ui"
                        className="iq-submenu collapse"
                        data-parent="#otherpage"
                      >
                        <li className=" ">
                          <a href="backend/ui-avatars.html">
                            <i className="las la-user-tie" />
                            <span>Avatars</span>
                          </a>
                        </li>
                        <li className=" ">
                          <a href="backend/ui-alerts.html">
                            <i className="las la-exclamation-triangle" />
                            <span>Alerts</span>
                          </a>
                        </li>
                        <li className=" ">
                          <a href="backend/ui-badges.html">
                            <i className="las la-id-badge" />
                            <span>Badges</span>
                          </a>
                        </li>
                        <li className=" ">
                          <a href="backend/ui-breadcrumb.html">
                            <i className="las la-ellipsis-h" />
                            <span>Breadcrumb</span>
                          </a>
                        </li>
                        <li className=" ">
                          <a href="backend/ui-buttons.html">
                            <i className="las la-ticket-alt" />
                            <span>Buttons</span>
                          </a>
                        </li>
                        <li className=" ">
                          <a href="backend/ui-buttons-group.html">
                            <i className="las la-object-group" />
                            <span>Buttons Group</span>
                          </a>
                        </li>
                        <li className=" ">
                          <a href="backend/ui-boxshadow.html">
                            <i className="las la-boxes" />
                            <span>Box Shadow</span>
                          </a>
                        </li>
                        <li className=" ">
                          <a href="backend/ui-colors.html">
                            <i className="las la-brush" />
                            <span>Colors</span>
                          </a>
                        </li>
                        <li className=" ">
                          <a href="backend/ui-cards.html">
                            <i className="las la-credit-card" />
                            <span>Cards</span>
                          </a>
                        </li>
                        <li className=" ">
                          <a href="backend/ui-carousel.html">
                            <i className="las la-sliders-h" />
                            <span>Carousel</span>
                          </a>
                        </li>
                        <li className=" ">
                          <a href="backend/ui-grid.html">
                            <i className="las la-th-large" />
                            <span>Grid</span>
                          </a>
                        </li>
                        <li className=" ">
                          <a href="backend/ui-helper-classes.html">
                            <i className="las la-hands-helping" />
                            <span>Helper classes</span>
                          </a>
                        </li>
                        <li className=" ">
                          <a href="backend/ui-images.html">
                            <i className="las la-image" />
                            <span>Images</span>
                          </a>
                        </li>
                        <li className=" ">
                          <a href="backend/ui-list-group.html">
                            <i className="las la-list-alt" />
                            <span>list Group</span>
                          </a>
                        </li>
                        <li className=" ">
                          <a href="backend/ui-media-object.html">
                            <i className="las la-photo-video" />
                            <span>Media</span>
                          </a>
                        </li>
                        <li className=" ">
                          <a href="backend/ui-modal.html">
                            <i className="las la-columns" />
                            <span>Modal</span>
                          </a>
                        </li>
                        <li className=" ">
                          <a href="backend/ui-notifications.html">
                            <i className="las la-bell" />
                            <span>Notifications</span>
                          </a>
                        </li>
                        <li className=" ">
                          <a href="backend/ui-pagination.html">
                            <i className="las la-ellipsis-h" />
                            <span>Pagination</span>
                          </a>
                        </li>
                        <li className=" ">
                          <a href="backend/ui-popovers.html">
                            <i className="las la-spinner" />
                            <span>Popovers</span>
                          </a>
                        </li>
                        <li className=" ">
                          <a href="backend/ui-progressbars.html">
                            <i className="las la-heading" />
                            <span>Progressbars</span>
                          </a>
                        </li>
                        <li className=" ">
                          <a href="backend/ui-typography.html">
                            <i className="las la-tablet" />
                            <span>Typography</span>
                          </a>
                        </li>
                        <li className=" ">
                          <a href="backend/ui-tabs.html">
                            <i className="las la-tablet" />
                            <span>Tabs</span>
                          </a>
                        </li>
                        <li className=" ">
                          <a href="backend/ui-tooltips.html">
                            <i className="las la-magnet" />
                            <span>Tooltips</span>
                          </a>
                        </li>
                        <li className=" ">
                          <a href="backend/ui-embed-video.html">
                            <i className="las la-play-circle" />
                            <span>Video</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className=" ">
                      <a
                        href="#auth"
                        className="collapsed"
                        data-toggle="collapse"
                        aria-expanded="false"
                      >
                        <i className="las la-torah iq-arrow-left" />
                        <span>Authentication</span>
                        <i className="las la-angle-right iq-arrow-right arrow-active" />
                        <i className="las la-angle-down iq-arrow-right arrow-hover" />
                      </a>
                      <ul
                        id="auth"
                        className="iq-submenu collapse"
                        data-parent="#otherpage"
                      >
                        <li className=" ">
                          <a href="backend/auth-sign-in.html">
                            <i className="las la-sign-in-alt" />
                            <span>Login</span>
                          </a>
                        </li>
                        <li className=" ">
                          <a href="backend/auth-sign-up.html">
                            <i className="las la-registered" />
                            <span>Register</span>
                          </a>
                        </li>
                        <li className=" ">
                          <a href="backend/auth-recoverpw.html">
                            <i className="las la-unlock-alt" />
                            <span>Recover Password</span>
                          </a>
                        </li>
                        <li className=" ">
                          <a href="backend/auth-confirm-mail.html">
                            <i className="las la-envelope-square" />
                            <span>Confirm Mail</span>
                          </a>
                        </li>
                        <li className=" ">
                          <a href="backend/auth-lock-screen.html">
                            <i className="las la-lock" />
                            <span>Lock Screen</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className=" ">
                      <a
                        href="#pricing"
                        className="collapsed"
                        data-toggle="collapse"
                        aria-expanded="false"
                      >
                        <i className="las la-coins" />
                        <span>Pricing</span>
                        <i className="las la-angle-right iq-arrow-right arrow-active" />
                        <i className="las la-angle-down iq-arrow-right arrow-hover" />
                      </a>
                      <ul
                        id="pricing"
                        className="iq-submenu collapse"
                        data-parent="#otherpage"
                      >
                        <li className=" ">
                          <a href="backend/pricing.html">
                            <i className="las la-weight" />
                            <span>Pricing 1</span>
                          </a>
                        </li>
                        <li className=" ">
                          <a href="backend/pricing-2.html">
                            <i className="las la-dna" />
                            <span>Pricing 2</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className=" ">
                      <a
                        href="#pages-error"
                        className="collapsed"
                        data-toggle="collapse"
                        aria-expanded="false"
                      >
                        <i className="las la-exclamation-triangle" />
                        <span>Error</span>
                        <i className="las la-angle-right iq-arrow-right arrow-active" />
                        <i className="las la-angle-down iq-arrow-right arrow-hover" />
                      </a>
                      <ul
                        id="pages-error"
                        className="iq-submenu collapse"
                        data-parent="#otherpage"
                      >
                        <li className=" ">
                          <a href="backend/pages-error.html">
                            <i className="las la-bomb" />
                            <span>Error 404</span>
                          </a>
                        </li>
                        <li className=" ">
                          <a href="backend/pages-error-500.html">
                            <i className="las la-exclamation-circle" />
                            <span>Error 500</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className=" ">
                      <a href="backend/pages-blank-page.html">
                        <i className="las la-pager" />
                        <span>Blank Page</span>
                      </a>
                    </li>
                    <li className=" ">
                      <a href="backend/pages-maintenance.html">
                        <i className="las la-cubes" />
                        <span>Maintenance</span>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
            <div className="sidebar-bottom">
              <h4 className="mb-3">
                <i className="las la-cloud mr-2" />
                Storage
              </h4>
              <p>17.1 / 20 GB Used</p>
              <div className="iq-progress-bar mb-3">
                <span
                  className="bg-primary iq-progress progress-1"
                  data-percent={67}
                ></span>
              </div>
              <p>75% Full - 3.9 GB Free</p>
              <a href="#" className="btn btn-outline-primary view-more mt-4">
                Buy Storage
              </a>
            </div>
            <div className="p-3" />
          </div>
        </div>
      <CreateFolderModal />

    </>
  )
}

export default Sidebar