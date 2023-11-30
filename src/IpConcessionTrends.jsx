import React from "react";
import { BarChart } from "./components/Graphs/BarChart";
import { LineChart } from "./components/Graphs/LineChart";

export default function IpConcessionTrends() {
  return (
    <div class="grid grid-cols-2">
      <div className="col-span-1 h-80">
        <LineChart
          chartName="IP Concession Trends (Values in INR)"
          data1={[
            7096943, 7311218, 5472488, 4615964, 8383454, 5138403, 3809725,
            5295856, 4366330, 6096220, 3762874, 5403617,
          ]}
          data2={[
            3554098, 5556970, 5515200, 5393277, 7775001, 4176585, 5824573,
            2957637, 3293653, 3645257, 4880919,
          ]}
          dataset1Name="2021-2022"
          dataset2Name="2022-2023"
        />
      </div>
      <div className="h-80">
        <BarChart
          chartName="IP Concession Trends (Mr. V.R Yadav) Values in INR"
          data1={[
            6998032, 7178760, 4939103, 3439420, 8207532, 5088549, 3794014,
            5238004, 4292203, 6023578, 3745091, 5079751,
          ]}
          data2={[
            3522595, 5312769, 5058410, 5141650, 7720061, 4085168, 5412813,
            2871965, 3179527, 3264830, 4548956,
          ]}
          dataset1Name="2021-2022"
          dataset2Name="2022-2023"
        />
      </div>
      <div className="col-span-1 h-80">
        <BarChart
          chartName="IP Concession Trends (Dr. V.L Yemul) Values in INR"
          data1={[
            76759, 132458, 533385, 1121047, 169821, 49854, 15712, 57852, 74127,
            72643, 17782, 323866,
          ]}
          data2={[
            31502, 241906, 362870, 229804, 38914, 48170, 331550, 26933, 79793,
            121534, 56590,
          ]}
          dataset1Name="2021-2022"
          dataset2Name="2022-2023"
        />
      </div>
      <div className="h-80">
        <LineChart
          chartName="IP Concession Trends (Mr. S.L Shinde) Values in INR"
          data1={[22153, 0, 0, 51647, 0, 0, 0, 0, 0, 0, 0, 0]}
          data2={[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]}
          dataset1Name="2021-2022"
          dataset2Name="2022-2023"
        />
      </div>
      <div className="col-span-1 h-80">
        <LineChart
          chartName="IP Concession Trends (PPN Authority) Values in INR"
          data1={[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]}
          data2={[
            0, 2295, 93920, 21824, 16026, 43248, 80211, 58739, 34333, 40202,
            85196,
          ]}
          dataset1Name="2021-2022"
          dataset2Name="2022-2023"
        />
      </div>
      <div className="h-80">
        <BarChart
          chartName="IP Concession Trends (Dr. H Farashah) Values in INR"
          data1={[0, 0, 0, 3849, 6101, 0, 0, 0, 0, 0, 0, 0]}
          data2={[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]}
          dataset1Name="2021-2022"
          dataset2Name="2022-2023"
        />
      </div>
      <div className="col-span-1 h-80">
        <BarChart
          chartName="IP Concession Trends (Dr. Madhur Rao) Values in INR"
          data1={[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]}
          data2={[0, 0, 0, 0, 0, 0, 0, 0, 0, 153845, 186774, 0]}
          dataset1Name="2021-2022"
          dataset2Name="2022-2023"
        />
      </div>
      <div className="h-80">
        <LineChart
          chartName="IP Concession Trends (Dr. Poonam Deshmukh) Values in INR"
          data1={[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]}
          data2={[0, 0, 0, 0, 0, 0, 0, 0, 0, 64846, 0]}
          dataset1Name="2021-2022"
          dataset2Name="2022-2023"
        />
      </div>
    </div>
  );
}
