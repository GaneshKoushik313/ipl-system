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
        </div>
    )
}