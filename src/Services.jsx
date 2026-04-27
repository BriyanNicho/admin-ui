// Membuat fungsi getUsers yang berjalan secara Asynchronous
export const getUsers = () => {
  return new Promise((resolve, reject) => {
    // Mensimulasikan jeda jaringan selama 1.5 detik (1500 ms)
    setTimeout(() => {
      const users = [
        {
          id: 1,
          name: "April",
          email: "april@gmail.com",
          street: "Jl. Imam Bonjol",
          city: "Semarang",
        },
        {
          id: 2,
          name: "Yani",
          email: "yani@gmail.com",
          street: "Jl. Indrapasta",
          city: "Ungaran",
        },
        {
          id: 3,
          name: "Safitri",
          email: "safitri@gmail.com",
          street: "Jl. Pemuda",
          city: "Kendal",
        },
      ];
      
      // Mengirimkan data jika berhasil
      resolve(users);
    }, 1500); 
  });
};