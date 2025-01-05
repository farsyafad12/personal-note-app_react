const getInitialData = () => [
  {
    id: 1,
    title: "React Hooks",
    body: "React Hooks memungkinkan kita menggunakan state dan side effects di dalam komponen fungsional React tanpa perlu menulis class. Ini membuat kode React lebih sederhana dan mudah dipelihara.",
    createdAt: "2023-02-15T10:35:22.123Z",
    archived: false,
  },
  {
    id: 2,
    title: "Vue.js",
    body: "Vue.js adalah framework progresif untuk membangun antarmuka pengguna. Vue.js menawarkan fleksibilitas tinggi, mulai dari membangun aplikasi halaman tunggal (SPA) hingga menambahkan interaktivitas ke halaman HTML.",
    createdAt: "2023-03-05T14:20:45.678Z",
    archived: false,
  },
  {
    id: 3,
    title: "Node.js",
    body: "Node.js adalah runtime JavaScript yang memungkinkan kita menjalankan JavaScript di luar browser. Node.js sering digunakan untuk membangun aplikasi backend, server, dan tools command-line.",
    createdAt: "2023-04-10T18:15:30.987Z",
    archived: false,
  },
  {
    id: 4,
    id: 4,
    title: "Web Components",
    body: "Web Components adalah kumpulan fitur yang memungkinkan kita membuat komponen custom HTML. Dengan Web Components, kita bisa membuat elemen HTML yang reusable dan terkapsul.",
    createdAt: "2023-05-15T12:00:00.000Z",
    archived: false,
  },
  {
    id: 5,
    title: "Progressive Web Apps (PWA)",
    body: "PWA adalah aplikasi web yang memberikan pengalaman pengguna seperti aplikasi native. PWA dapat diinstal pada homescreen perangkat, bekerja offline, dan memberikan notifikasi push.",
    createdAt: "2023-06-20T09:45:00.000Z",
    archived: false,
  },
  {
    id: 6,
    title: "Serverless Functions",
    body: "Serverless Functions adalah potongan kode yang dieksekusi sebagai respons terhadap suatu event, tanpa perlu mengelola server. Serverless Functions sering digunakan untuk membangun API, backend, dan pemrosesan data.",
    createdAt: "2023-07-25T16:30:00.000Z",
    archived: false,
  },
];

const showFormattedDate = (date) => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date(date).toLocaleDateString("id-ID", options);
};

export { getInitialData, showFormattedDate };
