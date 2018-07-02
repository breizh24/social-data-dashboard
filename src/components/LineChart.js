import {
  LineChart,
  PieChart,
  Pie,
  ResponsiveContainer,
  Tooltip,
  Cell,
} from 'recharts'

class LineChart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      apiData: [],
      dateForFetch: {
        minDate: '2018-04-24',
        maxDate: '2018-05-24',
      },
    }
  }

  componentDidMount() {
    let minDate = this.state.dateForFetch.minDate
    let maxDate = this.state.dateForFetch.maxDate
    Fetcher(
      this.props.version,
      this.props.category,
      this.props.subCategory,
      this.props.social,
      minDate,
      maxDate,
      this.props.indicator,
    ).then(response => {
      let apiData = response.apiData.data
      this.setState({
        apiData: apiData,
      })
    })
  }

  render() {
    return (
      <React.Fragment>
        <h2 className="title__piechart">{this.props.title}</h2>
        <h3 className="subtitle__piechart">Last 30 days</h3>
        <ResponsiveContainer width="100%" height={500}>
          <LineChart data={this.state.apiData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="entity"
              type="category"
              allowDuplicatedCategory={false}
            />
            <YAxis dataKey="frequency" />
            <Tooltip />
            <Legend />
            {series.map(s => (
              <Line dataKey="value" data={s.data} name={s.name} key={s.name} />
            ))}
          </LineChart>
        </ResponsiveContainer>
      </React.Fragment>
    )
  }
}

export default LineChart
