import pubsub from '../pubsub';
import constant from '../../lib/constant';

export default{
  traineeAdded: {
    subscribe: () => pubsub.asyncIterator(
      [constant.subscriptions.TraineeAdded]
    ),
  },
  traineeUpdated: {
    subscribe: () => pubsub.asyncIterator(
      [constant.subscriptions.TraineeUpdated]
    ),
  },
  traineeDeleted: {
    subscribe: () => pubsub.asyncIterator(
      [constant.subscriptions.TraineeDeleted]
    ),
  },

}
