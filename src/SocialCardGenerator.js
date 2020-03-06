import React, {useState} from 'react'
import shortid from 'shortid'


class SocialCardGenerator extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            title: '',
            date: '',
            imgUrl: '',
            id: shortid.generate()
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event){
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }


    render(){
        return (
            <form onSubmit={(e) => {
                e.preventDefault()
                this.props.onSubmit({
                    title: this.state.title,
                    date: this.state.date,
                    imgUrl: this.state.imgUrl
                })
                
            }}>
                <input type="text" name="title" placeholder="Title" onChange={this.handleChange}></input>
                <input type="date" name="date" placeholder="Date" onChange={this.handleChange}></input>
                <input type="url" name="imgUrl" placeholder="Image Link" onChange={this.handleChange}></input>
                <button type="submit">Generate</button>
            </form>
        )
    }
}

export default SocialCardGenerator