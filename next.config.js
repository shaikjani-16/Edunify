module.exports = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/showSchool",
        permanent: true, // Use true for permanent redirects (301), false for temporary redirects (302)
      },
    ];
  },
};
