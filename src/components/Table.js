import React from 'react';
import TableRow from './TableRow';
import { SORT_TYPES } from '../actions/actionTypes';
/* import {'caret-down.svg'} from '../.././public';*/

class Table extends React.Component {
  constructor() {
    super();
    // console.log('table.js', this.props);
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
  cb = () => {
    this.props.sortBy === SORT_TYPES.ALL_TIME_DESC ?
      this.props.sort(SORT_TYPES.ALL_TIME_ASC) :
      this.props.sort(SORT_TYPES.ALL_TIME_DESC)
  }
    chooseImage = (section, currentSort) => {
        /* const currentSort = this.props.sortBy;*/
        const down = "caret-down.svg";
        const up = "caret-up.svg";
        const right = "caret-right.svg";
                console.log('currentSort:', currentSort);
                console.log('section:', section);
        switch(section) {
            case 'name':
                if(currentSort === SORT_TYPES.NAME_DESC) return down;
                else if (currentSort === SORT_TYPES.NAME_ASC) return up;
                else return right;
                break;
            case 'past30':
                if(currentSort === SORT_TYPES.PAST_30_DESC) return down;
                else if (currentSort === SORT_TYPES.PAST_30_ASC) return up;
                else return right;
                break;
            case 'allTime':
                if(currentSort === SORT_TYPES.ALL_TIME_DESC) return down;
                else if (currentSort === SORT_TYPES.ALL_TIME_ASC) return up;
                else return right;
                break;
            default: return right;
        }
        /* return right;*/
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
            <td onClick={this.cb}>
                Camper Name
                <img className="caret"
                     src={this.chooseImage('name', sortBy)}
                     alt="caret" />
            </td>
            <td onClick={this.cb}>
                Points in past 30 days
                <img className="caret"
                     src={this.chooseImage('past30', sortBy)}
                     alt="caret" />
            </td>
            <td onClick={this.cb}>
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
