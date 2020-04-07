exports.seed = function(knex) {
	// Deletes ALL existing entries
	return knex('prospects')
		.del()
		.then(function() {
			// Inserts seed entries
			return knex('prospects').insert([
				{
					name: 'CeeDee Lamb',
					grade: 6.81,
					position: 'WR',
					strengths:
						'Big-play talent on all three levels of the field,Havoc-wreaker with the ball in his hands, Averaged 21.4 yards per catch in 2019 as primary target, Changes route tempo and speeds to rock coverage to sleep, Glider who separates on all forms of crossing routes,Able to gather and open suddenly on back shoulders and comebacks,Awareness in working back to throws, Hand catches with good arm extension,Bouncy hops for jump balls, Makes late body adjustments to secure difficult deep catches, Slippery open-field runner with excellent vision,Has deceptive strength to shake free from arm tackles, Offers an instant upgrade as punt returner',
					weaknesses:
						'Slender build for consideration as a primary target, Frequently unchallenged by cornerbacks he played, Needs faster more efficient press release against pro corners, Must learn intricacies of uncovering underneath, Routes need to be more focused and purposeful, Wasted motion and steps setting up his breaks, Could struggle with adjustment to combat catches, Scheme created feasts in wide-open spaces, Can do a better job as stalk-blocker'
				},
				{
					name: 'Jerry Jeudy',
					grade: 6.8,
					position: 'WR',
					strengths:
						'Speed requires consistent respect from corners and safeties, Scored 24 touchdowns over his last 28 games, Experienced in pro-style route combinations, Early acceleration looks the same from snap to snap, Route speed is intense both intermediate and deep, Runs sharp routes with attention to detail, Leverages and stems cornerbacks toward numbers for post separation, Needs just four steps to gather and open on curls, Fluid hips promote easy transition out of turns, Above-average use of frame to win contested catches, Secures the ball through punishing contact, Bag of tricks to slip tacklers with ball in hands',
					weaknesses:
						'High-cut and leggy, Playing style is more linear than fluid, Average short-area quickness underneath, Rarely challenged by quality press, Needs to maintain play speed when locating football, Slender and unlikely to be a first option for working into the noise between hashes, Some adjustment issues tracking deep throws against Ole Miss and LSU, Needs to eliminate some easy drops, Inconsistent hand-eye coordination and concentration at times'
				}
			]);
		});
};
