import React from "react";
import { LineChart } from "./components/Graphs/LineChart";
import { BarChart } from "./components/Graphs/BarChart";

export default function BillingTrends() {
  return (
    <div class="grid grid-cols-2">
      <div className="col-span-1 h-80">
        <LineChart
          chartName="Total Billing (Values in INR)"
          borderColor="grey"
          bgColor="orange"
          data1={[
            104752153, 86651288, 77620998, 88055156, 97972691, 96478391,
            95460517, 106625209, 101178371, 105787065, 93122791, 102801619,
          ]}
          data2={[
            97418078, 101913534, 94768569, 102049019, 110392533, 106556400,
            122128848, 95833486, 95759073, 122128848, 99134015, 102962910,
          ]}
          dataset1Name="2021-2022"
          dataset2Name="2022-2023"
        />
      </div>
      <div className="h-80">
        <BarChart
          chartName="IP Billing (Values in INR)"
          borderColor="#008B8B"
          bgColor="#A9A9A9"
          data1={[
            77397951, 62201657, 54815893, 64191726, 68432195, 67341207,
            66483059, 74553562, 69987069, 75367694, 62556552, 70010921,
          ]}
          data2={[
            66597274, 68704286, 67217477, 69368188, 75273004, 70307110,
            85093386, 65156289, 64955937, 68033468, 68899674,
          ]}
          dataset1Name="2021-2022"
          dataset2Name="2022-2023"
        />
      </div>
      <div className="col-span-1 h-80">
        <BarChart
          chartName="IP Pharmacy Billing (Values in INR)"
          borderColor="#EEE8AA"
          bgColor="#6B8E23"
          data1={[
            14568351, 11469840, 10204695, 10288018, 15903916, 16425696,
            16214867, 17787842, 18264801, 17154182, 16737864, 17607298,
          ]}
          data2={[
            15786738, 18522076, 12786283, 16602691, 17787353, 18996900,
            18904294, 15629221, 15907277, 15999365, 18056359,
          ]}
          dataset1Name="2021-2022"
          dataset2Name="2022-2023"
        />
      </div>
      <div className="h-80">
        <LineChart
          chartName="IP Billing (Values in INR)"
          borderColor="#E9967A"
          bgColor="#2F4F4F"
          data1={[
            3314816, 3450139, 3460242, 3547431, 3059489, 2971961, 3290946,
            3680581, 3294377, 3110928, 3376659, 3296181,
          ]}
          data2={[
            3447395, 3746307, 3824948, 3757057, 3855878, 4687193, 4080878,
            4406317, 4248443, 4257702, 3937562,
          ]}
          dataset1Name="2021-2022"
          dataset2Name="2022-2023"
        />
      </div>
    </div>
  );
}
