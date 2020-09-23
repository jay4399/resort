import React, { Component } from 'react'
import items from './data'

const RoomContext = React.createContext();
// <RoomContext.Provider value={}

class RoomProvider extends Component {
    state={
        rooms:[],
        sortedRooms:[],
        featuredRooms:[],
        loading: true
    }

    // getData
    componentDidMount(){
        let rooms = this.formatData(items)
    }

    formatData(items) {
        let tempItems = items.map(item => {
            let id = item.sys.id
            let images = item.fields.images.map(image => image.fields.file.url)

            let room = { ...item.fields }
        })
    }

    render() {
        return (
            <RoomContext.Provider value={{ ...this.state }}>
                { this.props.children }
            </RoomContext.Provider>
        )
    }
}

const RoomConsumer = RoomContext.Consumer

export{ RoomProvider, RoomConsumer, RoomContext }
