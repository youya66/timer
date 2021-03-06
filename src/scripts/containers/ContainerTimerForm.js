import {connect} from "react-redux";
import TimerForm from "../components/TimerForm";
import actions from "../actions";

const mapStateToProps = state => ({
    form: state.form
});

const mapDispatchToProps = dispatch => ({
    add_timer: (count, date, alarmFlag) => dispatch(actions.add_timer(count, date, alarmFlag)),
    change_input: count => dispatch(actions.change_input(count)),
    init_input: () => dispatch(actions.init_input())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TimerForm);