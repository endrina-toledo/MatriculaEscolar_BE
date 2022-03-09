const user = (sequelize, DataTypes) =>{
    const User = sequelize.define(
        'user',
        {
            usr_id:{
                type: DataTypes.Integer,
                primaryKey: true,
                autoIncrement: true
            },
            usr_name:{
                type: DataTypes.String
            },
            usr_password :{
                type: DataTypes.String
            }
        }
    );
User.sync();
return User
}


export default user;