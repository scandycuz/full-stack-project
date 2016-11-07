import { connect } from 'react-redux';
import Campaign from './campaign';

import { requestSingleCampaign } from '../../actions/campaign_actions';

const mapStateToProps = ({ campaign }, ownState) => {

  return ({

  })
}

const mapDispatchToProps = (dispatch, { location }) => {

  return ({
    currentPath: () => {
      let path = location.pathname.split("/").pop();
      return (["edit"].includes(path)) ? path : 'view';
    },
    currentPathArray: () => {
      let pathArray = location.pathname.split("/");
      return pathArray;
    },
    requestSingleCampaign: id => dispatch(requestSingleCampaign(id))
  })
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Campaign);
