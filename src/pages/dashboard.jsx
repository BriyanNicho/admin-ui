import React from "react";
import MainLayout from "../components/Layouts/MainLayout.jsx";
import Card from "../components/Elements/Card.jsx";

function DashboardPage() {
  return (
    <MainLayout>
      {/* Bungkus utama Grid (12 Kolom, 3 Baris) */}
      <div className="grid sm:grid-cols-12 sm:grid-rows-3 gap-6 h-full">
        
        {/* Card Total Balance */}
        <div className="sm:col-span-4">
          <Card 
            title="Total Balance" 
            desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. In deleniti excepturi accusamus eveniet, quasi, expedita aspernatur minima dolor placeat voluptates laborum quis quos. Illo, quas sunt nobis soluta voluptas asperiores!" 
          />
        </div>

        {/* Card Goals */}
        <div className="sm:col-span-4">
          <Card 
            title="Goals" 
            desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. In deleniti excepturi accusamus eveniet, quasi, expedita aspernatur minima dolor placeat voluptates laborum quis quos. Illo, quas sunt nobis soluta voluptas asperiores!" 
          />
        </div>

        {/* Card Upcoming Bill */}
        <div className="sm:col-span-4">
          <Card 
            title="Upcoming Bill" 
            link="/bill" 
            desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. In deleniti excepturi accusamus eveniet, quasi, expedita aspernatur minima dolor placeat voluptates laborum quis quos. Illo, quas sunt nobis soluta voluptas asperiores!" 
          />
        </div>

        {/* Card Recent Transaction: Merentang 4 kolom dan 2 baris ke bawah */}
        <div className="sm:col-span-4 sm:row-span-2">
          <Card 
            title="Recent Transactions" 
            link="/transactions" 
            desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, autem porro asperiores numquam sed veritatis debitis beatae amet laboriosam fuga pariatur sapiente suscipit culpa facere voluptatem. Repellat asperiores doloribus earum!" 
          />
        </div>

        {/* Card Statistics: Merentang 8 kolom */}
        <div className="sm:col-span-8">
           <Card 
             title="Statistics" 
             desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. In deleniti excepturi accusamus eveniet, quasi, expedita aspernatur minima dolor placeat voluptates laborum quis quos. Illo, quas sunt nobis soluta voluptas asperiores!" 
           />
        </div>

        {/* Card Expenses Breakdown: Merentang 8 kolom */}
        <div className="sm:col-span-8">
           <Card 
             title="Expenses Breakdown" 
             desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. In deleniti excepturi accusamus eveniet, quasi, expedita aspernatur minima dolor placeat voluptates laborum quis quos. Illo, quas sunt nobis soluta voluptas asperiores!" 
           />
        </div>

      </div>
    </MainLayout>
  );
}

export default DashboardPage;