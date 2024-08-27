const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config/connection.js')
const bcrypt = require('bcrypt')

class UserCreds extends Model {
    //compares the endered password with the password in the database
    async isPassword(password) {
        return await bcrypt.compare(password, this.password)
    }
}

UserCreds.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user_creds',
        hooks: {
            //Encrypts password before creation
            beforeCreate: async (creds) => {
                const encryptPassword = await bcrypt.hash(creds.password, 10)
                creds.password = encryptPassword
                return creds
            },
        },
    }
)

module.exports = UserCreds
