module.exports = {
  db: {
    uri: 'mongodb://localhost:27017/database_name',
    connect: {
      config: {
        autoIndex: false,
      },
      useNewUrlParser: true,
    },
  },
};
