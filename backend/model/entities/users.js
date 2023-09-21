module.exports = (sequelize, Sequelize) => {
    const signup = sequelize.define("users", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        validate: {
               notEmpty: true,
            }
      },
      Name: {
        type: Sequelize.STRING,
        allowNull: true,
        unique: false
      },
      e_mail: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        primaryKey: true
      },
      pass_word: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false
      },
      contact_number: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: false
      }
    },
    {
      timestamps:false,
      createdAt:false,
      updatedAt:false
    }
);

    return signup;
  };