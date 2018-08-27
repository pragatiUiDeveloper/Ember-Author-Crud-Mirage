import DS from 'ember-data';
const{attr} = DS;

export default DS.Model.extend({
	srNo:attr('string'),
	name:attr('string'),
	age:attr('number'),
	admin:attr('boolean'),
	avatar:attr('string'),
	hobbies:attr()
});
