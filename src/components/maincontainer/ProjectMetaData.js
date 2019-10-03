import React, { Component } from "react";
import BasicTextField from "../controls/BasicTextField";
import BasicExpansionPanel from "../controls/BasicExpansionPanel";
import DetailMore from "../controls/DetailMore";

class ProjectMetaData extends Component {
  handleChange = event => {
    const updatedControls = this.props.metaData.map(control => {
      if (control.label === event.currentTarget.id) {
        return { ...control, value: event.currentTarget.value };
      }
      return control;
    });
    this.props.updateMetaData(updatedControls);
  };

  inputControls = (metaData, required = true) => {
    const filteredMetaData = metaData.filter(
      data => data.required === required
    );
    return filteredMetaData.map(data => {
      return (
        <>
          <BasicTextField
            id={data.label}
            key={data.label}
            handleChange={this.handleChange}
            label={data.label}
            placeholder={data.placeholder}
            value={data.value}
          />
        </>
      );
    });
  };

  detailMoreOptionControl = topic => {
    return <DetailMore label={topic} />;
  };

  render() {
    if (!this.props.metaData) {
      return (
        <div>
          <h1>No metaData</h1>
        </div>
      );
    }
    return (
      <>
        {this.inputControls(this.props.metaData)}
        <BasicExpansionPanel
          summaryPanel={this.detailMoreOptionControl("Options")}
          detailPanel={this.inputControls(this.props.metaData, false)}
        />
      </>
    );
  }
}

export default ProjectMetaData;
