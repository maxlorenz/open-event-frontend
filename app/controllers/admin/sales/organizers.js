import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { sumBy } from 'lodash';

export default Controller.extend({
  totalCompletedTickets: computed(function() {
    return sumBy(this.get('model'), 'completedTickets');
  }),
  totalCompletedSales: computed(function() {
    return sumBy(this.get('model'), 'completedSales');
  }),
  totalPlacedTickets: computed(function() {
    return sumBy(this.get('model'), 'placedTickets');
  }),
  totalPlacedSales: computed(function() {
    return sumBy(this.get('model'), 'placedSales');
  }),
  totalPendingTickets: computed(function() {
    return sumBy(this.get('model'), 'pendingTickets');
  }),
  totalPendingSales: computed(function() {
    return sumBy(this.get('model'), 'pendingSales');
  })
});
