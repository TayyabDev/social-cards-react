import React from 'react'


class SocialCard extends React.Component{
    render(){
        return (
            <div className="socialCard">
                <h1>{this.props.title}</h1>
                <h2>{this.props.date}</h2>
                <img src={this.props.imgUrl} alt="social card"/>
            </div>
        )
    }
}




export default SocialCard