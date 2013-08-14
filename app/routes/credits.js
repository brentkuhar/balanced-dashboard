Balanced.CreditsIndexRoute = Balanced.AuthRoute.extend({
    redirect: function () {
        this.transitionTo('activity.transactions');
    }
});

Balanced.CreditsRoute = Balanced.AuthRoute.extend({
	title: 'Credit',

	model: function (params) {
		var marketplace = this.modelFor('marketplace');
		return marketplace.then(function(marketplace) {
			var creditUri = marketplace.get('credits_uri') + '/' + params.credit_id;
			return Balanced.Credit.find(creditUri);
		});
	}
});