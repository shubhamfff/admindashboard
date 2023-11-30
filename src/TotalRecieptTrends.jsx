import React from "react";
import { LineChart } from "./components/Graphs/LineChart";
import { BarChart } from "./components/Graphs/BarChart";

export default function TotalRecieptTrends() {
  return (
    <div class="grid grid-cols-2">
      <div className="col-span-1 h-80">
        <LineChart
          chartName="Total Receipts (Values in INR)"
          data1={[
            91689958, 85577351, 82893649, 93288694, 90407323, 87172227,
            87328221, 92443348, 93525799, 95087032, 88481421, 116113831,
          ]}
          data2={[
            99359861, 93374929, 95745799, 110235323, 116122784, 105797688,
            107929515, 89318456, 110270768, 101785539, 102190391,
          ]}
          dataset1Name="2021-2022"
          dataset2Name="2022-2023"
        />
      </div>
      <div className="h-80">
        <BarChart
          chartName="Total Cash Receipts (Values in INR)"
          data1={[
            34317759, 33181415, 34673842, 39959595, 40331368, 39122099,
            40615242, 41347749, 36535973, 38188626, 35488545, 38346624,
          ]}
          data2={[
            36354851, 35696352, 38236844, 40427381, 43315097, 41801070,
            44076355, 34585526, 34010596, 36427817, 34168581,
          ]}
          dataset1Name="2021-2022"
          dataset2Name="2022-2023"
        />
      </div>
      <div className="col-span-1 h-80">
        <BarChart
          chartName="Total Cheque Receipts (Values in INR)"
          data1={[
            4675696, 6443495, 7351359, 7556305, 6473315, 4570253, 6251866,
            7052313, 6666368, 8054496, 8477379, 12076414,
          ]}
          data2={[
            8506773, 8003715, 11033954, 17620126, 20366243, 5905174, 9540806,
            7784578, 14555562, 5151430, 4993876,
          ]}
          dataset1Name="2021-2022"
          dataset2Name="2022-2023"
        />
      </div>
      <div className="h-80">
        <LineChart
          chartName="Total Credit Card Receipts (Values in INR)"
          data1={[
            29880082, 30520282, 26365523, 30362595, 31973312, 32079118,
            29034721, 30600609, 32437980, 30566435, 27656522, 29268646,
          ]}
          data2={[
            31155876, 32253853, 31282248, 31776952, 33219237, 33504378,
            36898122, 30865492, 30254911, 30885915, 35824970,
          ]}
          dataset1Name="2021-2022"
          dataset2Name="2022-2023"
        />
      </div>
      <div className="col-span-1 h-80">
        <LineChart
          chartName="Total NEFT/RTGS Receipts (Values in INR)"
          data1={[
            20001330, 12720197, 10771538, 5017616, 6965231, 6656721, 7908557,
            7068481, 12398346, 15998159, 16159974, 3751475,
          ]}
          data2={[
            11400, 823640, 0, 133528, 119538, 0, 3000, 57200, 834691, 6270813,
            1625212,
          ]}
          dataset1Name="2021-2022"
          dataset2Name="2022-2023"
        />
      </div>
      <div className="h-80">
        <BarChart
          chartName="Total Bank Receipts (Values in INR)"
          data1={[
            2815092, 2711962, 3731387, 10392583, 4664097, 4744036, 3517835,
            6374196, 5487132, 2279316, 699001, 32670672,
          ]}
          data2={[
            23330961, 16597369, 15192753, 20277336, 19102669, 24587066,
            17411232, 16025660, 30615008, 23049564, 25577752,
          ]}
          dataset1Name="2021-2022"
          dataset2Name="2022-2023"
        />
      </div>
    </div>
  );
}
