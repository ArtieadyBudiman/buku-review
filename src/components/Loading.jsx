
const Loading = () => {
   return(
      <div className="loading d-flex align-items-center justify-content-center">
         <div className="spinner-border text-secondary" role="status">
            <span className="visually-hidden">Loading...</span>
         </div>
      </div>
   )
}

export default Loading;