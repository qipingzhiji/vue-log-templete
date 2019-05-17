import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(vuex)

var state={
	count:1
}

var mutations={
	incCount(){
		state.count++;
	}
}

const store = new Vuex.store({
	state,
	mutations: mutations
});

export store;