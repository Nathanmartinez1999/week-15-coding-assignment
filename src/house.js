import React from "react";
import NewRoomForm from "./NewRoomForm";

export default class house extends React.Component {
    render() {
        const rooms = this.props.data.rooms
            ? this.props.data.rooms.map((room, index) =>
                <li key={index}>
                    {room.name} area: {room.area}
                    <button onClick={e => this.props.deleteRoom(e, this.props.data, room)}
                    >Delete</button>
                </li>)
            : null;
        return (
            <div>
                <h1>{this.props.data.name}</h1>
                <ul>
                    {rooms}
                </ul>
                <NewRoomForm
                    addNewRoom={this.props.addNewRoom} data={this.props.name} />
            </div>
        );
    }
}