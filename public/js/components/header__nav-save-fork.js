/* =========================================================================
 *
 * header__nav-save-fork.js
 *  Create links to the gist and block page, as well as display the gist's title
 *  and the author's username.
 *
 * ========================================================================= */
import React from 'react';
import Actions from '../actions/actions.js';

var SaveForkNav = React.createClass({
  save: function save() {
    Actions.saveGist(this.props.gist);
  },

  fork: function fork() {
    Actions.forkGist(this.props.gist);
  },
  render: function render() {
    var gist = this.props.gist;
    var user = this.props.user;
    var save = "";
    if(user && gist && gist.owner && user.id === gist.owner.id) {
      save = ( <div id='block__save' onClick={ this.save }>Save</div> )
    }

    return (
      <div>
        <div id='block__fork' onClick={ this.fork }>Fork</div>
        {save}
      </div>
    )
  }
});

export default SaveForkNav