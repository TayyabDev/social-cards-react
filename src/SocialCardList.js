import React from 'react'
import SocialCard from './SocialCard'
import { render } from '@testing-library/react'
import SocialCardGenerator from './SocialCardGenerator'




class SocialCardList extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            socialCards: []
        }
        this.addCard = this.addCard.bind(this)
    }

    addCard = card => {
        this.setState({
            socialCards: [<SocialCard title={card.title} date={card.date} imgUrl={card.imgUrl}/>, ...this.state.socialCards]
        })
    }


    render(){
        return (
            <div>
                <SocialCardGenerator onSubmit={this.addCard}></SocialCardGenerator>
                {this.state.socialCards !== [] && this.state.socialCards}
            </div>
        )
    }

}

    

export default SocialCardList