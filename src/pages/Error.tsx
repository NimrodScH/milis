import "../views/not-found.css";
import Navigation from "../components/navigation/navigation";

function ErrorPage() {
  return (
    <>
      <div className="home-container1">
        <Navigation path="/" btn="לעמוד הבית" />
        <main className="home-main">
          <div className="home-hero section-container">
            <div className="home-max-width1 max-content-container">
              <div className="home-video-container">
                <div className="not-found-container1">
                  <h3>OOPS! PAGE NOT FOUND</h3>
                  <div className="not-found-container2">
                    <h1 className="not-found-text2">404</h1>
                  </div>
                  <div className="not-found-container3">
                    <h2 className="not-found-text3">
                      WE ARE SORRY, BUT THE PAGE YOU REQUESTED WAS NOT FOUND
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="home-blue-background"></div>
          </div>
        </main>
      </div>
    </>
  );
}

export default ErrorPage;