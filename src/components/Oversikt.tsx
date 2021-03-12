import React, { useEffect, useState } from "react";
import { getEnheter } from "../services/EnheterService";

const Oversikt = () => {
  const [enheterCount, setEnheterCount] = useState<number>();
  const [enkCount, setEnkCount] = useState<number>();
  const [asCount, setAsCount] = useState<number>();
  const [asaCount, setAsaCount] = useState<number>();
  useEffect(() => {
    getEnheter({ size: 1 }).then((res) =>
      setEnheterCount(res.page.totalElements)
    );
    getEnheter({ size: 1, organisasjonsform: "ENK" }).then((res) =>
      setEnkCount(res.page.totalElements)
    );
    getEnheter({ size: 1, organisasjonsform: "AS" }).then((res) =>
      setAsCount(res.page.totalElements)
    );
    getEnheter({ size: 1, organisasjonsform: "ASA" }).then((res) =>
      setAsaCount(res.page.totalElements)
    );
  }, []);

  return (
    <div className="container">
      <div className="jumbotron jumbotron-fluid bg-dark my-4">
        <div className="container">
          <h1 className="display-4">{enheterCount?.toLocaleString()}</h1>
          <p className="lead">
            juridiske personer og andre enheter er registrert i Norge.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="jumbotron bg-dark my-4">
            <div className="container">
              <h1 className="display-4">{enkCount?.toLocaleString()}</h1>
              <p className="lead">av disse er enkeltmannsforetak.</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="jumbotron bg-dark my-4">
            <div className="container">
              <h1 className="display-4">{asCount?.toLocaleString()}</h1>
              <p className="lead">er aksjeselskaper.</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="jumbotron bg-dark my-4">
            <div className="container">
              <h1 className="display-4">{asaCount?.toLocaleString()}</h1>
              <p className="lead">er almennaksjeselskaper.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Oversikt;
