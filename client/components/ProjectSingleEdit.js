import React from "react";
import { updateProject } from "../store/projects";
import { deleteProject } from "../store/projects";
import { connect } from "react-redux";

class ProjectEdit extends React.Component {
  constructor(props) {
    super(props);
    const { project } = this.props;
    this.state = {
      id: project.id,
      name: project.name,
      description: project.description,
      clientName: project.clientName,
      clientEmail: project.clientEmail,
      clientPhone: project.clientPhone,
      revenue: project.revenue,
      expense: project.expense,
      status: project.status,
      deadlineDate: project.deadlineDate,
      deadlineMonth: project.deadlineMonth,
      deadlineYear: project.deadlineYear,
      startDate: project.startDate,
      startMonth: project.startMonth,
      startYear: project.startYear,
      userId: project.userId,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.updateProject({ ...this.state }, this.props.history);
  }

  render() {
    const {
      name,
      description,
      clientName,
      clientEmail,
      clientPhone,
      revenue,
      expense,
      status,
      deadlineDate,
      deadlineMonth,
      deadlineYear,
    } = this.state;
    const { handleChange, handleSubmit } = this;
    const { history, project } = this.props;
    const handleCancel = () => history.push("/projects");
    return (
      <div className="content-wrapper">
        <h3>Edit {project.name} Project</h3>
        <hr />
        <form className="project-form" onSubmit={handleSubmit}>
          <div className="project-form-left">
            <label htmlFor="name">Project Name</label>
            <input name="name" onChange={handleChange} value={name} />
            <label htmlFor="description">Description</label>
            <input
              name="description"
              onChange={handleChange}
              value={description}
            />
            <label htmlFor="revenue">Fee</label>
            <select value={revenue} name="revenue" onChange={handleChange}>
              <option disabled key="0" value="0">
                {" "}
                -- Set Fee --{" "}
              </option>
              <option value="50.00">50.00</option>
              <option value="100.00">100.00</option>
              <option value="250.00">250.00</option>
              <option value="500.00">500.00</option>
              <option value="750.00">750.00</option>
              <option value="1000.00">1000.00</option>
              <option value="1250.00">1250.00</option>
              <option value="1500.00">1500.00</option>
              <option value="1750.00">1750.00</option>
              <option value="2000.00">2000.00</option>
            </select>
            <label htmlFor="expense">Expenses</label>
            <input
              name="expense"
              type="number"
              step="0.01"
              onChange={handleChange}
              value={expense}
            />
            <label>Status</label>
            <select value={status} name="status" onChange={handleChange}>
              <option disabled key="0" value="0">
                {" "}
                -- Status --{" "}
              </option>
              <option value="Scheduled">Scheduled</option>
              <option value="In Progress">In Progress</option>
              <option value="Awaiting Feedback">Awaiting Feedback</option>
              <option value="On Hold">On Hold</option>
              <option value="Invoice Sent">Invoice Sent</option>
              <option value="Complete">Complete</option>
            </select>
            <label>Deadline</label>
            <div className="date-selectors">
              <select
                value={deadlineMonth}
                name="deadlineMonth"
                onChange={handleChange}
              >
                <option disabled key="0" value="0">
                  {" "}
                  -- Month --{" "}
                </option>
                <option value="Jan">January</option>
                <option value="Feb">February</option>
                <option value="Mar">March</option>
                <option value="Apr">April</option>
                <option value="May">May</option>
                <option value="Jun">June</option>
                <option value="Jul">July</option>
                <option value="Aug">August</option>
                <option value="Sep">September</option>
                <option value="Oct">October</option>
                <option value="Nov">November</option>
                <option value="Dec">December</option>
              </select>
              <select
                value={deadlineDate}
                name="deadlineDate"
                onChange={handleChange}
              >
                <option disabled key="0" value="0">
                  {" "}
                  -- Day --{" "}
                </option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
                <option value="21">21</option>
                <option value="22">22</option>
                <option value="23">23</option>
                <option value="24">24</option>
                <option value="25">25</option>
                <option value="26">26</option>
                <option value="27">27</option>
                <option value="28">28</option>
                <option value="29">29</option>
                <option value="30">30</option>
                <option value="31">31</option>
              </select>
              <select
                value={deadlineYear}
                name="deadlineYear"
                onChange={handleChange}
              >
                <option disabled key="0" value="0">
                  {" "}
                  -- Year --{" "}
                </option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
                <option value="2026">2026</option>
                <option value="2027">2027</option>
                <option value="2028">2028</option>
                <option value="2029">2029</option>
                <option value="2030">2030</option>
              </select>
            </div>
          </div>
          <div className="project-form-right">
            <label htmlFor="clientName">Client Name</label>
            <input
              name="clientName"
              onChange={handleChange}
              value={clientName}
            />
            <label htmlFor="clientEmail">Client Email</label>
            <input
              name="clientEmail"
              type="email"
              onChange={handleChange}
              value={clientEmail}
            />
            <label htmlFor="clientPhone">Client Phone Number</label>
            <input
              name="clientPhone"
              type="tel"
              onChange={handleChange}
              value={clientPhone}
            />
            <br />
            <button type="submit">Save</button>
            <button
              className="cancel-button"
              type="button"
              onClick={handleCancel}
            >
              Cancel
            </button>
            <br />
            <button
              className="delete-button"
              type="button"
              onClick={() => this.props.deleteProject(project, history)}
            >
              Delete Project
            </button>
          </div>
        </form>
      </div>
    );
  }
}
const mapState = (state, { match }) => {
  const project =
    state.projects.find((proj) => proj.id === match.params.id) || {};
  return {
    project: project,
  };
};

const mapDispatch = (dispatch, { history }) => ({
  updateProject: (project) => dispatch(updateProject(project, history)),
  deleteProject: (project) => dispatch(deleteProject(project, history)),
});

export default connect(mapState, mapDispatch)(ProjectEdit);
