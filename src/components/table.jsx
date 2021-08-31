import React from "react";
import "./table.css";

class BootrapTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tableContent: this.props.data,
      hoverRow: "",
    };
  }
  componentDidMount() {
    let element = document.getElementById("dwe-search-table");
    if (element) {
      element
        .querySelectorAll("tr")
        .forEach((e) => e.addEventListener("mouseenter", this.mouseHoverEnter));
      element
        .querySelectorAll("tr")
        .forEach((e) => e.addEventListener("mouseleave", this.mouseHoverLeave));
    }
  }

  mouseHoverEnter = (e) => {
    if (e.srcElement.id) {
      this.setState({
        hoveredRow: e.srcElement.id,
      });
    }
  };
  mouseHoverLeave = (e) => {
    this.setState({
      hoveredRow: "",
    });
  };

  componentWillUnmount() {
    let element = document.getElementById("dwe-search-table");
    if (element) {
      element
        .querySelectorAll("tr")
        .forEach((e) =>
          e.removeEventListener("mouseenter", this.mouseHoverEnter)
        );
      element
        .querySelectorAll("tr")
        .forEach((e) =>
          e.removeEventListener("mouseleave", this.mouseHoverLeave)
        );
    }
  }

  render() {
    return (
      <div className="dwe-search-table-main">
        <table>
          <thead>
            <tr>
              <th>
                <input type="checkbox" />
              </th>
              <th width={"10%"}>Team Name</th>
              <th width={"10%"}>BU unit</th>
              <th width={"20%"}>Building Name</th>
              <th width={"8%"}>Floor</th>
              <th width={"10%"}>Current Size</th>
              <th width={"10%"}>Peak Attendance</th>
              <th width={"20%"}>Average Attendance</th>
            </tr>
          </thead>
          <tbody id="dwe-search-table">
            {this.state.tableContent.map((item) => (
              <tr
                key={item.team_id}
                id={item.team_id}
                style={
                  parseInt(this.state.hoveredRow) === parseInt(item.team_id)
                    ? { backgroundColor: "#a3a3a5" }
                    : {}
                }
              >
                <td>
                  <input type="checkbox" />
                </td>
                <td>{item.team_name}</td>
                <td>{item.team_org}</td>
                <td>{item.building_name}</td>
                <td>{item.floor_number}</td>
                <td>{item.team_size}</td>
                <td>{item.peak_attendance_percent}</td>
                <td>{item.avg_attendance_percent}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default BootrapTable;
