import React from "react";
import {
  FcNeutralDecision,
  FcExport,
  FcHome,
  FcOvertime,
} from "react-icons/fc";
import { LineChart } from "./Graphs/LineChart";
import { VerticalBarChart } from "./Graphs/VerticalBarChart";
import { Piechart } from "./Graphs/Piechart";
import { AreaChart } from "./Graphs/AreaChart";

const patients = [
  {
    name: "John Doe",
    date: "25th Dec 2023",
    price: 120,
    state: true,
  },
  {
    name: "Marshall Quilton",
    date: "25th Dec 2023",
    price: 120,
    state: true,
  },
  {
    name: "Henry Ford",
    date: "25th Dec 2023",
    price: 120,
    state: true,
  },
  {
    name: "Henry Ford",
    date: "25th Dec 2023",
    price: 120,
    state: true,
  },
  {
    name: "Henry Ford",
    date: "25th Dec 2023",
    price: 120,
    state: true,
  },
  {
    name: "Henry Ford",
    date: "25th Dec 2023",
    price: 120,
    state: true,
  },
];

export default function Dashbaord() {
  const percentage = 66;

  return (
    <>
      <div>
        <div class="flex">
          <div class="w-1/4 m-2">
            <div class="max-w-sm rounded overflow-hidden border">
              <div className="flex flex-row items-center p-8 rounded-lg">
                <div className="flex-1">
                  <div className="flex flex-row">
                    {/* <FcNeutralDecision size={19} className="mt-0.5 mr-2" /> */}
                    Total Admitted Patients
                  </div>
                </div>
                <div>3510</div>
              </div>
            </div>
          </div>
          <div class="w-1/4 m-2">
            <div class="max-w-sm rounded overflow-hidden border">
              <div className="flex flex-row items-center p-8 rounded-lg">
                <div className="flex-1">
                  <div className="flex flex-row">
                    {/* <FcExport size={19} className="mt-0.5 mr-2" /> */}
                    Total NO of discharge
                  </div>
                </div>
                <div>2500</div>
              </div>
            </div>
          </div>
          <div class="w-1/4 m-2">
            <div class="max-w-sm rounded overflow-hidden border">
              <div className="flex flex-row items-center p-8 rounded-lg">
                <div className="flex-1">
                  <div className="flex flex-row">
                    {/* <FcHome size={19} className="mt-0.5 mr-2" /> */}
                    Total NO of OPD
                  </div>
                </div>
                <div>120</div>
              </div>
            </div>
          </div>
          <div class="w-1/4 m-2">
            <div class="max-w-sm rounded overflow-hidden border">
              <div className="flex flex-row items-center p-8 rounded-lg">
                <div className="flex-1">
                  <div className="flex flex-row">
                    {/* <FcOvertime size={19} className="mt-0.5 mr-2" /> */}
                    Bed occupancy
                  </div>
                </div>
                <div>80%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex mb-16 h-80">
        <div className="w-1/2 h-80">
          <LineChart
            chartName="IP Billing (Values in INR)"
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
        <div className="w-1/2 h-80">
          <VerticalBarChart />
        </div>
      </div>

      <div className="flex">
        <div className="w-2/3 h-90">
          <AreaChart />
        </div>
        <div className="w-1/2 h-90">
          <Piechart />
        </div>
      </div>
    </>
  );
}
