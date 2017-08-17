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
			var out = _('prosperity') + ': ';
			out += _('prosperity'+ st.current.prosperity) + ' - ';
			out += _('prosperity'+ st.current.prosperity + 'long') + '\n';
			out += _('population') + ': ';
			out += _('population'+ st.current.population) + ' - ';
			out += _('population'+ st.current.population + 'long') + '\n';
			out += _('defenses') + ': ';
			out += _('defenses'+ st.current.defenses) + ' - ';
			out += _('defenses'+ st.current.defenses + 'long') + '\n';
			return out;
		}
	}
}

var Steading = function (type) {
	var types = {
		village: {
			prosperity: 1,
			population: 2,
			defenses: 1,
			options: [
				['+safe', '-defenses'],
				['+prosperity', '=resource:', '=enmity:'],
				['=oath:', '+defenses'],
				['=trade:', '+prosperity'],
				['=personage:', '=blight:arcane creatures'],
				['+divine', '=history:']
			],
			tags: []
		}
	}

	var st = types[type];

	return {
		type: type,
		initial: {
			prosperity: st.prosperity,
			population: st.population,
			defenses: st.defenses,
			tags: st.tags
		},
		current: {
			prosperity: st.prosperity,
			population: st.population,
			defenses: st.defenses,
			tags: st.tags
		},
		options: st.options,
		reset: function () {
			this.current.prosperity = this.initial.prosperity;
			this.current.population = this.initial.population;
			this.current.defenses = this.initial.defenses;
			this.current.tags = this.initial.tags;
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
			console.debug(rule)

		}
	};
}

var steadings = [];
steadings.push(new Steading('village'));

var vm = new Vue({
	el: "#app",
	data: {
		lang: it,
		steadings: steadings,
		selSteading: steadings[0]
	},
	components: {
		'st-selector': Selector,
		'st-render': Render
	},
	methods: {
		select: function (index) {
			this.selSteading = this.steadings[index];
		},
		choose: function (index) {
			this.selSteading.reset();
			var rules = this.selSteading.options[index];
			for (var i=0; i < rules.length; i++) {
				this.selSteading.apply(rules[i]);
			}
		}
	}
})

vm.$watch('selSteading.selOption', function (newVal, oldVal) {
	console.debug(oldVal, newVal)
})