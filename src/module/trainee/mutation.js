import User from '../../service/user';
import pubsub from '../pubsub';
import constant from '../../lib/constant';

export default {
  createTrainee: (parent, args) =>{
    const { user } = args
    const addedUser = User.createUser(user);
    pubsub.publish(constant.subscriptions.TraineeAdded, { traineeAdded: addedUser});
    return addedUser;

  },
  updateTrainee: (parent, args) =>{
    const { id, role } = args;
    const updatedUser = User.updateUser(id, role);
    pubsub.publish(constant.subscriptions.TraineeUpdated, { traineeUpdated: updatedUser});
    return updatedUser;
  },
  deleteTrainee: (parent, args) =>{
    const { id } = args;
    const deletedUser = User.deleteUser(id);
    pubsub.publish(constant.subscriptions.TraineeDeleted, { traineeDeleted: deletedUser});
    return deletedUser;
  },
};
