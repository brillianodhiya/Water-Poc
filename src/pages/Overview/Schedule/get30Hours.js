import moment from 'moment';

export const getHour30Events = () => {
  let items = [];
  new Array(24).fill().forEach((acc, index) => {
    items.push({
      time: moment({ hour: index }).format('HH:mm'),
      events: [],
    });
    items.push({
      time: moment({ hour: index, minute: 30 }).format('HH:mm'),
      events: [],
    });
  });
  return items;
};
