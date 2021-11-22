module.exports = {
  async redirects() {
    return [
      {
        source: "/physik",
        destination:
          "https://docs.google.com/presentation/d/1dXet3wHXtMa4Fg7D3ly4S14NUqRs4YUZLJXMfh8E7Lk/edit",
        permanent: true,
      },
    ];
  },
};
