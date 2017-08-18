
var Steading = function (type) {
	var types = {
		village: {
			prosperity: 1,
			population: 2,
			defenses: 1,
			options: [
				['+safe', '-defenses'],
				['+prosperity', '+resource', '+enmity:'],
				['+oath:', '+defenses'],
				['+trade:', '+prosperity'],
				['+personage:wizard', '+blight:arcanecreatures'],
				['+divine'],
				['+history'],
			],
			problems: [
				['+need:food'],
				['+religion:deity', '+enmity:otherdeity'],
				['-population'],
				['-population', '-prosperity'],
				['-population', '-defenses'],
				['-population', '-prosperity', '-defenses'],
				['+blight:monster', '+need:adventurers'],
				['+population', '+lawless'],
				['-prosperity', '+dwarven'],
				['-prosperity', '+elven'],
			],
			tags: ['resource', 'oath']
		},
		town: {
			prosperity: 2,
			population: 2,
			defenses: 2,
			options: [
				['=population:4', '+lawless'],
				['+market', '+prosperity'],
				['+oath', '+defendes'],
				['+power:divine'],
				['+craft', '+resource:craft'],
				['+defenses']
			],
			problems: [
				['+need:resource', '+trade:resource'],
				['+oath', '-defenses'],
				['+personage:outlaw', '+enmity:crimes'],
				['+exotic', '+enmity'],
				['-population'],
				['+population', '+lawless']
			],
			tags: ['trade', 'trade']
		},
		keep: {
			prosperity: 1,
			population: 1,
			defenses: 3,
			options: [
				['+prosperity', '+power:political'],
				['+personage:commander', '+defenses'],
				['+prosperity', '+guild:trade'],
				['+arcane', '-population'],
				['-need:supplies'],
				['+defenses', '+enmity']
			],
			problems: [
				['+safe', '-population'],
				['+enmity'],
				['+lawless'],
				['+blight'],
				['+history:battle', '+blight:spirits'],
				['+need:recruits']
			],
			tags: ['need:supplies', 'trade:supplies', 'oath']
		},
		city: {
			prosperity: 2,
			population: 2,
			defenses: 3,
			options: [
				['+defenses', '+oath'],
				['+personage:ruler', '+power:political'],
				['+dwarven', '+elven'],
				['+trade', '+prosperity'],
				['+history', '+divine'],
				['+arcane', '+craft', '+power:arcane']
			],
			problems: [
				['+population', '+need:food'],
				['+enmity', '+defenses'],
				['-defenses', '+power:divine'],
				['-defenses', '+population'],
				['+defenses', '+blight'],
				['+arcane', '+personage', '+blight'],
			],
			tags: ['market', 'guild', 'oath', 'oath']
		}
	}

	var st = types[type];

	return {
		type: type,
		initial: {
			prosperity: st.prosperity,
			population: st.population,
			defenses: st.defenses,
			tags: st.tags.slice()
		},
		current: {
			prosperity: st.prosperity,
			population: st.population,
			defenses: st.defenses,
			tags: st.tags.slice().sort()
		},
		options: st.options.slice(),
		problems: st.problems.slice(),
		reset: function () {
			this.current.prosperity = this.initial.prosperity;
			this.current.population = this.initial.population;
			this.current.defenses = this.initial.defenses;
			this.current.tags = this.initial.tags.slice();
		},
		apply: function (rule) {
			if (rule === '+prosperity') {
				this.current.prosperity++;
				return
			}
			if (rule === '-prosperity') {
				this.current.prosperity--;
				return
			}
			if (rule === '+population') {
				this.current.population++;
				return
			}
			if (rule === '-population') {
				this.current.population--;
				return
			}
			if (rule === '+defenses') {
				this.current.defenses++;
				return
			}
			if (rule === '-defenses') {
				this.current.defenses--;
				return
			}

			var op = rule.charAt(0);
			rule = rule.substr(1);
			if (op === '+') {
				this.current.tags.push(rule);
				return;
			}
			if (op === '-') {
				splice(this.current.tags, rule);
				return;
			}
			if (op === '=') {
				var parts = rule.split(':');
				if (parts[0] === 'prosperity') {
					this.current.prosperity = parseInt(parts[1]);
					console.debug(this.current)
					return;
				}
				if (parts[0] === 'population') {
					this.current.population = parseInt(parts[1]);
					return;
				}
				if (parts[0] === 'defenses') {
					this.current.defenses = parseInt(parts[1]);
					return;
				}
			}

		}
	};
}


var Selector = {
	props: ['steadings', 'lang'],
	template: '<div><button class="btn btn-primary" v-for="(st, index) in steadings" v-on:click="select(index)" > {{ lang("steading" + st.type + "button") }}</button><hr></div>',
	methods: {
		select: function (index) {
			this.$emit('select', index);
		}
	}
}

var Render = {
	props: ['steading', 'lang'],
	template: '<div class="form-group"><textarea class="form-control" rows="10">{{ render(steading, lang) }}</textarea></div>',
	methods: {
		render: function (st, _) {
			var out = _('prosperity') + ':\t';
			out += _('prosperity'+ st.current.prosperity) + ' - ';
			out += _('prosperity'+ st.current.prosperity + 'long') + '\n';
			out += _('population') + ':\t';
			out += _('population'+ st.current.population) + ' - ';
			out += _('population'+ st.current.population + 'long') + '\n';
			out += _('defenses') + ':\t\t';
			out += _('defenses'+ st.current.defenses) + ' - ';
			out += _('defenses'+ st.current.defenses + 'long') + '\n';
			out += '\n';

			out += _('option' + st.type + st.selOption) + '\n';
			out += _('problem' + st.type + st.selProblem) + '\n';

			out += '\n';

			for (var i=0; i<st.current.tags.length; i++) {
				var tag = st.current.tags[i];
				var exttag = tag;
				var parts = tag.split(':');

				if (parts.length > 1) {
					tag = parts[0];
					exttag = parts[0] + parts[1];
				}

				out += _(exttag) + ' - ';
				out += _(tag + 'text') + '\n';
			}
			return out;
		}
	}
}

var steadings = [];
steadings.push(new Steading('village'));
steadings.push(new Steading('town'));
steadings.push(new Steading('keep'));
steadings.push(new Steading('city'));

var vm = new Vue({
	el: "#app",
	data: {
		lang: it,
		steadings: steadings,
		selSteading: steadings[2]
	},
	components: {
		'st-selector': Selector,
		'st-render': Render
	},
	ready: function () {
		document.title = this.data.lang('title');
	},
	methods: {
		select: function (index) {
			this.selSteading = this.steadings[index];
		},
		choose: function (type, index) {
			if (type === 'option') {
				this.selSteading.selOption = index;
			}
			if (type === 'problem') {
				this.selSteading.selProblem = index;
			}
			this.selSteading.reset();
			var rules = this.selSteading.options[this.selSteading.selOption];
			for (var i=0; rules && i < rules.length; i++) {
				this.selSteading.apply(rules[i]);
			}
			var rules = this.selSteading.problems[this.selSteading.selProblem];
			for (var i=0; rules && i < rules.length; i++) {
				this.selSteading.apply(rules[i]);
			}
			this.selSteading.current.tags.sort();
		}
	}
})

function splice(list, el) {
	var index = list.indexOf(el);
	if (index > -1) {
		list.splice(index, 1);
	}
}