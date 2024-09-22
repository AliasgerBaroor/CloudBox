import Link from "next/link";
import styles from "../app/auth/auth-button.module.css";

const LoginPopupModal = () => {
  return (
    <>
      <div className="modal fade" id="LoginPopupModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true" style={{ display: 'none' }}>
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Signin in</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
                <div className="text-center">
                <h6 className="m-0">Use your email or other service to</h6>
                <h6 className="m-0 mb-3">continue with Cloud Colors</h6>
                </div>

              <a href="javascript:void(0)" className="d-flex justify-content-center">
                <div className={styles['g-sign-in-button']}> {/* Access CSS module class */}
                  <div className={styles['content-wrapper']}> {/* Use scoped class */}
                    <div className={styles['logo-wrapper']}> {/* Use scoped class */}
                      <img src="https://developers.google.com/identity/images/g-logo.png" alt="Google Logo" />
                    </div>
                    <span className={styles['text-container']}> {/* Use scoped class */}
                      <span>Sign in with Google</span>
                    </span>
                  </div>
                </div>
              </a>
              <div  className="d-flex justify-content-center">
              <Link href="/auth/signup" className="btn btn-primary mt-2 d-flex align-items-center justify-content-center" style={{  width: '240px',
  height: '50px'}}>Sign in with Email</Link>
              </div>
            </div>
            <div className="modal-footer d-flex justify-content-center">
            <a href="javascript:void(0)" className="text-dark">By continuing you agree to our <span className="text-primary">Terms of Service</span>.</a>
            <a href="javascript:void(0)" className="text-dark"> Read our <span className="text-primary">privacy policy</span></a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPopupModal;
