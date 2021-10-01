import React from 'react'

export default function Tournment(){
    return(
        <div className="mt-10 container w-100"> 
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th className="w-1">ID</th>
                        <th>NAME</th>
                        <th>DATES</th>
                        <th>FORMAT</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="w-1">1</td>
                        <td>IPL</td>
                        <td>12/09/2021</td>
                        <td>T20</td>
                    </tr>
                    <tr>
                        <td className="w-1">2</td>
                        <td>Border Gavaskar Trophy</td>
                        <td>19/09/2021</td>
                        <td>Test</td>
                    </tr>
                    <tr>
                        <td className="w-1">3</td>
                        <td>Gandhi Mandela Trophy</td>
                        <td>29/09/2021</td>
                        <td>ODI</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}