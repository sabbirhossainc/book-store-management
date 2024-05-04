const Loading = ({ times }) => {
  return (
    <div className="lws-bookContainer">
      {/* <!-- Loading Card  --> */}
      {Array.from({ length: times }).map((_, index) => (
        <div className="book-card" key={index}>
          {/* heading */}
          <img className="skeleton skeleton-text skeleton-image" alt="" />
          <div className="flex-1 h-auto pr-2 pt-5 flex flex-col space-y-10">
            <div className="flex items-center justify-between mt-4">
              <span className="skeleton skeleton-text skeleton-feature"></span>
              <div className="skeleton skeleton-text skeleton-feature"></div>
            </div>
            {/* body */}
            <div className="cardbody">
              <div className="space-y-4 mt-4">
                <div className="skeleton skeleton-text skeleton-feature"></div>
                <h3 className="headertitle">
                  <div className="skeleton skeleton-text skeleton-text__body"></div>
                </h3>
                <div className="skeleton skeleton-text"></div>
                <div className="skeleton skeleton-text"></div>
                <div className="cardfooter">
                  <div className="skeleton skeleton-text skeleton-footer"></div>
                </div>
              </div>
            </div>
          </div>
          <span className="sr-only">Loading...</span>
        </div>
      ))}
    </div>
  );
};

export default Loading;
