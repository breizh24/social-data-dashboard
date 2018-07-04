import React from 'react'
import ChordDiagram from 'react-chord-diagram'

class Chord_Personality extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            oldData: [],
        }
        this.matrix = []
    }

    componentDidMount() {
        fetch('http://165.227.158.131/dp/api/v155/chord/twitter/ma/100')
            .then(response => response.json())
            .then(response => {
                let apiData = response.apiData.chord.data

                this.setState(
                    {
                        oldData: apiData,
                    },
                    () => this.ProcessData(),
                )
            })
    }

    ProcessData() {
        console.log('funzione')
        this.matrix = []
        let data = this.state.oldData
        data = Object.values(data)
        let singleList = []
        let el
        for (let i = 0; i < data.length; i++) {
            this.matrix.push([])
            for (let j = 0; j < data[i].length; j++) {
                el = null
                let tempel = singleList.find(el => {
                    if (el === data[i][j].source || el === data[i][j].target) {
                        return el
                    }
                })
                if (tempel !== undefined) {
                    el = tempel
                }
                if (el === null) {
                    singleList.push(data[i][j].source)
                } else {
                    el = null
                }
            }
        }
        for (let i = 0; i < this.matrix.length; i++) {
            for (let j = 0; j < this.matrix.length; j++) {
                this.matrix[i].push(0)
            }
        }
        for (let i = 0; i < data.length; i++) {
            for (let j = 0; j < data[i].length; j++) {
                let source = singleList.findIndex(el => {
                    if (el === data[i][j].source) {
                        return true
                    }
                    return false
                })
                let target = singleList.findIndex(el => {
                    if (el === data[i][j].target) {
                        return true
                    }
                    return false
                })
                if (
                    target !== undefined &&
                    source !== undefined &&
                    source >= 0 &&
                    target >= 0
                ) {
                    this.matrix[source][target] =
                        this.matrix[source][target] + data[i][j].frequency
                }
            }
        }
        this.setState({
            names: singleList,
        })
    }

    render() {
        if (this.state.oldData.length < 1) {
            return 'Loading'
        }

        return (
            <div>
                <ChordDiagram
                    innerRadius={160}
                    outerRadius={200}
                    matrix={this.matrix}
                    componentId={1}
                    style={{ fontSize: '12px' }}
                    groupLabels={this.state.names}
                    groupColors={[
                        '#0088FE',
                        '#00C49F',
                        '#FFBB28',
                        '#FF8042',
                        '#b61351',
                        '#e6b041',
                        '#6d7eb0',
                        '#a6ba66	',
                        '#7ba97d',
                        '#585858',
                    ]}
                />
            </div>
        )
    }
}
export default Chord_Personality
