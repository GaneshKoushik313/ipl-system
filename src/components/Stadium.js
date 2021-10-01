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
        </div>
    )
}