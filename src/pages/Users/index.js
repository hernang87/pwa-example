import { h, Component } from 'preact';
import { connect } from 'preact-redux';
import { fetchUsers } from '../../actions';
import UserList from '@components/UserList';

const mapStateToProps = state => ({
  users: state.users
});

const mapDispatchToProps = ({
  fetchUsers
});

@connect(mapStateToProps, mapDispatchToProps)
class Users extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    return <UserList users={this.props.users.data} />
  }
};



export default Users;