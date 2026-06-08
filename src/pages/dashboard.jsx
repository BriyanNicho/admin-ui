import React from "react";
import MainLayout from "../components/Layouts/MainLayout";
import CardBalance from "../components/Fragments/CardBalance";
import CardGoal from "../components/Fragments/CardGoal";
import CardUpcomingBill from "../components/Fragments/CardUpcomingBill";
import CardRecentTransaction from "../components/Fragments/CardRecentTransaction";
import CardStatistic from "../components/Fragments/CardStatistic";
import CardExpenseBreakdown from "../components/Fragments/CardExpenseBreakdown";
import {
  transactions,
  bills,
  expensesBreakdowns,
  balances,
  goals,
  expensesStatistics,
} from "../data";

function dashboard() {
  return (
    <MainLayout>
      {/* Menggunakan grid-cols-1 untuk mobile, lalu lg:grid-cols-12 untuk desktop */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-auto">
        
        {/* Baris Pertama */}
        <div className="lg:col-span-4">
          <CardBalance data={balances} />
        </div>
        <div className="lg:col-span-4">
          <CardGoal data={goals} />
        </div>
        <div className="lg:col-span-4">
          <CardUpcomingBill data={bills} />
        </div>

        {/* Baris Kedua & Ketiga */}
        <div className="lg:col-span-4 lg:row-span-2 flex flex-col">
          {/* Card ini akan mengambil tinggi dua baris dan mengisi ruang yang ada */}
          <CardRecentTransaction data={transactions} className="flex-1" />
        </div>
        <div className="lg:col-span-8">
          <CardStatistic data={expensesStatistics} />
        </div>
        <div className="lg:col-span-8">
          <CardExpenseBreakdown data={expensesBreakdowns} />
        </div>
        
      </div>
    </MainLayout>
  );
}

export default dashboard;