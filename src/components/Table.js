import React from 'react';
import TableRow from './TableRow';
import { SORT_TYPES } from '../actions/actionTypes';

class Table extends React.Component {
  constructor() {
    super();
    this.renderRows = this.renderRows.bind(this);
  }
  renderRows() {
    if (this.props.campers) {
      return this.props.campers.map((camper, index) => {
        return <TableRow
          key={index}
          index={index}
          img={camper.img}
          username={camper.username}
          recent={camper.recent}
          alltime={camper.alltime}
        />
      })
    }
  }
  cb = (section) => {
      const currentSort = this.props.sortBy;
      if(section === 'name') {
          currentSort === SORT_TYPES.NAME_DESC
          ? this.props.sort(SORT_TYPES.NAME_ASC)
          : this.props.sort(SORT_TYPES.NAME_DESC);
      }
      else if(section === 'past30') {
          currentSort === SORT_TYPES.PAST_30_DESC
          ? this.props.sort(SORT_TYPES.PAST_30_ASC)
          : this.props.sort(SORT_TYPES.PAST_30_DESC)
      }
      else if(section === 'allTime') {
          currentSort === SORT_TYPES.ALL_TIME_DESC
          ? this.props.sort(SORT_TYPES.ALL_TIME_ASC)
          : this.props.sort(SORT_TYPES.ALL_TIME_DESC);
               }
  }
    chooseImage = (section, currentSort) => {
        const down = "caret-down.svg";
        const up = "caret-up.svg";
        const right = "caret-right.svg";
        switch(section) {
            case 'name':
                if(currentSort === SORT_TYPES.NAME_DESC) return down;
                else if (currentSort === SORT_TYPES.NAME_ASC) return up;
                else return right;
            case 'past30':
                if(currentSort === SORT_TYPES.PAST_30_DESC) return down;
                else if (currentSort === SORT_TYPES.PAST_30_ASC) return up;
                else return right;
            case 'allTime':
                if(currentSort === SORT_TYPES.ALL_TIME_DESC) return down;
                else if (currentSort === SORT_TYPES.ALL_TIME_ASC) return up;
                else return right;
            default: return right;
        }
    }
  render() {
      let {sortBy} = this.props;
    return (
      <table className="table">
        <thead>
          {/*<tr>Camper Leaderboard</tr>*/}
          <tr className="table-thead-tr">
            <td>#</td>
            <td className='profile-pic-column'></td>
            <td onClick={() => this.cb('name')}>
                Camper Name
                <img className="caret"
                     src={this.chooseImage('name', sortBy)}
                     alt="caret" />
            </td>
            <td onClick={() => this.cb('past30')}>
                Points in past 30 days
                <img className="caret"
                     src={this.chooseImage('past30', sortBy)}
                     alt="caret" />
            </td>
            <td onClick={() => this.cb('allTime')}>
                All time points
                <img className="caret"
                     src={this.chooseImage('allTime', sortBy)}
                     alt="caret" />
            </td>
          </tr>
        </thead>
        <tbody>
          {this.renderRows()}
        </tbody>
      </table>
    )
  }
}

export default Table;
