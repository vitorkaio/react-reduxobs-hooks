import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as reposActions from '../../store/ducks/repos/actions';

/* eslint react/prop-types: 0 */

const Home = ({ repositories, reposRequest }) => {
  // Similar to componentDidMount:
  useEffect(() => {
    reposRequest('vitorkaio');
  }, []);

  const { repos, load } = repositories;

  return (
    <div>
      {
        load ? <h3>Loading...</h3> : (
          <ul>
            {
              repos.map(item => <li key={item.id}>{ item.name }</li>)
            }
          </ul>
        )
      }
    </div>
  );
};

/* const mapStateToProps = (state) => ({
  reposReducer: state.reposReducer,
}); */

const mapStateToProps = state => ({
  repositories: state.repositories,
});

const mapDispatchToProps = dispatch => bindActionCreators(reposActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
