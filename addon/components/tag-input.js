import Ember from 'ember';
import layout from '../templates/components/tag-input';

export default Ember.Component.extend({
  layout,
  classNames: ['emberTagInput'],
  tagName: 'ul'
});
