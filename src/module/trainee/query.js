import User from '../../service/user';

export default{
  getAllTrainees: () => {
    return User.getAllUsers();
  },
};
