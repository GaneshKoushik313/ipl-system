import React from 'react'

export default function Stadium(){
    return(
        <div className="mt-10 container w-100"> 
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th className="w-1">ID</th>
                        <th>NAME</th>
                        <th>CAPACITY</th>
                        <th>LOCATION</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="w-1">1</td>
                        <td>Chinnaswamy Stadium</td>
                        <td>10,00,000</td>
                        <td>Bengaluru</td>
                    </tr>
                    <tr>
                        <td className="w-1">2</td>
                        <td>Motera Stadium</td>
                        <td>20,00,000</td>
                        <td>Punjab</td>
                    </tr>
                    <tr>
                        <td className="w-1">3</td>
                        <td>Feroz Shah Kotla</td>
                        <td>30,00,000</td>
                        <td>Delhi</td>
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