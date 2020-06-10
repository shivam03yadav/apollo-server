import User from '../../service/user';

export default {
  createTrainee: (parent, args) =>{
    const { user } = args
    return User.createUser(user);
  },
  updateTrainee: (parent, args) =>{
    const { id, role } = args;
    return User.updateUser(id, role);
  },
  deleteTrainee: (parent, args) =>{
    const { id } = args;
    return User.deleteUser(id);
  },
};
