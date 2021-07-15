import React from "react";
// import "./errorBoundary.scss";
import hunter from "assets/login/img/hunter.png";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: "",
      errorMessage: "",
    };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      hasError: true,
      error: error,
      errorMessage: errorInfo,
    });
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) {
      // Puedes renderizar cualquier interfaz de repuesto

      return (
        <article className="wrapper">
          <section className="content d-flex align-items-center justify-content-center">
            <div className="  ">
              <div className=" d-flex justify-content-center">
                <img
                  src={hunter}
                  className=" d-flex justify-content-center w-50"
                />
              </div>

              <h2 className="text-white">
                <p>
                  La página que estás viendo es porque ha pasado un error muy
                </p>

                <p>
                  grave en los servicios del sistema, y por esto ha dejado de
                  funcionar.
                </p>
              </h2>
              <di className="d-flex justify-content-center mt-3">
                <a className="  btn btn-primary btn-lg w-25 " href="/">
                  <span style={{ fontSize: "30px" }}>Ir al inicio</span>
                </a>
              </di>
            </div>
            {/* <div id="notfound">
              <div className="notfound">
                <div className="notfound-404">
                  <h1>Oops!</h1>
                </div>
                <img src={hunter} alt="Newbound logo" className="w-50" />
                <h2>El sistema Hunter dejo de funcionar</h2>
                <p>
                  La pagina que estas viendo es porque ha pasado un error muy
                  grave en los servicios del sistema y ha dejado de funcionar.
                </p>
                <a className="btn btn-primary" href="/">
                  Ir al inicio
                </a>
              </div>
            </div> */}
          </section>
        </article>
      );
    }

    return children;
  }
}

export default ErrorBoundary;
