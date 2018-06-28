/*import React, { Component } from 'react'
import {
    LineChart,
    CartesianGrid,
    XAxis,
    YAxis,
    Bar,
    ResponsiveContainer,
} from 'recharts'

class Personality_AccountApproval extends Component {
    constructor(props) {
        super(props)
        this.state = {
            apiData: [],
        }
    }

    componentDidMount() {
        fetch('http://165.227.158.131/dp/api/v160/trend/ma/twitter/order/approval')
            .then(response => response.json())
            .then(response => {
                let apiData = response.apiData.data
                this.setState({
                    apiData: apiData,
                })
                console.log(this.state.apiData)
            })
    }
  
    <LineChart width={730} height={250} data={data}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="pv" stroke="#8884d8" />
      <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
    </LineChart>
    
    render() {
        if (this.state.apiData.length === 0) {
            return <h2>Loading...</h2>
        }
        return (
            <div>
                <ResponsiveContainer width="98%" height={500}>
                    <LineChart data={this.state.apiData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis
                            dataKey="entity"
                            textAnchor="end"
                            tick={{ angle: -45 }}
                            minTickGap={-200}
                        />
                        <YAxis />
                        <Bar dataKey="frequency" fill="#feb236" />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        )
    }
}

export default Personality_AccountApproval
*/