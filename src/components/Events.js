import React from 'react'

export default function Events(){
    return(
        <div className="mt-10 container w-100"> 
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th className="w-1">ID</th>
                        <th>DATE</th>
                        <th>FORMAT</th>
                        <th>TEAMS INVOLVED</th>
                        <th>RESULT</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="w-1">1</td>
                        <td>12/09/2021</td>
                        <td>T20</td>
                        <td>RCB,SRH</td>
                        <td>RCB Won the Match</td>
                    </tr>
                    <tr>
                        <td className="w-1">2</td>
                        <td>13/09/2021</td>
                        <td>T20</td>
                        <td>CSK,MUMBAI</td>
                        <td>Mumbai Won the Match</td>
                    </tr>
                    <tr>
                        <td className="w-1">3</td>
                        <td>14/09/2021</td>
                        <td>T20</td>
                        <td>PBKS,Delhi</td>
                        <td>PBKS Won the Match</td>
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