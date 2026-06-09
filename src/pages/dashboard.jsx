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
      {/* 1. PERUBAHAN GRID: Menggunakan grid-cols-1 untuk HP, dan lg:grid-cols-12 untuk Laptop/PC */}
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

        {/* 2. KARTU TRANSAKSI: Diberi flex-col agar bisa mengisi tinggi 2 baris (row-span-2) dengan rapi */}
        <div className="lg:col-span-4 lg:row-span-2 flex flex-col">
          <CardRecentTransaction data={transactions} className="flex-1" />
        </div>
        
        {/* Baris Kedua & Ketiga untuk Statistik */}
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