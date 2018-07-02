import React, { Component } from 'react'
import {
    BarChart,
    CartesianGrid,
    XAxis,
    YAxis,
    Bar,
    ResponsiveContainer,
} from 'recharts'

class Competitor_AccountActivity extends Component {
    constructor(props) {
        super(props)
        this.state = {
            apiData: [],
        }
    }

    componentDidMount() {
        fetch('http://165.227.158.131/dp/api/v158/trend/ma/twitter/order/activity')
            .then(response => response.json())
            .then(response => {
                let apiData = response.apiData.data
                this.setState({
                    apiData: apiData,
                })
                console.log(this.state.apiData)
            })
    }

    render() {
        if (this.state.apiData.length === 0) {
            return <h2>Loading...</h2>
        }
        return (
            <div id="competitor_accountActivity">
                <h2>{this.props.title}</h2>
                <ResponsiveContainer width="98%" height={500}>
                    <BarChart data={this.state.apiData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis
                            dataKey="entity"
                            textAnchor="end"
                            tick={{ angle: -45 }}
                            minTickGap={-200}
                        />
                        <YAxis />
                        <Bar dataKey="frequency" fill="#feb236" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        )
    }
}

export default Competitor_AccountActivity
