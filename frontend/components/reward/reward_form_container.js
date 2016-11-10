import { connect } from 'react-redux';
import RewardForm from './reward_form';



const mapStateToProps = ({ campaign, session, profile }) => ({
  campaign: campaign.campaign,
  currentUser: session.currentUser,
});

const mapDispatchToProps = (dispatch, { location }) => {

  return({

  })
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RewardForm);
