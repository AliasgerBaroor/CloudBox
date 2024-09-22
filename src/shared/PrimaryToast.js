
const PrimaryToast = ({title, msg}) => {
  return (
    <>
          <div aria-live="polite" aria-atomic="true" style={{ position: 'fixed', top: 10, right: 10, zIndex: 1050, minWidth: '300px' }}>
  <div className="toast fade show bg-primary text-white rounded p-3" role="alert" aria-live="assertive" aria-atomic="true">
    <div className="toast-header bg-primary text-white d-flex justify-content-between align-items-center">
    <i className="las la-lg la-check-circle mr-2" />
      <strong className="mr-auto">{title}</strong>
      <small>just now</small>
      <button type="button" className="ml-2 close" data-dismiss="toast" aria-label="Close">
        <span aria-hidden="true">×</span>
      </button>
    </div>
    <div className="toast-body mt-2">
      {msg}
    </div>
  </div>
</div>
    </>
  )
}

export default PrimaryToast