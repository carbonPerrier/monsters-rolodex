import React from 'react';
import {Card} from '../card/card.component'
import './card-list.style.css';

class CardList extends React.Component {
    render() {
        return (
            <div className='card-list'>
            {
                this.props.monsters.map(
                    monster => 
                    <Card key={monster.id} monster={monster}></Card>
                )
            }
            </div>
        );
    }
}

export {CardList}