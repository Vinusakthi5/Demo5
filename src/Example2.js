import React, { Component } from 'react';
import data from "./data"; 
import './style.css';

class Example2 extends Component {
	render() {
		return (
            <div>
                <table>
                      <thead> 
                      <td>Beneficiary Reference</td>
                      <td>Beneficiary Account ID</td>
                      <td>Beneficiary Bank Name</td>
                      <td>Beneficiary Name</td>
                      </thead>
                      <tbody>
                {
					data.Bens.map((Ben, i) => {
						return (
                                    <tr key={i}>
                                    <td>{Ben.Reference}</td>
                                    <>
                                    {
                                        Ben.CreditorAccount.map(function(CA, i) {
                                            return  <>
                                            <td>{CA.SchemeName}</td>
                                            <td>{CA.Identification}</td>
                                            <td>{CA.Name}</td>
                                             </>
                                        })}
                                    </>
                                </tr>
                                )})}
                          </tbody>

                    </table>
                </div>
                        );
 }
}
 
export default Example2;