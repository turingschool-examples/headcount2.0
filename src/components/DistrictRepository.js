import React, { Component } from "react";

export default class DistrictRepository extends Component {
  constructor(districtData) {
    super();
    this.data = districtData.reduce((acc, obj) => {
      if (!acc[obj.Location]) {
        acc[obj.Location] = [];
      }
      if (acc[obj.Location]) {
        acc[obj.Location].push(obj);
      }
      return acc;
    }, {});
  }
}
