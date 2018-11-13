

import {
  REQUIREING,
  REQUIRE_SUCCESS,
  REQUIRE_FAIL
} from './mutation-types';
export default {
  [REQUIREING] (state) {
    state.firstView=false,
    state.Loading=true,
    state.users=[],
    state.errMeg=''
  },
  [REQUIRE_SUCCESS] (state,{users}) {
    state.Loading=false,
    state.users=users
  },
  [REQUIRE_FAIL] (state,{errmeg}) {
    state.Loading=false,
    state.errmeg=errmeg
  }
}
