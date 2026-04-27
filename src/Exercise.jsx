import React, { useEffect, useState } from "react";
import UserCard from "./UserCard";
import { getUsers } from "./Services"; // Import fungsi ambil data

function Exercise() {
  // State untuk menampung data user, awalnya berupa array kosong []
  const [users, setUsers] = useState([]);

  // useEffect dijalankan otomatis saat komponen pertama kali muncul di layar
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Menunggu data selesai diambil dari Services
        const data = await getUsers();
        setUsers(data); // Memasukkan data ke dalam state
      } catch (error) {
        console.error("Component Gagal menampilkan data: ", error.message);
      }
    };

    fetchData();
  }, []); // Array kosong [] artinya hanya dijalankan 1 kali

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">
        User Cards
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {/* Jika data masih kosong (karena menunggu delay), bisa tampilkan teks loading */}
        {users.length === 0 ? (
          <p className="text-center col-span-full text-gray-500">Loading data...</p>
        ) : (
          users.map((user) => <UserCard key={user.id} {...user} />)
        )}
      </div>
    </div>
  );
}

export default Exercise;