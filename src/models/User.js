const { model, Schema } = require('mongoose');

const userSchema = new Schema(
  {
    name: {
      type: String,
      require: true,
      maxLength: 30,
      minLength: [3, 'Name is too short'],
    },
    email: {
      type: String,
      require: true,
      unique: true,
      validate: {
        validator: (v) => {
          return /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-]+)(\.[a-zA-Z]{2,5}){1,2}$/.test(
            v
          );
        },
        message: (prop) => {
          return `Invalid Email ${prop.value}`;
        },
      },
    },
    password: String,
    role: {
      type: String,
      require: true,
      enum: ['CLIENT', 'ADMIN'],
      default: 'CLIENT',
    },
  },
  { timestamps: true }
);

const User = model('User', userSchema);

module.exports = User;
