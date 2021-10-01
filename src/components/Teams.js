import React from 'react'

export default function Teams(){
    return(
        <div className="mt-10 container w-100"> 
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th className="w-1">ID</th>
                        <th>NAME</th>
                        <th>CITY</th>
                        <th>OWNER</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="w-1">1</td>
                        <td>RCB</td>
                        <td>Bengaluru</td>
                        <td>United Spirits</td>
                    </tr>
                    <tr>
                        <td className="w-1">2</td>
                        <td>PBKS</td>
                        <td>Punjab</td>
                        <td>Preity Zinta</td>
                    </tr>
                    <tr>
                        <td className="w-1">3</td>
                        <td>SRJ</td>
                        <td>Hyderabad</td>
                        <td>Kalanithi Maran</td>
                    </tr>
                </tbody>
            </table>
            <div class="d-flex align-items-center font-weight-bold mt-2 justify-content-end">
                <button  class="pagination-list mt-1 ml-2 pointer">
                    <i class="fa fa-chevron-left pagination-part"  tabindex="0"></i>
                </button>
                <span class="px-2 fw-500 fs-14 mt-1">Showing 1 - 10 of 10</span>
                <button class="pagination-list mt-1 mr-2 pointer">
                    <i class="fa fa-chevron-right pagination-part"  tabindex="0"></i>
                </button>
            </div>
        </div>
    )
}