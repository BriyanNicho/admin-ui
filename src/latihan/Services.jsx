export const getUsers = () => {
  return new Promise((resolve, reject) => {
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
      
      resolve(users);
    }, 1500); 
  });
};