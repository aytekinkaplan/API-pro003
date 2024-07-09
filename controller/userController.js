const User = require("./../model/userModel");

exports.getAllUsers = (req, res) => {
  // Burada veritabanı operasyonları yerine dummy data kullanacağız
  // Veritabanı kullanıyorsanız mongoose gibi bir ORM kullanmanız gerekir
  res.send([
    new User("John", "Doe", 30, 1, "john.doe@example.com", "password123"),
    new User("Jane", "Smith", 25, 2, "jane.smith@example.com", "password456"),
  ]);
};

exports.createUser = (req, res) => {
  if (!req.body) {
    return res.status(400).send({ message: "Content can not be empty!" });
  }
  const user = new User(
    req.body.name,
    req.body.lastname,
    req.body.age,
    req.body.id,
    req.body.email,
    req.body.password
  );
  // Burada veritabanına kaydetme işlemi yapılmalı
  res.send(user);
};

exports.getUser = (req, res) => {
  const userId = req.params.id;
  // Burada veritabanından kullanıcıyı bulma işlemi yapılmalı
  const user = new User(
    "John",
    "Doe",
    30,
    userId,
    "john.doe@example.com",
    "password123"
  );
  res.send(user);
};

exports.updateUser = (req, res) => {
  if (!req.body) {
    return res
      .status(400)
      .send({ message: "Data to update can not be empty!" });
  }
  const userId = req.params.id;
  // Burada veritabanında güncelleme işlemi yapılmalı
  res.send({ message: `User with id=${userId} updated successfully.` });
};

exports.deleteUser = (req, res) => {
  const userId = req.params.id;
  // Burada veritabanında silme işlemi yapılmalı
  res.send({ message: `User with id=${userId} deleted successfully.` });
};
