import React, { Component } from 'react'

class personalDetail extends Component {
    render() {
        return (
            <div className="mb-5 ml-3">
                <h4 className="mb-4" style={{
                    fontWeight:600,
                    fontFamily:this.props.font
                    }}>  PERSONAL DETAILS</h4>
                    <div className="list-personal">
                        <ul>
                            <li>
                                <div className="single-info" style={{display:this.props.birth ?'block':'none'}}>
                                    <p 
                                    style={{color:this.props.color
                                    ,fontWeight:700,
                                    marginBottom:-3,
                                    fontFamily:this.props.font
                                    }}>Birth Date</p>
                                    <p className="personal-info"
                                     contentEditable="true"
                                      placeholder="Enter your birth date" 
                                      style={{
                                          color:'#7F8C8D',
                                          fontFamily:this.props.font
                                          }}>
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div className="single-info" style={{display:this.props.nation ?'block':'none'}}>
                                    <p style={{color:this.props.color
                                    ,fontWeight:700,
                                    marginBottom:-3,
                                    fontFamily:this.props.font
                                    }}>Nationality</p>
                                    <p className="personal-info" 
                                    contentEditable="true" 
                                    placeholder="Enter your nationality" 
                                    style={{
                                          color:'#7F8C8D',
                                          fontFamily:this.props.font
                                          }}>
                                      </p>
                                </div>
                            </li>
                            <li>
                                <div className="single-info" style={{display:this.props.address ?'block':'none'}}>
                                    <p style={{color:this.props.color
                                    ,fontWeight:700,
                                    marginBottom:-3,
                                    fontFamily:this.props.font
                                    }} >Address</p>
                                    <p className="personal-info"
                                     contentEditable="true"
                                      placeholder=" Enter your adresss"
                                      style={{
                                          color:'#7F8C8D',
                                          fontFamily:this.props.font
                                          }}>
                                     </p>
                                </div>
                            </li>
                                
                                
                                
                        </ul>
                    </div>
                
            </div>
        )
    }
}
export default personalDetail