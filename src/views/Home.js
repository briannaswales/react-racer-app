import React, { Component } from 'react'

export default class Home extends Component {
    constructor(){
        console.log("component constructed");
        super();

        this.state = {
            racers: []
        }
        console.log(this.state.racers);
    }

    componentDidMount(){
        console.log("component mounted");
        fetch('https://ergast.com/api/f1/2018/5/driverStandings.json').then
        (res => res.json())
        .then(data => {
            this.setState ({
                racers: data.MRData.StandingsTable.StandingsLists[0].DriverStandings
            })
        })
        .catch(error => console.log(error))

        console.log(this.state.racers)
    }

    render() {
        console.log("component rendered")
        return (
            <div>
                This is the Home page
                <h3>welcome {this.props.name}</h3>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Position</th>
                            <th>Points</th>
                            <th>Wins</th>
                            <th>Name</th>
                            <th>DOB</th>
                            <th>nationality</th>
                            <th>constructor</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.racers.map(racer => 
                            (
                                <tr>
                                    <td>{racer.position}</td>
                                    <td>{racer.points}</td>
                                    <td>{racer.wins}</td>
                                    <td>{racer.Driver.givenName}</td>
                                    <td>{racer.Driver.dateOfBirth}</td>
                                    <td>{racer.Driver.nationality}</td>
                                    <td>{racer.Constructors[0].name}</td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
        )
    }
}
