import React, { Component } from 'react'
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa'
import Title from './Title'

export default class Services extends Component {
    state={
        services:[
            {
                icon:<FaCocktail/>,
                title:"Free Cocktail",
                info:"Free cocktails served in the Hotel lounge for all the guests! Visit the bar between 9pm - 11pm for a 2 for 1 free drink offer!"
            },
            {
                icon:<FaHiking/>,
                title:"Hiking",
                info:"Free cocktails served in the Hotel lounge for all the guests! Visit the bar between 9pm - 11pm for a 2 for 1 free drink offer!"
            },
            {
                icon:<FaShuttleVan/>,
                title:"Shuttle Van Service",
                info:"Free shuttle service for all our guets who want to visit the city for shopping and entertainment"
            },
            {
                icon:<FaBeer/>,
                title:"Best Beers",
                info:"Best range and quality of drinks available at the bar for all our guets!"
            }

        ]
    }
    render() {
        return (
            <section className="services">
                <Title title='Services' />
                <div className="services-center">
                { this.state.services.map((item,index) => {
                    return ( <article key={index} className="service">
                        <span>{ item.icon }</span>
                        <h6>{ item.title }</h6>
                        <p>{ item.info }</p>
                    </article>
                );
                })}
            </div>
        </section>
        )
    }
}
