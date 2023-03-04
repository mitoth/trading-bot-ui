export default function Order() {
  return (
    <>
      <div className="row text-center">
        <div className="row">
          <div className="col-auto border">Stock name</div>
          <div className="col-auto border">
            <select
              className="form-select form-select-sm"
              aria-label="Default select example"
            >
              <option selected>Open this select menu</option>
              <option value="1">RVN</option>
              <option value="2">MSFT</option>
              <option value="3">AAPL</option>
            </select>
          </div>
        </div>
        <div className="row">
          <div className="col-auto border">Order type</div>
          <div className="col-auto border">
            <select
              className="form-select form-select-sm"
              aria-label="Default select example"
            >
              <option selected>Open this select menu</option>
              <option value="1">BUY</option>
              <option value="2">SELL</option>
            </select>
          </div>
        </div>
        <div className="row mt-4">Should execute when</div>
        <div className="row justify-content-start ms-1 mt-1">
          <div className="col-auto border">Stock symbol</div>
          <div className="col-auto border ">
            {" "}
            <select
              className="form-select form-select-sm"
              aria-label="Default select example"
            >
              <option selected>Open this select menu</option>
              <option value="1">RVN</option>
              <option value="2">MSFT</option>
              <option value="3">AAPL</option>
            </select>
          </div>
        </div>
        <div className="row justify-content-start ms-1 mt-1">
          <div className="col-auto border">Drops by percent</div>
          <div className="col-4 border" data-bs-theme="dark">
            <input type="text" className="form-control" />
          </div>
        </div>
      </div>
    </>
  );
}
