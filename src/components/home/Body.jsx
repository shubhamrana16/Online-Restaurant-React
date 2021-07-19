import React  from 'react'
import Header from '../layout/Header';
 
function  Body() {

  

    return (
        <div>
        <Header />
        <div className="home-main">
        <form className="d-flex justify-content-center">
          <div className="form-group m-0">
            <input
              type="text"
              className="form-control search-form-control"
              placeholder="Enter delivery address"
            />
          </div>
          <button type="submit" className="ml-2 btn btn-danger btn-sm">
            Search
          </button>
        </form>
      </div>
       
        </div>
    )
}

export default  Body
