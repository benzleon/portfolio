module.exports = {
  async redirects() {
    return [
      {
        source: "/physik",
        destination:
          "https://docs.google.com/presentation/d/1EPgpfXJyMptflDISHxaKm6AFx-MTKz2-0VBlJyEcZUc/edit#slide=id.p",
        permanent: true,
      },
      {
        source: "/call",
        destination: "tel:00491784935503",
        permanent: false,
      },
    ];
  },
};
