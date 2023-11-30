import React from "react";
import { LineChart } from "./components/Graphs/LineChart";
import { BarChart } from "./components/Graphs/BarChart";

export default function InsuranceBillingTrends() {
  return (
    <div class="grid grid-cols-2">
      <div className="col-span-1 h-80">
        <LineChart
          chartName="Insurance Billing Trends (Values in INR)"
          data1={[
            10375589, 7215084, 4265586, 2998859, 5610693, 7211155, 10107258,
            20771045, 22920465, 20100404, 21145338, 23511821,
          ]}
          data2={[
            17773949, 23010792, 20482579, 18861537, 23059535, 19716075,
            24359261, 19124616, 21397233, 23805723, 25750198,
          ]}
          dataset1Name="2021-2022"
          dataset2Name="2022-2023"
        />
      </div>
    </div>
  );
}
