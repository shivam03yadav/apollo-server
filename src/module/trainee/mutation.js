import pubsub from '../pubsub';
import constant from '../../lib/constant';

export default {
  createTrainee: async (parent, args, context) =>{
    const { payload: {name, email, password}, } = args;
    const { dataSources:{ traineeAPI }, } = context;
    const response = await traineeAPI.createTrainee({ name, email,password });
    pubsub.publish(constant.subscriptions.TraineeAdded, { traineeAdded: response.data});
    return response.data;

  },
  updateTrainee: async (parent, args, context) =>{
    const { payload: {name, email, password}, } = args;
    const { dataSources:{ traineeAPI }, } = context;
    const response = await traineeAPI.updateTrainee({ id, name, email });
    pubsub.publish(constant.subscriptions.TraineeUpdated, { traineeUpdated: { id, name, email },});
    return response.data;
  },
  deleteTrainee: async (parent, args, context) =>{
    const { id } = args;
    const { dataSources:{ traineeAPI }, } = context;
    const response = await traineeAPI.deleteTrainee(id);
    pubsub.publish(constant.subscriptions.TraineeDeleted, { traineeDeleted: response.data.id,});
    return response.data.id;
  },
};
