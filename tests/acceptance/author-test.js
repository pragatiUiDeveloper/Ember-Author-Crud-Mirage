import { test } from 'qunit';
import moduleForAcceptance from 'ember-authors/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | author');


test('visiting /author', function(assert) {
  visit('/author');
  andThen(function() {
    assert.equal(currentURL(), '/author');
  });



});
